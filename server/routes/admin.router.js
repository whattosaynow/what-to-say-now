const express = require('express');
const axios = require('axios');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated, rejectNonAdmin } = require("../modules/authentication-middleware");
const cron = require('node-cron');
const moment = require('moment');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



//this route will get all the content(info for each role, week, and ageGroup) from the content table
router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query(`
    SELECT * FROM "content";
    `).then((result) => {
        res.send(result.rows)
    })
        .catch((error) => {
            console.log('error with admin get, error:', error)
            res.sendStatus(500)

        });
})

//this route will update the content table's intro/phrase/etc. columns based on changes from the admin edit page.
//it uses the id to target the specific row to change since every different combination of role/week/ageGroup have their own unique ID
router.put('/', rejectUnauthenticated, rejectNonAdmin, (req, res) => {
    pool.query(`
    UPDATE "content" SET
        "intro" = $1,
        "phrase" = $6,
        "why_matters" = $2,
        "reflection" = $3,
        "action_steps" = $4
        WHERE "id"=$5 ;`,
        [
            req.body.intro,
            req.body.why_matters,
            req.body.reflection,
            req.body.action_steps,
            req.body.id,
            req.body.phrase
        ]
    ).then((result) => {
        res.sendStatus(200)
    })
        .catch((error) => {
            console.log('error with admin put, error:', error)
            res.sendStatus(500)

        });
});

//this route will get all of the information from the user table EXCEPT passwords so it can be used to create a CSV for the admin
router.get('/csv', rejectUnauthenticated, rejectNonAdmin, (req, res) => {
    pool.query(`
    SELECT 
        "first_name", 
        "last_name",
        "username",
        "role",
        "email",
        "phone_number",
        "street_address",
        "city",
        "state",
        "zip",
        "date_created",
        
        "S1_choose_receive",
        "S1_your_gender",
        "S1_your_age",
        "S1_years_coaching",
        "S1_genders_of_athletes_female",
        "S1_genders_of_athletes_male",
        "S1_genders_of_athletes_non_binary",
        "S1_numbers_of_athletes",
        "S1_focus_ages",
        "S1_how_did_you_find_us",
        "S1_how_did_you_find_us_referral",
        "S1_why_are_you_participating",
        "S1_why_are_you_participating_other",
        
        "S2_challenge_completed",
        "S2_participating_was_easy",
        "S2_learned_something_new",
        "S2_would_encourage",
        "S2_challenge_felt_relavent",
        "S2_challenge_impacted_behavior",
        "S2_understanding_importance_changed",
        "S2_affected_ability_interact",
        "S2_favorite_thing",
        "S2_call_more_information",
        
        "S3_continued_impact",
        "S3_how_impact",
        "S3_continued_affected_ability_interact",
        "S3_anything_else",
        "S3_call_more_information"
         FROM "user";
`).then(response => {
        res.send(response.rows)
    }
    ).catch(error => {
        console.log('error with csv get router,', error)
        res.sendStatus(500);
    })
});

cron.schedule('0-59 * * * *', () => {
    automatedContact(); //this function will run every sunday at 6:00pm
}, {
    timezone: "America/Chicago"
})

//this functions does a pool query to the database to select all users
//then with the response, forEach user it will run the receive challenge function
function automatedContact() {
    //BETWEEN NOW() - INTERVAL '14 WEEK' AND NOW();
    pool.query(`
    SELECT * FROM "user"
    WHERE ("date_created" BETWEEN NOW() - INTERVAL '12h' AND NOW()) AND "is_admin" = false;
    `
    ).then(response => {
        response.rows.forEach(user => {
            receiveChallenge(user)
        })
    }).catch(error => {
        console.log('error with node cron function,', error)
        res.sendStatus(500);
    })
}

//the receiveChallenge function checks each user to see their preference on how they receive the weekly info
//if they prefer email, we run the receiveEmail function with that user
//if they prefer Text, we run the receiveText function with that user
//if they want both, we run both with that user
function receiveChallenge(user) {
    if (user.S1_choose_receive === 'email') {
        receiveEmailTest(user);
    } else if (user.S1_choose_receive === 'text') {
        receiveTextTest(user);
    } else {
        receiveEmailTest(user);
        receiveTextTest(user);
    }
}

//the receiveEmail function compares the current date to the user's date created
//depending on the result, they will receive weekly challenge, post, or three month survey via the sendEmail function
function receiveEmail(user) {
    let dateCreated = moment(user.date_created);
    let currentDate = moment();
    let answer = moment(currentDate).diff(dateCreated, 'dyas');
    console.log('answer,', answer)

    if (answer <= 7 && answer >= 0) {
        sendEmail(user, 1) //week 1
    } else if (answer < 15 && answer > 7) {
        sendEmail(user, 2) //week 2
    } else if (answer < 22 && answer >= 15) {
        sendEmail(user, 3) //week 3
    } else if (answer < 29 && answer >= 22) {
        sendEmail(user, 4) //week 4
    } else if (answer < 36 && answer >= 29) {
        sendEmail(user, 5) //week 5
    } else if (answer < 42 && answer >= 36) {
        sendEmail(user, 6) //post survey
    } else if (answer < 91 && answer >= 84) {
        sendEmail(user, 7) //3month survey
    }
}

function receiveEmailTest(user) {
    let dateCreated = moment(user.date_created);
    let currentDate = moment();
    let answer = moment(currentDate).diff(dateCreated, 'minute');

    if (answer === 30) {
        sendEmail(user, 1) //week 1
    } else if (answer === 60) {
        sendEmail(user, 2) //week 2
    } else if (answer === 90) {
        sendEmail(user, 3) //week 3
    } else if (answer === 120) {
        sendEmail(user, 4) //week 4
    } else if (answer === 150) {
        sendEmail(user, 5) //week 5
    } else if (answer === 180) {
        sendEmail(user, 6) //post survey
    } else if (answer === 210) {
        sendEmail(user, 7) //3month survey
    }
}

// https://www.youtube.com/watch?v=wevmV9iZswI
//the sendEmail function takes the user and the week, and sends them specific info depending on the week 
function sendEmail(user, week) {
    if (week <= 5) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: user.email,
            from: 'WhatToSayNowChallenge@gmail.com',
            subject: `What To Say Now Coaches Challenge - Week ${week}`,
            text: `Hi ${user.username}! Welcome to week ${week} of the challenge! Here is the link to this weeks info: ${process.env.API_URL}/${user.role}/${week}/${user.S1_focus_ages}`
        };
        sgMail.send(msg);
        //if the user is 6 weeks old, they receive the post program survey link
    } else if (week === 6) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: user.email,
            from: 'WhatToSayNowChallenge@gmail.com',
            subject: `What To Say Now Coaches Challenge - Post Survey`,
            text: `Hi ${user.username}! Thank you for completing the What to Say Now Challenge. Here is a link to our Post Program Survey: ${process.env.API_URL}/postsurvey1`
        };
        sgMail.send(msg);
        //if the user is 3 months old, they receive the three month survey
    } else if (week === 7) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: user.email,
            from: 'WhatToSayNowChallenge@gmail.com',
            subject: `What To Say Now Coaches Challenge - Followup Survey`,
            text: `Hi ${user.username}! Thank you for completing the What to Say Now Challenge. Here is a link to our Post Program Survey: ${process.env.API_URL}/postsurvey1`
        };
        sgMail.send(msg);
    }
}

//the receiveText function compares the current date to the user's date created
//depending on the result, they will receive weekly challenge, post, or three month survey via the sendText function
function receiveText(user) {
    let dateCreated = moment(user.date_created, 'YYYY MM DD');
    let currentDate = moment();
    let answer = moment(currentDate).diff(dateCreated, 'days');

    if (answer <= 7 && answer >= 0) {
        sendText(user, 1) //week 1
    } else if (answer < 15 && answer > 7) {
        sendText(user, 2) //week 2
    } else if (answer < 22 && answer >= 15) {
        sendText(user, 3) //week 3
    } else if (answer < 29 && answer >= 22) {
        sendText(user, 4) //week 4
    } else if (answer < 36 && answer >= 29) {
        sendText(user, 5) //week 5
    } else if (answer < 42 && answer >= 36) {
        sendText(user, 6) //post survey
    } else if (answer < 91 && answer >= 84) {
        sendText(user, 7) //3month survey
    }
}

function receiveTextTest(user) {
    let dateCreated = moment(user.date_created);
    let currentDate = moment();
    let answer = moment(currentDate).diff(dateCreated, 'minute');

    if (answer === 30) {
        sendText(user, 1) //week 1
    } else if (answer === 60) {
        sendText(user, 2) //week 2
    } else if (answer === 90) {
        sendText(user, 3) //week 3
    } else if (answer === 120) {
        sendText(user, 4) //week 4
    } else if (answer === 150) {
        sendText(user, 5) //week 5
    } else if (answer === 180) {
        sendText(user, 6) //post survey
    } else if (answer === 210) {
        sendText(user, 7) //3month survey
    }
}

function sendText(user, week) {
    //if the user is less than or equal to 5 weeks, they receive the weekly challenge info based on their role, the week, and their age group
    if (week <= 5) {
        client.messages.create({
            body: `Hi ${user.username}! Welcome to week ${week} of the challenge! Here is the link to this weeks info: ${process.env.API_URL}/${user.role}/${week}/${user.S1_focus_ages}`,
            from: '+16512731912',
            to: user.phone_number
        }).then(message => console.log(message.status))
            .done();
        //if the user is 6 weeks old, they receive the post program survey link
    } else if (week === 6) {
        client.messages.create({
            body: `Hi ${user.username}! Thank you for participating in the What To Say Now Challenge. Here is a link to our Post Program Survey: ${process.env.API_URL}/postsurvey1`,
            from: '+16512731912',
            to: user.phone_number
        }).then(message => console.log(message.status))
            .done();
        //if the user is 3 months old, they receive the three month survey
    } else if (week === 7) {
        client.messages.create({
            body: `Hi ${user.username}! Thank you for participating in the What To Say Now Challenge. Here is a link to our Three Month Followup Survey: ${process.env.API_URL}/three-month-survey`,
            from: '+16512731912',
            to: user.phone_number
        }).then(message => console.log(message.status))
            .done();
    }
}

module.exports = router;
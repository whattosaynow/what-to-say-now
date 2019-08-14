const express = require('express');
const axios = require('axios');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated, rejectNonAdmin } = require("../modules/authentication-middleware");
const cron = require('node-cron');
const moment = require('moment');
const nodemailer = require('nodemailer');
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
        "S1_genders_of_athletes",
        "S1_numbers_of_athletes",
        "S1_focus_ages",
        "S1_how_did_you_find_us",
        "S1_why_are_you_participating",
        "S1_can_we_call_after_completion",
        
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


// router.get('/charts', (req, res) => {
//     pool.query(`SELECT "S1_focus_ages", "S1_how_did_you_find_us" from "user", "S2_focus_ages", 
//     "S2_would_encourage", "S2_affected_ability_interact" from "user";`
//                 ).then(response => {
//                     console.log('response.rows:', response.rows)
//                     res.send(response.rows)
//                 }
//                 ).catch(error => {
//                     console.log('error with csv get router,', error)
//                     res.sendStatus(500);
//                 })
// }); 

cron.schedule('0 10 * * *', () => {
    automatedContact(); //this function will run every day at 10:00am
})

//this functions does a pool query to the database to select all users
//then with the response, forEach user it will run the receive challenge function
function automatedContact() {
    pool.query(`
    SELECT * FROM "user"
    WHERE "date_created" = (CURRENT_DATE - 7) 
    OR "date_created" = (CURRENT_DATE - 14) 
    OR "date_created" = (CURRENT_DATE - 21) 
    OR "date_created" = (CURRENT_DATE - 28) 	
    OR "date_created" = (CURRENT_DATE - 35) 
    OR "date_created" = (CURRENT_DATE - 84)`
    ).then(response => {
        response.rows.forEach(user => {
            receiveChallenge(user)
        })
    }).catch(error => {
        console.log('error with some test function get router,', error)
        res.sendStatus(500);
    })
}

//the receiveChallenge function checks each user to see their preference on how they receive the weekly info
//if they prefer email, we run the receiveEmail function with that user
//if they prefer Text, we run the receiveText function with that user
//if they want both, we run both with that user
function receiveChallenge(user) {
    if (user.S1_choose_receive === 'email') {
        receiveEmail(user);
    } else if (user.S1_choose_receive === 'text') {
        receiveText(user);
    } else {
        receiveEmail(user);
        receiveText(user);
    }
}

//the receiveEmail function compares the current date to the user's date created
//depending on the result, they will receive weekly challenge, post, or three month survey via the sendEmail function
function receiveEmail(user) {
    let dateCreated = moment(user.date_created, 'YYYY MM DD');
    let currentDate = moment();
    let answer = moment(currentDate).diff(dateCreated, 'days');

    if (answer <= 7 && answer >= 0) {
        sendEmail(user, 1) //week 1
    } else if (answer < 15 && answer > 7) {
        sendEmail(user, 2) //week 2
    } else if (answer < 22 && answer > 15) {
        sendEmail(user, 3) //week 3
    } else if (answer < 29 && answer > 22) {
        sendEmail(user, 4) //week 4
    } else if (answer < 36 && answer > 29) {
        sendEmail(user, 5) //week 5
    } else if (answer < 42 && answer > 36) {
        sendEmail(user, 6) //post survey
    } else if (answer < 91 && answer > 84) {
        sendEmail(user, 7) //3month survey
    }
}

//the sendEmail function takes the user and the week, and sends them specific info depending on the week 
function sendEmail(user, week) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    //if the user is less than or equal to 5 weeks, they receive the weekly challenge info based on their role, the week, and their age group
    if (week <= 5) {
        let mailOptions = {
            from: 'WhatToSayNowChallenge@gmail.com ',
            to: user.email,
            subject: 'Sent from NodeCron',
            text: `Hi ${user.username}! Here is the link for your weekly challenge: localhost:3000/${user.role}/${week}/${user.S1_focus_ages}`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        //if the user is 6 weeks old, they receive the post program survey link
    } else if (week === 6) {
        let mailOptions = {
            from: 'WhatToSayNowChallenge@gmail.com ',
            to: user.email,
            subject: 'Sent from NodeCron',
            text: `Hi ${user.username}! Thank you for completing the What to Say Now Challenge. Here is a link to our Post Program Survey: localhost:/#/postsurvey1`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        //if the user is 3 months old, they receive the three month survey
    } else if (week === 7) {
        let mailOptions = {
            from: 'WhatToSayNowChallenge@gmail.com ',
            to: user.email,
            subject: 'Sent from NodeCron',
            text: `Hi ${user.username}! Thank you for completing the What to Say Now Challenge. Here is a link to Three Month Followup Survey: localhost:/#/three-month-survey`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

//the receiveText function compares the current date to the user's date created
//depending on the result, they will receive weekly challenge, post, or three month survey via the sendText function
function receiveText(user) {
    let dateCreated = moment(user.date_created, 'YYYY MM DD');
    let currentDate = moment();
    let answer = moment(currentDate).diff(dateCreated, 'days');

    if (answer < 7 && answer >= 0) {
        sendText(user, 1) //week 1
    } else if (answer < 15 && answer > 7) {
        sendText(user, 2) //week 2
    } else if (answer < 22 && answer > 15) {
        sendText(user, 3) //week 3
    } else if (answer < 29 && answer > 22) {
        sendText(user, 4) //week 4
    } else if (answer < 36 && answer > 29) {
        sendText(user, 5) //week 5
    } else if (answer < 42 && answer > 36) {
        sendText(user, 6) //post survey
    } else if (answer < 91 && answer > 84) {
        sendText(user, 7) //3month survey
    }
}

function sendText(user, week) {
    //if the user is less than or equal to 5 weeks, they receive the weekly challenge info based on their role, the week, and their age group
    if (week <= 5) {
        client.messages.create({
            body: `Hi ${user.username}! Your role_id: ${user.role}, week ${week}, ageGroup: ${user.S1_focus_ages}`,
            from: '+16512731912',
            to: user.phone_number
        }).then(message => console.log(message.status))
            .done();
        //if the user is 6 weeks old, they receive the post program survey link
    } else if (week = 6) {
        client.messages.create({
            body: `Hi ${user.username}! Thank you for participating in the What To Say Now Challenge. Here is a link to our Post Program Survey: localhost:/#/postsurvey1`,
            from: '+16512731912',
            to: user.phone_number
        }).then(message => console.log(message.status))
            .done();
        //if the user is 3 months old, they receive the three month survey
    } else if (week = 7) {
        client.messages.create({
            body: `Hi ${user.username}! Thank you for participating in the What To Say Now Challenge. Here is a link to our Three Month Followup Survey: localhost:/#/three-month-survey`,
            from: '+16512731912',
            to: user.phone_number
        }).then(message => console.log(message.status))
            .done();
    }
}

module.exports = router;
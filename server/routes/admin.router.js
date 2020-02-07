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

    "first_name" as "First Name",
    "last_name" as "Last name",
    "username" as "Username",
    "email" as "Email",
    "phone_number" as "Phone Number",
    "street_address" as "Street Address",
    "city" as "City",
    "state" as "State",
    "zip" as "Zip",
    "date_created" as "Date Created",

    "S1_choose_receive" as "S1 - Choose to receive the Challenges",
    "S1_your_gender" as "S1 - User gender",
    "S1_your_age" as "S1 - User age",
    "S1_years_coaching" as "S1 - Number of years you’ve been coaching",
    "S1_genders_of_athletes_female" as "S1 - Athletes gender - female",
    "S1_genders_of_athletes_male" as "S1 - Athletes gender - male",
    "S1_genders_of_athletes_non_binary" as "S1 - Athletes gender - non-binary",
    "S1_genders_of_athletes_not_coach" as "S1 - User is not a coach",
    "S1_numbers_of_athletes" as "S1 - Number of athletes on the team you coach",
    "S1_focus_ages" as "S1 - Age(s) you coach and want to focus on with during the Challenge",
    "S1_parent_or_guardian" as "S1 - Question 8 - I’m a parent or guardian of a child",
    "S1_healthcare_professional" as "S1 - Question 8 - I’m health care professional",
    "S1_teacher" as "S1 - Question 8 - I’m a teacher",
    "S1_non_above" as "S1 - Question 8 - None of the above",
    "S1_sports_org" as "S1 - What youth sports organizations affiliated with",
    "S1_how_did_you_find_us" as "S1 - How did you find us",
    "S1_how_did_you_find_us_other" as "S1 - How did you find us - other - fill in the blank",    
    "S1_how_did_you_find_us_referral" as "S1 - How did you find us - referral - fill in the blank",
    "S1_why_are_you_participating" as "S1 - Why are you particpating in the What to Say Coaches Challenge",
    "S1_why_are_you_participating_other" as "S1 - Why are you particpating in the What to Say Coaches Challenge - other - fill in the blank",

    "S2_challenge_completed" as "S2 - How much of the Challenge did you complete",
    "S2_participating_was_easy" as "S2 - Participating in the Challenge was easy to do",
    "S2_learned_something_new" as "S2 - I learned something new from participating in the Challenge",
    "S2_what_learned" as "S2 - Learned something new - Agree - fill in the blank",
    "S2_would_encourage" as "S2 - I would encourage another coach I know to do the Challenge",
    "S2_challenge_felt_relavent" as "S2 - The Challenge felt relevant to the age I coach",
    "S2_challenge_impacted_behavior" as "S2 - The Challenge impacted my behavior with the athletes I coach.",
    "S2_how_impacted" as "S2 - Challenge impacted behavior - agree - fill in the blank",
    "S2_understanding_importance_changed" as "S2 - My understanding of the importance of messages kids hear from adults about food and body has changed",
    "S2_affected_ability_interact" as "S2 - The Challenge tools have positively affected my ability to interact with my team about body and food",
    "S2_favorite_thing" as "S2 - What was your favorite thing about the Challenge",
    "S2_call_more_information" as "S2 - Can we call you for more information about your experience",

    "S3_continued_impact" as "S3 - The Challenge has continued to impact my behavior with the athletes I coach",
    "S3_how_continued_impact" as "S3 - Continued impact - agree - fill in the blank",
    "S3_continued_affected_ability_interact" as "S3 - The Challenge tools have continued to positively affect my ability to interact with my team about body and food",
    "S3_anything_else" as "S3 - Is there anything else you would like to share"
    
    FROM "user"
    WHERE "is_admin" = false
    ORDER BY "id" ASC;
`).then(response => {
        res.send(response.rows)
    }
    ).catch(error => {
        console.log('error with csv get router,', error)
        res.sendStatus(500);
    })
});

cron.schedule('0 18 * * Sun', () => {
    automatedContact(); //this function will run every sunday at 6:00pm
}, {
    timezone: "America/Chicago"
})

//this functions does a pool query to the database to select all users
//then with the response, forEach user it will run the receive challenge function
function automatedContact() {
    pool.query(`
    UPDATE "user"
    SET "content_permission" = ("content_permission" + 1)
    WHERE ("content_permission" < 20 AND "is_admin" = false) AND ("date_created" BETWEEN NOW() - INTERVAL '20 weeks' AND NOW())
    RETURNING *;
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
    let answer = moment(currentDate).diff(dateCreated, 'days');

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
    // let dateCreated = moment(user.date_created);
    // let currentDate = moment();
    // let answer = moment(currentDate).diff(dateCreated, 'minute');

    let answer = user.content_permission;

    if (answer === 1) {
        sendEmail(user, 1) //week 1
    } else if (answer === 2) {
        sendEmail(user, 2) //week 2
    } else if (answer === 3) {
        sendEmail(user, 3) //week 3
    } else if (answer === 4) {
        sendEmail(user, 4) //week 4
    } else if (answer === 5) {
        sendEmail(user, 5) //week 5
    } else if (answer === 6) {
        sendEmail(user, 6) //post survey
    } else if (answer === 18) {
        sendEmail(user, 18) //3month survey
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
            subject: `WithAll's "What to Say" Coaches Challenge - Week ${week}`,
            text: `
Hi ${user.first_name}. 

Welcome to Week ${week} of WithAll's "What to Say" Coaches Challenge! Here is the link to this week’s info: https://${process.env.API_URL}challenge/${user.role}/${week}/${user.S1_focus_ages}

If you have questions or feedback as you go along, please contact WithAll at hello@withall.org. Thank you for actively working to support children's mental and physical health! 

- The WithAll Team
            `,
            html: `
Hi ${user.first_name}. 
<br /><br />
Welcome to Week ${week} of WithAll's "What to Say" Coaches Challenge! Here is the link to this week’s info: <a href="https://${process.env.API_URL}challenge/${user.role}/${week}/${user.S1_focus_ages}" target="_blank" rel="noopener noreferrer" >https://${process.env.API_URL}challenge/${user.role}/${week}/${user.S1_focus_ages}</a>
<br /><br />
If you have questions or feedback as you go along, please contact WithAll at <a href="mailto:hello@withall.org">hello@withall.org</a>. Thank you for actively working to support children's mental and physical health! 
<br /><br />
- The WithAll Team
            `
        };
        sgMail.send(msg);
        //if the user is 6 weeks old, they receive the post program survey link
    } else if (week === 6) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: user.email,
            from: 'WhatToSayNowChallenge@gmail.com',
            subject: `WithAll's "What to Say" Coaches Challenge - post-survey`,
            text: `
Hi ${user.first_name}! 

Thank you for participating in WithAll's "What to Say" Coaches Challenge! Please take 2-5 minutes to complete the post-survey https://${process.env.API_URL}postsurvey1 

Your feedback is extremely valuable and will help shape the future of “What to Say” and the Coaches Challenge. Thank you in advance for your time and for actively working to support children's mental and physical health! 

- The WithAll Team
            `,
            html: `
Hi ${user.first_name}! 
<br /><br />
Thank you for participating in WithAll's "What to Say" Coaches Challenge! Please take 2-5 minutes to complete the post-survey <a href="https://${process.env.API_URL}postsurvey1" target="_blank" rel="noopener noreferrer">https://${process.env.API_URL}postsurvey1</a>
<br /><br />
Your feedback is extremely valuable and will help shape the future of “What to Say” and the Coaches Challenge. Thank you in advance for your time and for actively working to support children's mental and physical health! 
<br /><br />
- The WithAll Team
            `
        };
        sgMail.send(msg);
        //if the user is 3 months old, they receive the three month survey
    } else if (week === 18) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: user.email,
            from: 'WhatToSayNowChallenge@gmail.com',
            subject: `WithAll's "What to Say" Coaches Challenge - 3-month follow-up survey`,
            text: `
Hi ${user.first_name}! 

Thank you for participating in WithAll's "What to Say" Coaches Challenge! Please take 2-5 minutes to complete the 3-month follow-up survey https://${process.env.API_URL}three-month-survey 

Your feedback is extremely valuable and will help shape the future of “What to Say” and the Coaches Challenge. Thank you in advance for your time and for actively working to support children's mental and physical health! 

- The WithAll Team
            `,
            html: `
Hi ${user.first_name}! 
<br /><br />
Thank you for participating in WithAll's "What to Say" Coaches Challenge! Please take 2-5 minutes to complete the 3-month follow-up survey <a href="https://${process.env.API_URL}three-month-survey" target="_blank" rel="noopener noreferrer">https://${process.env.API_URL}three-month-survey</a>
<br /><br />
Your feedback is extremely valuable and will help shape the future of “What to Say” and the Coaches Challenge. Thank you in advance for your time and for actively working to support children's mental and physical health! 
<br /><br />
- The WithAll Team
            `
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
    // let dateCreated = moment(user.date_created);
    // let currentDate = moment();
    // let answer = moment(currentDate).diff(dateCreated, 'minute');

    let answer = user.content_permission;

    if (answer === 1) {
        sendText(user, 1) //week 1
    } else if (answer === 2) {
        sendText(user, 2) //week 2
    } else if (answer === 3) {
        sendText(user, 3) //week 3
    } else if (answer === 4) {
        sendText(user, 4) //week 4
    } else if (answer === 5) {
        sendText(user, 5) //week 5
    } else if (answer === 6) {
        sendText(user, 6) //post survey
    } else if (answer === 18) {
        sendText(user, 18) //3month survey
    }
}

function sendText(user, week) {
    //if the user is less than or equal to 5 weeks, they receive the weekly challenge info based on their role, the week, and their age group
    if (week <= 5) {
        client.messages.create({
            body: `
Hi ${user.first_name}. 

Welcome to Week ${week} of WithAll's "What to Say" Coaches Challenge! Here is the link to this week’s info: https://${process.env.API_URL}challenge/${user.role}/${week}/${user.S1_focus_ages}
 
If you have questions or feedback as you go along, please contact WithAll at hello@withall.org. Thank you for actively working to support children's mental and physical health! 

- The WithAll Team`,
            from: '+16512731912',
            to: user.phone_number
        }).then(message => console.log(message.status))
            .done();
        //if the user is 6 weeks old, they receive the post program survey link
    } else if (week === 6) {
        client.messages.create({
            body: `
Hi ${user.first_name}! 

Thank you for participating in WithAll's "What to Say" Coaches Challenge! Please take 2-5 minutes to complete the post-survey https://${process.env.API_URL}postsurvey1 

Your feedback is extremely valuable and will help shape the future of “What to Say” and the Coaches Challenge. Thank you in advance for your time and for actively working to support children's mental and physical health! 

- The WithAll Team`,
            from: '+16512731912',
            to: user.phone_number
        }).then(message => console.log(message.status))
            .done();
        //if the user is 3 months old, they receive the three month survey
    } else if (week === 18) {
        client.messages.create({
            body: `
Hi ${user.first_name}! 

Thank you for participating in WithAll's "What to Say" Coaches Challenge! Please take 2-5 minutes to complete the 3-month follow-up survey https://${process.env.API_URL}three-month-survey 

Your feedback is extremely valuable and will help shape the future of “What to Say” and the Coaches Challenge. Thank you in advance for your time and for actively working to support children's mental and physical health! 

- The WithAll Team`,
            from: '+16512731912',
            to: user.phone_number
        }).then(message => console.log(message.status))
            .done();
    }
}

module.exports = router;
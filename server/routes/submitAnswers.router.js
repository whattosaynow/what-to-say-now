const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const encryptLib = require("../modules/encryption");
const { rejectUnauthenticated } = require("../modules/authentication-middleware");
const nodemailer = require('nodemailer');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

require('dotenv').config();

const sgMail = require('@sendgrid/mail');


//router for posting Sign Up Survey answers
router.post("/signup", (req, res) => {
  if (req.body.choose_receive === "email") {
    welcomeEmail(req.body)
  } else if (req.body.choose_receive === "text") {
    welcomeText(req.body)
  } else if (req.body.choose_receive === "both") {
    welcomeEmail(req.body)
    welcomeText(req.body)
  }
  const password = encryptLib.encryptPassword(req.body.password);
  pool.query(`
        INSERT INTO "user" (
                            "first_name", 
                            "last_name",
                            "username",
                            "role",
                            "email",
                            "password",
                            "phone_number",
                            "street_address",
                            "city",
                            "state",
                            "zip",
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
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24);
        `,
    [req.body.first_name,
    req.body.last_name,
    req.body.username,
    req.body.role,
    req.body.email,
      password,
    req.body.phone_number,
    req.body.street_address,
    req.body.city,
    req.body.state,
    req.body.zip,
    req.body.choose_receive,
    req.body.your_gender,
    req.body.your_age,
    req.body.years_coaching,
    req.body.genders_of_athletes_female,
    req.body.genders_of_athletes_male,
    req.body.genders_of_athletes_non_binary,
    req.body.number_of_athletes,
    req.body.focus_ages,
    req.body.how_did_you_find_us,
    req.body.how_did_you_find_us_referral,
    req.body.why_are_you_participating,
    req.body.why_are_you_participating_other,

    ]).then((result) => {
      res.sendStatus(201)
    })
    .catch((error) => {
      console.log('error with INSERT INTO, error:', error)
      res.sendStatus(500)
    })
});

function welcomeEmail(user) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: user.email,
    from: 'WhatToSayNowChallenge@gmail.com',
    subject: 'Thank You For Signing Up!',
    text: `Hi ${user.username}! 
    Thank you for signing up for WithAll’s “What to Say” Coaches Challenge. You will receive your first Challenge on Sunday at 6 PM CST.

    Sincerely,
    
    The WithAll Team`
  };
  sgMail.send(msg);

};

function welcomeText(user) {
  client.messages.create({
    body: `Hi ${user.username}! Thank you for signing up for the challenge! Here is the first week's link: ${process.env.API_URL}challenge/${user.role}/1/${user.focus_ages}`,
    from: '+16512731912',
    to: user.phone_number
  }).then(message => console.log(message.status))
    .done();
}

//this route will update the user table with a users answers for the post survey based on the user ID
router.post("/postSurvey", rejectUnauthenticated, (req, res) => {
  pool.query(
    `
      UPDATE "user" SET 
                            "S2_challenge_completed" = $1,
                            "S2_participating_was_easy" = $2,
                            "S2_learned_something_new" = $3,
                            "S2_would_encourage" = $4,
                            "S2_challenge_felt_relavent" = $5,
                            "S2_challenge_impacted_behavior" = $6,
                            "S2_understanding_importance_changed"= $7,
                            "S2_affected_ability_interact"= $8,
                            "S2_favorite_thing"= $9,
                            "S2_call_more_information"= $10
        WHERE id = $11;
    `,
    [
      req.body.challenge_completed,
      req.body.participation_was_easy,
      req.body.learned_something_new,
      req.body.would_encourage,
      req.body.challenge_felt_relavent,
      req.body.challenge_impacted_behavior,
      req.body.understanding_importance_changed,
      req.body.affected_ability_interact,
      req.body.favorite_thing,
      req.body.call_more_information,
      req.user.id
    ]
  )
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("error with INSERT INTO,", error);
      res.sendStatus(500);
    });
});




//this route will update the user table with a users answers for the three month survey based on the user ID
router.post('/threeMonth', rejectUnauthenticated, (req, res) => {
  pool.query(
    `
    UPDATE "user" SET 
                          "S3_continued_impact" = $1, 
                          "S3_how_impact" = $2, 
                          "S3_continued_affected_ability_interact" = $3, 
                          "S3_anything_else" = $4, 
                          "S3_call_more_information" = $5
                          
      WHERE id = $6;
  `,
    [
      req.body.continued_impact,
      req.body.how_impact,
      req.body.continued_affected_ability_interact,
      req.body.anything_else,
      req.body.call_more_information,
      req.user.id
    ]
  )
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("error with INSERT INTO,", error);
      res.sendStatus(500);
    });
})


router.get('/usernameCheck/:id', (req, res) => {
  pool.query(`
  SELECT * FROM "user" WHERE "username" ILIKE $1;`, [req.params.id]
  ).then(result => {
    if (result.rows && result.rows[0] && result.rows[0].username) {
      res.send(false)
    } else {
      res.send(true)
    }
  })
    .catch(error => {
      console.log("error with usernameCheck,", error);
      res.sendStatus(500);
    })
})



module.exports = router;

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

router.get('/username/:email', (req, res) => {
    console.log('forgot username router hit, payload:', req.params.email)
    pool.query(
        `SELECT * FROM "user" WHERE "email" ILIKE $1;
        `, [req.params.email]
    ).then(res => {
        console.log('pool query response:', res.rows)
        res.rows.forEach(user => {
            forgotUsername(user);
        })
    }).catch(error => {
        console.log('error with forgot username pool query:', error)
    })
});

function forgotUsername(user) {
    console.log('user:', user)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    let mailOptions = {
        from: "WhatToSayNowChallenge@gmail.com ",
        to: user.email,
        subject: "Forgot Username Request",
        text: `Hi ${user.first_name}! 
            Your username to login with is: ${user.username}
            To login, visit:  ${process.env.API_URL}
            `
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
};

router.get('/password/:email', (req, res) => {

});

router.get('/email/:username', (req, res) => {
    console.log('forgot username router hit, payload:', req.params.username);
    pool.query(
        `SELECT * FROM "user" WHERE "username" ILIKE $1;
        `, [req.params.username]
    ).then(res => {
        console.log('pool query response:', res.rows)
        res.rows.forEach(user => {
            forgotEmail(user);
        })
    }).catch(error => {
        console.log('error with forgot username pool query:', error)
    })
});

function forgotEmail(user) {
    console.log('user:', user)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    let mailOptions = {
        from: "WhatToSayNowChallenge@gmail.com ",
        to: user.email,
        subject: "Forgot Username Request",
        text: `Hi ${user.first_name}! 
            You are receiving this email because you requested it via the forgot email form.
            Your username is ${user.username}
            To login, visit:  ${process.env.API_URL}
            `
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
};



router.post('/', (req, res) => {

});

module.exports = router;
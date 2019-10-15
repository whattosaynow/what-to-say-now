const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const encryptLib = require("../modules/encryption");
const { rejectUnauthenticated } = require("../modules/authentication-middleware");
const nodemailer = require('nodemailer');
const moment = require('moment');
const crypto = require('crypto')

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

router.put('/password/:email', (req, res) => {
    let resetToken = crypto.randomBytes(20).toString('hex');
    let resetTime = moment().format();
    console.log('password router hit, email:', req.params.email, resetToken, resetTime);
    let query = `UPDATE "user" SET "reset_token_code"=$1, "reset_token_time"=$2 WHERE "email" ILIKE $3 RETURNING *;`;
    pool.query(query, [resetToken, resetTime, req.params.email]
    ).then(response => {
        console.log('reset password pool query response:', response.rows[0])
        forgotPassword(response.rows[0])
    }).catch(error => {
        console.log('error with forgot password pool query:', error)
    })
});

function forgotPassword(user) {
    console.log('forgot password router function; user:', user)
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
        subject: "Forgot Password Request",
        text: `Hi ${user.first_name}! 
            You are receiving this email because you requested it via the forgot email form.
            Your username is ${user.username}
            To login, visit:  ${process.env.API_URL}reset/${user.reset_token_code}
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



router.get('/reset/:token', (req, res) => {
    console.log('password reset token router hit:', req.params.token)
    pool.query(`
    SELECT * FROM "user" WHERE "reset_token_code"=$1;`, [req.params.token]
    ).then(response => {
        console.log('response from password token reset db query', response)
        if (response.rowCount === 0) {
            res.send('ERROR - Token does not exist')
        } else {
            let currentDate = moment();
            let tokenDate = response.rows[0].reset_token_time
            let answer = moment(currentDate).diff(tokenDate, 'minutes')
            console.log('answer:', answer)
            if (answer <= 15) {
                res.send(response.rows[0])
            } else {
                res.send('Token Expired')
            }
        }
    })
});

module.exports = router;
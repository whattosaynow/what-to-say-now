const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const encryptLib = require("../modules/encryption");
const { rejectUnauthenticated } = require("../modules/authentication-middleware");
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const moment = require('moment');
const crypto = require('crypto')

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

require('dotenv').config();

router.get('/username/:email', (req, res) => {
    pool.query(
        `SELECT * FROM "user" WHERE "email" ILIKE $1;
        `, [req.params.email]
    ).then(res => {
        res.rows.forEach(user => {
            forgotUsername(user);
        })
    }).catch(error => {
        console.log('error with forgot username pool query:', error)
    })
});

function forgotUsername(user) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: user.email,
        from: 'WhatToSayNowChallenge@gmail.com',
        subject: 'Forgot Username Request',
        text: `Hi ${user.first_name}! 
        Your username to login with is: ${user.username}
        To login, visit:  ${process.env.API_URL}
        `
    };
    sgMail.send(msg);
};

router.put('/password/:email', (req, res) => {
    let resetToken = crypto.randomBytes(20).toString('hex');
    let resetTime = moment().format();
    let query = `UPDATE "user" SET "reset_token_code"=$1, "reset_token_time"=$2 WHERE "email" ILIKE $3 RETURNING *;`;
    pool.query(query, [resetToken, resetTime, req.params.email]
    ).then(response => {
        forgotPassword(response.rows[0])
    }).catch(error => {
        console.log('error with forgot password pool query:', error)
    })
});

function forgotPassword(user) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: user.email,
        from: 'WhatToSayNowChallenge@gmail.com',
        subject: 'Forgot Password Request',
        text: `Hi ${user.first_name}! 
        You are receiving this email because you requested it via the forgot email form.
        Your username is ${user.username}
        To login, visit:  ${process.env.API_URL}reset/${user.reset_token_code}
        `
    };
    sgMail.send(msg);
};


router.get('/email/:username', (req, res) => {
    pool.query(
        `SELECT * FROM "user" WHERE "username" ILIKE $1;
        `, [req.params.username]
    ).then(res => {
        res.rows.forEach(user => {
            forgotEmail(user);
        })
    }).catch(error => {
        console.log('error with forgot username pool query:', error)
    })
});

function forgotEmail(user) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: user.email,
        from: 'WhatToSayNowChallenge@gmail.com',
        subject: 'Forgot Email Request',
        text: `Hi ${user.first_name}! 
      You are receiving this email because you requested it via the forgot email form.
      Your username is ${user.username}
      To login, visit:  ${process.env.API_URL}
      `
    };
    sgMail.send(msg);

};



router.get('/reset/:token', (req, res) => {
    pool.query(`
    SELECT * FROM "user" WHERE "reset_token_code"=$1;`, [req.params.token]
    ).then(response => {
        if (response.rowCount === 0) {
            res.send('ERROR - Token does not exist')
        } else {
            let currentDate = moment();
            let tokenDate = response.rows[0].reset_token_time
            let answer = moment(currentDate).diff(tokenDate, 'minutes')
            if (answer <= 15) {
                res.send(response.rows[0])
            } else {
                res.send('Token Expired')
            }
        }
    }).catch(error => {
        console.log('error with reset token pool query:', error)
    })
});

router.put('/update/', (req, res) => {
    const password = encryptLib.encryptPassword(req.body.password);
    pool.query(`
    UPDATE "user" SET "password"=$1 WHERE "reset_token_code"=$2;`, [password, req.body.resetToken]
    ).then(response => {
        res.sendStatus(200)
    }).catch(error => {
        console.log('error with updating password:', error)
    })
});

module.exports = router;
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
        `SELECT "username" FROM "user" WHERE "email"=$1;
        `, [req.params.email]
    ).then( res => {
        console.log('pool query response:', res.rows)
    }).catch(error => {
        console.log('error with forgot username pool query:', error)
    })
});

router.get('/password/:email', (req, res) => {
    
});

router.get('/email/:username', (req, res) => {
    
});



router.post('/', (req, res) => {

});

module.exports = router;
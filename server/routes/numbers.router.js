const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken);
const {rejectUnauthenticated} = require("../modules/authentication-middleware");

router.get('/numbers', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT "numbers" from "dummy_numbers";`).then(response => {
        res.send(response.rows)
    }).catch(error => {
        console.log('error with numbers get router', error);
        res.sendStatus(500);
    })
});

router.get('/messages/:id', rejectUnauthenticated, (req, res) => {
    client.messages.create({
        body: 'Testing',
        from: '+16512731912',
        to: req.params.id
    }).then(message => console.log(message.status))
        .done();
})



/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;

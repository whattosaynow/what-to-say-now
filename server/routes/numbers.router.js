const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const accountSid = process.env.accountSid
const authToken = process.env.authToken
const client = require('twilio')(accountSid, authToken);

/**
 * GET route template
 */
router.get('/numbers', (req, res) => {
    console.log('number router hit');
    pool.query(`SELECT "numbers" from "dummy_numbers";`).then(response => {
        console.log('response.rows:', response.rows);
        res.send(response.rows)
    }).catch(error => {
        console.log('error with numbers get router', error);
        res.sendStatus(500);
    })
});

router.get('/messages/:id', (req, res) => {
    console.log('messages router hit', req.params.id);
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

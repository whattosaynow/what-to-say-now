const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    pool.query(`SELECT "email" from "user";`).then(response => {
        res.send(response.rows)
    }).catch(error => {
        console.log('error with emails router', error);
        res.sendStatus(500);
    })
});

module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require("../modules/authentication-middleware");
/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('admin router get hit')
    pool.query(`
    SELECT * FROM "content";
    `).then((result) => {
        // console.log(result.rows)
        res.send(result.rows)
    })
        .catch((error) => {
            console.log('error with INSERT INTO, error:', error)
            res.sendStatus(500)

        });
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
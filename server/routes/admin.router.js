const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // console.log('admin GET router get hit')
    pool.query(`
    SELECT * FROM "content";
    `).then((result) => {
        // console.log(result.rows)
        res.send(result.rows)
    })
        .catch((error) => {
            console.log('error with admin get, error:', error)
            res.sendStatus(500)

        });
})

/**
 * POST route template
 */
router.put('/', (req, res) => {
    console.log('admin PUT router hit', req.body)
    pool.query(`
    UPDATE "content" SET
        "intro" = $1,
        "why_matters" = $2,
        "reflection" = $3,
        "action_steps" = $4
        WHERE "id"=$5 ;`,
        [
            req.body.intro,
            req.body.why_matters,
            req.body.reflection,
            req.body.action_steps,
            req.body.id
        ]
    ).then((result) => {
        console.log('admin update router result.rows', result.rows)
        // res.send(result.rows)
        res.sendStatus(200)
    })
        .catch((error) => {
            console.log('error with admin put, error:', error)
            res.sendStatus(500)

        });
});

module.exports = router;
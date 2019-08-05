const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require("../modules/authentication-middleware");
/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    pool.query(`
    SELECT * FROM "content";
    `).then((result) => {
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
        res.sendStatus(200)
    })
        .catch((error) => {
            console.log('error with admin put, error:', error)
            res.sendStatus(500)

        });
});

module.exports = router;
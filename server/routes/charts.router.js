const express = require('express');
const { rejectUnauthenticated, rejectNonAdmin } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/ageGroups', rejectUnauthenticated, rejectNonAdmin, (req, res) => {
    pool.query(`SELECT "S1_focus_ages",
    Count ("S1_focus_ages")
    FROM "user"
    WHERE "S1_focus_ages" is not null
    GROUP BY "S1_focus_ages";`)
    .then(response => {
        // console.log('response.rows:', response.rows)
        res.send(response.rows)
    }
    ).catch(error => {
        console.log('error with age group get router', error)
        res.sendStatus(500);
    })
});

router.get('/findUs', rejectUnauthenticated, rejectNonAdmin, (req, res) => {
    pool.query(`SELECT "S1_how_did_you_find_us",
    COUNT ("S1_how_did_you_find_us")
    FROM "user"
    WHERE "S1_how_did_you_find_us" is not null
    GROUP BY "S1_how_did_you_find_us";
    `)
    .then(response => {
        console.log('response.rows:', response.rows)
        res.send(response.rows)
    }
    ).catch(error => {
        console.log('error with findUs get router', error)
        res.sendStatus(500);
    })
});

router.get('/learnedSomething', rejectUnauthenticated, rejectNonAdmin, (req, res) => {
    pool.query(`SELECT "S2_learned_something_new",
    COUNT ("S2_learned_something_new")
    FROM "user"
    WHERE "S2_learned_something_new" is not null
    GROUP BY "S2_learned_something_new";`)
    .then(response => {
        console.log('response.rows:', response.rows)
        res.send(response.rows)
    }
    ).catch(error => {
        console.log('error with learned something get router', error)
        res.sendStatus(500);
    })
});

router.get('/encourage', rejectUnauthenticated, rejectNonAdmin, (req, res) => {
    pool.query(`SELECT "S2_would_encourage",
    COUNT ("S2_would_encourage")
    FROM "user"
    WHERE "S2_would_encourage" is not null
    GROUP BY "S2_would_encourage";`)
    .then(response => {
        console.log('response.rows:', response.rows)
        res.send(response.rows)
    }
    ).catch(error => {
        console.log('error with encourage get router', error)
        res.sendStatus(500);
    })
});

router.get('/impact', rejectUnauthenticated, rejectNonAdmin, (req, res) => {
    pool.query(`SELECT "S2_challenge_impacted_behavior",
    COUNT ("S2_challenge_impacted_behavior")
    FROM "user"
    WHERE "S2_challenge_impacted_behavior" is not null
    GROUP BY "S2_challenge_impacted_behavior";`)
    .then(response => {
        console.log('response.rows:', response.rows)
        res.send(response.rows)
    }
    ).catch(error => {
        console.log('error with impact get router', error)
        res.sendStatus(500);
    })
});
/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
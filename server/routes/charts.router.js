const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/ageGroups', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT "S1_focus_ages",
    Count ("S1_focus_ages")
    FROM "user"
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

router.get('/findUs', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT "S1_how_did_you_find_us",
    COUNT ("S1_how_did_you_find_us")
    FROM "user"
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

router.get('/learnedSomething', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT "S2_learned_something_new",
    COUNT ("S2_learned_something_new")
    FROM "user"
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

router.get('/encourage', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT "S2_would_encourage",
    COUNT ("S2_would_encourage")
    FROM "user"
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

router.get('/impact', rejectUnauthenticated, (req, res) => {
    pool.query(`SELECT "S2_challenge_impacted_behavior",
    COUNT ("S2_challenge_impacted_behavior")
    FROM "user"
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
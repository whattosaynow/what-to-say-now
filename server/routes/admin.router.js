const express = require('express');
const axios = require('axios');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated, rejectNonAdmin } = require("../modules/authentication-middleware");
const cron = require('node-cron');



//this route will get all the content(info for each role, week, and ageGroup) from the content table
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

//this route will update the content table's intro/phrase/etc. columns based on changes from the admin edit page.
//it uses the id to target the specific row to change since every different combination of role/week/ageGroup have their own unique ID
router.put('/', rejectUnauthenticated, rejectNonAdmin, (req, res) => {
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

//this route will get of the information from the user table EXCEPT passwords so it can be used to create a CSV for the admin
router.get('/csv', rejectUnauthenticated, rejectNonAdmin, (req, res) => {
    // console.log('api/csv route hit')
    pool.query(`
    SELECT 
        "first_name", 
        "last_name",
        "username",
        "role",
        "email",
        "phone_number",
        "street_address",
        "city",
        "state",
        "zip",
        "date_created",
        
        "S1_choose_receive",
        "S1_your_gender",
        "S1_your_age",
        "S1_years_coaching",
        "S1_genders_of_athletes",
        "S1_numbers_of_athletes",
        "S1_focus_ages",
        "S1_how_did_you_find_us",
        "S1_why_are_you_participating",
        "S1_can_we_call_after_completion",
        
        "S2_challenge_completed",
        "S2_participating_was_easy",
        "S2_learned_something_new",
        "S2_would_encourage",
        "S2_challenge_felt_relavent",
        "S2_challenge_impacted_behavior",
        "S2_understanding_importance_changed",
        "S2_affected_ability_interact",
        "S2_favorite_thing",
        "S2_call_more_information",
        
        "S3_continued_impact",
        "S3_how_impact",
        "S3_continued_affected_ability_interact",
        "S3_anything_else",
        "S3_call_more_information"
         FROM "user";
`).then(response => {
        console.log('response.rows:', response.rows)
        res.send(response.rows)
    }
    ).catch(error => {
        console.log('error with csv get router,', error)
        res.sendStatus(500);
    })
});


// router.get('/charts', (req, res) => {
//     pool.query(`SELECT "S1_focus_ages", "S1_how_did_you_find_us" from "user", "S2_focus_ages", 
//     "S2_would_encourage", "S2_affected_ability_interact" from "user";`
//                 ).then(response => {
//                     console.log('response.rows:', response.rows)
//                     res.send(response.rows)
//                 }
//                 ).catch(error => {
//                     console.log('error with csv get router,', error)
//                     res.sendStatus(500);
//                 })
// }); 

function someFunction() {
    console.log(`running node cron every 5 seconds`); // in the terminal\
    pool.query(`
    SELECT "email" FROM "user";
`).then(response => {
        console.log('response.rows:', response.rows)
    }
    ).catch(error => {
        console.log('error with some test function get router,', error)
        res.sendStatus(500);
    })
}

cron.schedule('*/5 * * * * *', () => {
    someFunction();
})

module.exports = router;
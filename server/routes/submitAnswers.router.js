const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const encryptLib = require("../modules/encryption");
/**
 * POST route template
 */
router.post("/signup", (req, res) => {
    console.log('submit answer route hit', req.body);
    const password = encryptLib.encryptPassword(req.body.password);
    pool.query(`
        INSERT INTO "user" (
                            "first_name", 
                            "last_name",
                            "username",
                            "role",
                            "email",
                            "password",
                            "phone_number",
                            "street_address",
                            "city",
                            "state",
                            "zip",
                            "S1_choose_receive",
                            "S1_your_gender",
                            "S1_your_age",
                            "S1_years_coaching",
                            "S1_genders_of_athletes",
                            "S1_numbers_of_athletes",
                            "S1_focus_ages",
                            "S1_how_did_you_find_us",
                            "S1_why_are_you_participating",
                            "S1_can_we_call_after_completion")
        VALUES ($1, $2, $3, $21, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20);
        `,
        [req.body.first_name,
         req.body.last_name,
         req.body.username, 
         req.body.email, 
         password, 
         req.body.phone_number, 
         req.body.street_address,
         req.body.city,
         req.body.state,
         req.body.zip,
         req.body.choose_receive,
         req.body.your_gender,
         req.body.your_age,
         req.body.years_coaching,
         req.body.genders_of_athletes,
         req.body.number_of_athletes,
         req.body.focus_ages,
         req.body.how_did_you_find_us,
         req.body.why_are_you_participating,
         req.body.can_we_call_after_completion,
         req.body.role
        ]).then((result) => {
        console.log(result)
        res.sendStatus(201)})
        .catch((error) => {
        console.log('error with INSERT INTO, error:', error)
        res.sendStatus(500)
})});


router.post('/threeMonth', (req, res) => {
    console.log('submit threeMonth answer route hit', req.body);
})

module.exports = router;

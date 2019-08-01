const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * POST route template
 */
router.post("/", (req, res) => {
    console.log('submit answer route hit', req.body);

});

router.post('/threeMonth', (req, res) => {
    console.log('submit threeMonth answer route hit', req.body);
})

module.exports = router;

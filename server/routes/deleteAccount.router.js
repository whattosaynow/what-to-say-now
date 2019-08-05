const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.delete('/:id', (req,res) => {
    console.log('delete route hit. req.params:', req.params);
    const queryText = `DELETE FROM "user" 
    WHERE "id"=$1;`;
    pool
      .query(queryText, [req.params.id])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log("Error completing DELETE item query", err);
        res.sendStatus(500);
      });
})

module.exports = router;
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.put("/", (req, res) => {
  pool.query(
      `
     UPDATE "user"
        SET "email"=$2,
        "S1_choose_receive"=$3
        WHERE "id"=$1`,
      [
        req.user.id,
        req.body.email,
        req.body.choose_receive
      ]
    )
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("error with UPDATE item, error:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
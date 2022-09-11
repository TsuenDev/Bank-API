const express = require("express");
const router = express.Router();

const dbConnection = require("../database/database");

router.get("/", (req, res) => {
  dbConnection.query("SELECT * FROM transactions", (error, rows) => {
    if (!error) {
      res.json(rows);
    } else {
      console.log(error);
    }
  });
});

module.exports = router;

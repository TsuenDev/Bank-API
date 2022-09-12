const transactions = require("../controller/controller");
const express = require("express");
const router = express.Router();

// Retrieve all Transactions
router.get("/transactions", transactions.findAll);

// Create a new Transactions
router.post("/transactions", transactions.create);

module.exports = router;
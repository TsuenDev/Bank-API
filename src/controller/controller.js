const Transaction = require("../models/transaction");

//Create and save a new Transaction
create = (req, res) => {
  //Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  //Create a Transaction
  const transaction = new Transaction({
    trans_date: req.body.trans_date,
    amount: req.body.amount,
    balance: req.body.balance,
  });

  //Save Transaction in db
  Transaction.create(transaction, (error, data) => {
    if (error) {
      res.status(500).send({
        message:
          error.message ||
          "Some error occurred while creating the Transaction.",
      });
    } else {
      res.send(data);
    }
  });
};

// Retrieve all Transactions from db
findAll = (req, res) => {
  const amount = req.query.amount;

  Transaction.getAll(amount, (error, data) => {
    if (error) {
      res.status(500).send({
        message:
          error.message || "Some error occurred while retrieving transactions",
      });
    } else {
      res.send(data);
    }
  });
};

module.exports = { create, findAll };

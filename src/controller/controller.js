const Transaction = require("../models/transaction");

//Create and save a new Transaction
create = (req, res) => {
  //Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  //Get current time
  var currentDate = new Date().toLocaleString;
  currentDate.toLocaleString

  //Create a Transaction
  const transaction = new Transaction({
    trans_date: currentDate,
    amount: req.body.amount,
    //**Need to get the last query inserted balance, and recalculate de new one, set 1000 as default at the moment
    balance: req.body.balance || 1000,
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

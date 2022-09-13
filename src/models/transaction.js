const dbConnection = require("../database/database");

//Define constructor
const Transaction = function(transaction) {
  this.trans_date = transaction.trans_date;
  this.amount = transaction.amount;
  this.balance = transaction.balance;
};

Transaction.create = (newTransaction, result) => {
  let query = "INSERT INTO transactions SET ?";
  dbConnection.query(query, newTransaction, (error, res) => {
    if (error) {
      console.log("error: ", error);
      result(error, null);
      return;
    } else {
      console.log("created transaction: ", {
        id: res.insertId,
        ...newTransaction,
      });
      result(null, { id: res.insertId, ...newTransaction });
    }
  });
};

Transaction.getAll = (id, result) => {
  let query = "SELECT * FROM transactions";
  dbConnection.query(query, (error, res) => {
    if (error) {
      console.log("error:", error);
      result(null, res);
      return;
    } else {
      console.log("transactions:", res);
      result(null, res);
    }
  });
};

module.exports = Transaction;

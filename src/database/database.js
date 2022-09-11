const mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passroot",
  database: "bankapi_mysql"
});

dbConnection.connect((error) => {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log("Running database...");
  }
});

module.exports = dbConnection;

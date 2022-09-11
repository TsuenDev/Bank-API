CREATE DATABASE IF NOT EXISTS bankapi_mysql;

USE bankapi_mysql;

CREATE TABLE transactions (
	id INT (11) NOT NULL AUTO_INCREMENT,
	trans_date DATE NOT NULL,
    amount NUMERIC (10,2) NOT NULL,
    balance NUMERIC (10,2) NULL,
    PRIMARY KEY(id)
);

INSERT INTO transactions values
	(1, '2022-09-09', 500.00, 0 ),
    (2, '2022-09-09', 300.00, 800 ),
    (3, '2022-09-09', -100.00, 700);

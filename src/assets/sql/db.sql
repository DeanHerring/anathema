CREATE DATABASE casino;

USE casino;

-- users
-- wallets

-- users
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL
);

INSERT INTO users (username) VALUES ("Nikita");
INSERT INTO users (username) VALUES ("Stepan");
INSERT INTO users (username) VALUES ("Oleg");

-- addresses
CREATE TABLE wallets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  address VARCHAR(255) NOT NULL, 
  amount FLOAT NOT NULL DEFAULT 0,
  ticker VARCHAR(10) NOT NULL,
  
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO wallets (address, amount, ticker, user_id) VALUES ("bc1qxhmdufsvnuaaaer4ynz88fspdsxq2h9e9cetdj", 1.009091, "BTC", 1);
INSERT INTO wallets (address, amount, ticker, user_id) VALUES ("0x60079e5547203ae3b07c945373edb0956213829d99c4f7d5e728743de45c21a0" ,3.12767272, "ETH", 1);
INSERT INTO wallets (address, amount, ticker, user_id) VALUES ("LfmssDyX6iZvbVqHv6t9P6JWXia2JG7mdb", 91.278187, "LTC", 1);

INSERT INTO wallets (address, amount, ticker, user_id) VALUES ("bc1q56v6qmyf5209rg8ee3r6ayw85v7fhzh9mv86g4", 0.000333, "BTC", 2);
INSERT INTO wallets (address, amount, ticker, user_id) VALUES ("0x2f56f9082153f475600229fa6315e0aa079443483702b2e9c28ee4802c703758" ,9.81267287, "ETH", 2);
INSERT INTO wallets (address, amount, ticker, user_id) VALUES ("LMs7eqZhREmAP4xpmXi6QQxVaqTYqPFTFK", 0.278187, "LTC", 2);

INSERT INTO wallets (address, amount, ticker, user_id) VALUES ("3D7SiLN3doBUqGTr57Wwc6XuWFwPZLa1xU", 91.287287, "BTC", 3);
INSERT INTO wallets (address, amount, ticker, user_id) VALUES ("0x55f40dc261b7b6dfbbbaeb41780e5e599d302a8230e089bbad54ab0bba203d4d" ,0.00000000, "ETH", 3);
INSERT INTO wallets (address, amount, ticker, user_id) VALUES ("d-72a67a34052b42c075fce555b72263b6", 1041.539146, "LTC", 3);
-- create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
-- time: a TIMESTAMP.

-- CREATE DATABASE burgers_db;
-- USE burgers_db;

USE gfcelxbnh92xwcyn;

-- creating table
CREATE TABLE burgers (
id int AUTO_INCREMENT,
burger_name varchar (30) NOT NULL,
devoured BOOLEAN NOT NULL default 1,
time TIMESTAMP,
PRIMARY KEY(id)
)

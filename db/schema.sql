
-- mySQL command
CREATE DATABASE burgers_db;
USE burgers_db;

-- JAWs DB command
-- USE gfcelxbnh92xwcyn;

-- creating table
CREATE TABLE burgers (
id int AUTO_INCREMENT,
burger_name varchar (30) NOT NULL,
devoured BOOLEAN NOT NULL default 1,
time TIMESTAMP,
PRIMARY KEY(id)
)

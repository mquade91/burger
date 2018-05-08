
-- mySQL command
CREATE DATABASE burgers_db;
USE burgers_db;
-- JAWs DB command
USE gfcelxbnh92xwcyn;
-- creating table
CREATE TABLE burgers
(
  id int NOT NULL
  AUTO_INCREMENT,
burger_name varchar
  (30) NOT NULL,
devoured BOOLEAN default 1,
date NOT NULL TIMESTAMP ,
PRIMARY KEY
  (id)
);

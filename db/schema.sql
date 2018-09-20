-- create the database burgers_db
create database burgers_db;

use burgers_db;

-- create the table burgers
create table burgers(
    id integer(10) not null auto_increment,
    burger_name varchar(30) not null,
    devoured boolean default false,
    primary key(id) 
);
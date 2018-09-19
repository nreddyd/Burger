create database burgers_db;

use burgers_db;

create table burgers(
    id integer(10) not null auto_increment,
    burger_name varchar(30),
    devoured boolean default false,
    primary key(id) 
);
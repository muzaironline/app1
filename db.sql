-- create database
CREATE DATABASE pmanager_pern;

-- Create App Users Table
CREATE TABLE app_users (
    user_id serial PRIMARY KEY,
    fullname VARCHAR(50) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    pass VARCHAR(50) NOT NULL
);

-- Create Data Table
CREATE TABLE data_table (
    data_id serial PRIMARY KEY,
    -- to be added more

);



-- insert fake users app_user table
INSERT INTO app_users (fullname, username, email, pass) VALUES ('M Uzair','m.uzair','uzair@abc.com','uzi123123');
INSERT INTO app_users (fullname, username, email, pass) VALUES ('Osama','osama','osama@abc.com','osama123');

-- quries
-- select all from users
select * from app_user;
select * from app_user WHERE username = 'm.uzair';



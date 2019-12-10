create database user_db;
create table user(
    id int(10) auto_increment not null,
    password varchar(50) not null,
    email varchar(50) not null
),
create table parentdetail(
    parentId varchar(11),
    firstName varchar(50),
    lastName varchar(50) not null

),
CREATE TABLE childdetail(
    childId int NOT NULL AUTO_INCREMENT ,
    parentId NOT NULL
    childName varchar(255) NOT NULL,
	PRIMARY KEY (childId,parentId)
);
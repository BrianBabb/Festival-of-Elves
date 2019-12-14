create database user_db;
create table user(
    id int(10) auto_increment not null,
    password varchar(50) not null,
    email varchar(50) not null
),
create table parentdetail(
    parentId varchar(11)not null,
    firstName varchar(50) not null,
    lastName varchar(50) not null

),
CREATE TABLE childdetail(
    childId int NOT NULL AUTO_INCREMENT ,
    parentId NOT NULL
    childName varchar(255) NOT NULL,
	PRIMARY KEY (childId,parentId)
),
CREATE TABLE elves(
    elvesId int NOT NULL AUTO_INCREMENT ,
    childId int NOT NULL,
    elvesName varchar(50) NOT NULL,
	PRIMARY KEY (elvesId,childId)
);
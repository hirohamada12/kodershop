CREATE DATABASE  IF NOT EXISTS koder_shop;
USE koder_shop;
DROP TABLE IF EXISTS AD_MENU;
create table AD_MENU
(
    MENU_ID bigint(20) NOT NULL AUTO_INCREMENT,
    MENU_CODE   VARCHAR(100),
    MENU_NAME   VARCHAR(200),
    DESCRIPTION VARCHAR(1000),
    STATUS  VARCHAR(30),
    PARENT_ID  INT NOT NULL,
    TYPE VARCHAR(100),
    PRIMARY KEY (MENU_ID)
);
INSERT INTO AD_MENU(MENU_CODE, MENU_NAME, DESCRIPTION, STATUS,PARENT_ID,TYPE)
VALUES('field1', 'field2', 'field3','fieldn',1,'ADMIN');
select*from AD_MENU;
-- 
DROP TABLE IF EXISTS AD_PERMISSION;
create table AD_PERMISSION
(
    PERMISSION_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    GROUP_ID      int,
    MENU_ID       int,
    PRIVILEGE_ID  int,
    STATUS   VARCHAR(30),
    PRIMARY KEY (PERMISSION_ID)
);
INSERT INTO AD_PERMISSION(GROUP_ID, MENU_ID, PRIVILEGE_ID,STATUS)
VALUES(1,1,1,'not');
select*from AD_PERMISSION;
--  
DROP TABLE IF EXISTS AD_USER;
create table AD_USER
(
    USER_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    USERNAME      VARCHAR(100),
    FULLNAME      VARCHAR(200),
    EMAIL         VARCHAR(50),
    PASS          VARCHAR(500),
    CREATE_TIME   DATE,
    LAST_LOGIN    DATE,
    PHONE         VARCHAR(20),
    STATUS        VARCHAR(30),
    ADDRESS  VARCHAR(1000),
    PRIMARY KEY (USER_ID)
);
INSERT INTO AD_USER(USERNAME, FULLNAME, EMAIL,PASS,CREATE_TIME,LAST_LOGIN,PHONE,STATUS,ADDRESS)
VALUES('','','','',9/9/2020,9/9/2020,'5445','545','545');
select*from AD_USER;
--
DROP TABLE IF EXISTS AD_GROUP;
create table AD_GROUP
(
    GROUP_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    GROUP_CODE  VARCHAR(100),
    GROUP_NAME  VARCHAR(200),
    STATUS      VARCHAR(30),
    UPDATE_TIME DATE,
     PRIMARY KEY (GROUP_ID)
) ;
--  product
 
DROP TABLE IF EXISTS PRODUCT;
create table PRODUCT
(
    PRODUCT_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    PRODUCT_CODE  VARCHAR(100),
    PRODUCT_NAME  nvarchar(200),
    PRICE FLOAT,
    SHORT_DESCRIPTION nvarchar(1000),
    DESCRIPTION nvarchar(1000),
    ORIGIN nvarchar(200),
    BRAND nvarchar(200),
    CREATE_TIME DATE,
    SALE_PRICE float,
    STATUS      nvarchar(30),
     PRIMARY KEY (PRODUCT_ID)
) ;

-- size
DROP TABLE IF EXISTS SIZE;
create table SIZE
(
    SIZE_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    SIZE_CODE varchar(200),
    SIZE_NAME nvarchar(200),
    DESCRIPTION nvarchar(1000),
    CREATE_TIME DATE,
    STATUS nvarchar(30),
	PRIMARY KEY (SIZE_ID)
) ;
-- color
 DROP TABLE IF EXISTS COLOR;
create table COLOR
(
    COLOR_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    COLOR_CODE varchar(200),
    COLOR_NAME nvarchar(200),
    DESCRIPTION nvarchar(1000),
    CREATE_TIME DATE,
    STATUS nvarchar(30),
	PRIMARY KEY (COLOR_ID)
) ;
-- CATEGORORY
DROP TABLE IF EXISTS CATEGORORY;
create table CATEGORORY
(
    CATEGORORY_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    CATEGORORY_CODE varchar(200),
    CATEGORORY_NAME nvarchar(200),
    DESCRIPTION nvarchar(1000),
    CREATE_TIME DATE,
    STATUS nvarchar(30),
    PRODUCT_ID int,
	PRIMARY KEY (CATEGORORY_ID)
) ;
-- CATEGORORY_DETAIL
DROP TABLE IF EXISTS CATEGORORY_DETAIL;
create table CATEGORORY_DETAIL
(
    CATEGORORY_DETAIL_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    PRODUCT_ID INT,
    CATEGORORY_ID INT,
    DESCRIPTION nvarchar(1000),
    CREATE_TIME DATE,
    STATUS nvarchar(30),
	PRIMARY KEY (CATEGORORY_DETAIL_ID)
) ;
-- STOCK
DROP TABLE IF EXISTS STOCK;
create table STOCK
(
    STOCK_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    STOCK_CODE varchar(200),
	PRODUCT_ID INT,
    QUANTITY INT,
    CREATE_TIME DATE,
    STATUS nvarchar(30),
	PRIMARY KEY (STOCK_ID)
) ;
-- IMAGE
DROP TABLE IF EXISTS IMAGE;
create table IMAGE
(
    IMAGE_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
	PRODUCT_ID INT,
    IMAGE_MAIN varchar(1000),
    IMAGE_THUMBNAIL varchar(1000),
    IMAGE_THUMBNAIL1 varchar(1000),
    IMAGE_THUMBNAIL2 varchar(1000),
    IMAGE_THUMBNAIL3 varchar(1000),
    IMAGE_THUMBNAIL4 varchar(1000),
	PRIMARY KEY (IMAGE_ID)
) ;
-- VOUCHER_SALE
DROP TABLE IF EXISTS VOUCHER_SALE;
create table VOUCHER_SALE
(
    VOUCHER_SALE_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    VOUCHER_SALE_CODE varchar(200),
    VOUCHER_SALE_NAME Nvarchar(200),
    DESCRIPTION Nvarchar(1000),
	CREATE_TIME DATE,
	FROME_TIME DATE,
	TO_TIME DATE,
	STATUS nvarchar(30),
	PRIMARY KEY (VOUCHER_SALE_ID)
) ;
-- KEY_WORD
DROP TABLE IF EXISTS KEY_WORD;
create table KEY_WORD
(
    KEY_WORD_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    KEY_WORD_CODE varchar(200),
    KEY_WORD_NAME Nvarchar(200),
    PRODUCT_ID INT,
	PRIMARY KEY (KEY_WORD_ID)
) ;
-- TOP_SALE
DROP TABLE IF EXISTS TOP_SALE;
create table TOP_SALE
(
    TOP_SALE_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    PRODUCT_ID INT,
    CREATE_TIME DATE,
    STATUS nvarchar(30),
	PRIMARY KEY (TOP_SALE_ID)
) ;
-- BLOG
DROP TABLE IF EXISTS BLOG;
create table BLOG
(
    BLOG_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
	BLOG_TITLE Nvarchar(200),
	BLOG_NAME Nvarchar(200),
	DESCRIPTION nvarchar(1000),
    CREATE_TIME DATE,
	PRIMARY KEY (BLOG_ID)
) ;
-- ADWORD_BANNER
DROP TABLE IF EXISTS ADWORD_BANNER;
create table ADWORD_BANNER
(
    ADWORD_BANNER_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
	ADWORD_BANNER_TITLE Nvarchar(200),
	ADWORD_BANNER_IMAGE varchar(1000),
	DESCRIPTION nvarchar(1000),
    CREATE_TIME DATE,
	PRIMARY KEY (ADWORD_BANNER_ID)
) ;
-- ORDERS
DROP TABLE IF EXISTS ORDERS;
create table ORDERS
(
    ORDERS_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
	USER_NAME Nvarchar(200),
	ADDRESS Nvarchar(1000),
	PHONE varchar(30),
	STATUS nvarchar(30),
    CREATE_TIME DATE,
	PRIMARY KEY (ORDERS_ID)
) ;
-- ORDER_DETAIL
DROP TABLE IF EXISTS ORDER_DETAIL;
create table ORDER_DETAIL
(
    ORDER_DETAIL_ID bigint(20) NOT NULL AUTO_INCREMENT not null,
    ORDERS_ID INT,
    PRODUCT_ID INT,
	QUANTITY INT,
	PRIMARY KEY (ORDER_DETAIL_ID)
) ;



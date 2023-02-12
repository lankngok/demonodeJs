CREATE DATABASE `bkap_test`;
use `bkap_test`;


CREATE TABLE `category` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `product` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` varchar(255),
  `price` float NOT NULL,
  `status` tinyint DEFAULT 0,
  `descirption` text COLLATE utf8_unicode_ci DEFAULT NULL,
   FOREIGN KEY (`category_id`) REFERENCES `category`(`id`)
) ENGINE=InnoDB;
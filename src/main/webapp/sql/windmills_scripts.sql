-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema windmills
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema windmills
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `windmills` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `windmills` ;



-- -----------------------------------------------------
-- Table `windmills`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `windmills`.`user` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `user_type` TINYINT(1) NULL DEFAULT '1',
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `create_date` DATETIME NULL DEFAULT NULL,
  `modified_date` DATETIME NULL DEFAULT NULL,
  `enabled` TINYINT(1) NULL DEFAULT NULL,
  `token` VARCHAR(36) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE,
  UNIQUE INDEX `UK_ob8kqyqqgmefl0aco34akdtpe` (`email` ASC) VISIBLE,
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `token_UNIQUE` (`token` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 54
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;



-- -----------------------------------------------------
-- Table `windmills`.`client_contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `windmills`.`client_contact` (
  `clientconId` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `client_id` INT(11) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NULL DEFAULT NULL,
  `create_date` DATETIME NOT NULL,
  `modified_date` DATETIME NULL DEFAULT NULL,
  `deleted_date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`clientconId`),
  UNIQUE INDEX `clientconId` (`clientconId` ASC) VISIBLE,
  INDEX `FK_p0ky1gqcipet7tcpugalfsmva` (`client_id` ASC) VISIBLE,
  INDEX `contacts_fk0` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FK_p0ky1gqcipet7tcpugalfsmva`
    FOREIGN KEY (`client_id`)
    REFERENCES `windmills`.`clientdetails`(`client_id`),
  CONSTRAINT `contacts_fk0`
    FOREIGN KEY (`user_id`)
    REFERENCES `windmills`.`user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  )
ENGINE = InnoDB
AUTO_INCREMENT = 83
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;




SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

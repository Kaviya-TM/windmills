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
-- Table `windmills`.`clientdetails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `windmills`.`clientdetails` (
  `client_id` INT(11) NOT NULL AUTO_INCREMENT,
  `clientName` VARCHAR(255) NULL DEFAULT NULL,
  `contactPerson` VARCHAR(255) NULL DEFAULT NULL,
  `contactPosition` VARCHAR(255) NULL DEFAULT NULL,
  `contactNumber` VARCHAR(255) NULL DEFAULT NULL,
  `contactMail` VARCHAR(255) NULL DEFAULT NULL,
  `relStartDate` VARCHAR(255) NULL DEFAULT NULL,
  `pifee-Dubai` INT(255) NULL DEFAULT NULL,
  `pifee-AbuDubai` INT(255) NULL DEFAULT NULL,
  `pifee-Sharjah` INT(255) NULL DEFAULT NULL,
  `pifee-Fujairah` INT(255) NULL DEFAULT NULL,
  `pifee-Ajman` INT(255) NULL DEFAULT NULL,
  `pifee-RasAlKhaima` INT(255) NULL DEFAULT NULL,
  `pifee-UmmAlQuwain` INT(255) NULL DEFAULT NULL,
  `dtfee-Dubai` INT(255) NULL DEFAULT NULL,
  `dtfee-AbuDubai` INT(255) NULL DEFAULT NULL,
  `dtfee-Sharjah` INT(255) NULL DEFAULT NULL,
  `dtfee-Fujairah` INT(255) NULL DEFAULT NULL,
  `dtfee-Ajman` INT(255) NULL DEFAULT NULL,
  `dtfee-RasAlKhaima` INT(255) NULL DEFAULT NULL,
  `dtfee-UmmAlQuwain` INT(255) NULL DEFAULT NULL,
  `dbfee-Dubai` INT(255) NULL DEFAULT NULL,
  `dbfee-AbuDubai` INT(255) NULL DEFAULT NULL,
  `dbfee-Sharjah` INT(255) NULL DEFAULT NULL,
  `dbfee-Fujairah` INT(255) NULL DEFAULT NULL,
  `dbfee-Ajman` INT(255) NULL DEFAULT NULL,
  `dbfee-RasAlKhaima` INT(255) NULL DEFAULT NULL,
  `dbfee-UmmAlQuwain` INT(255) NULL DEFAULT NULL,
  `create_date` DATETIME NULL DEFAULT NULL,
  `modified_date` DATETIME NULL DEFAULT NULL, 
  PRIMARY KEY (`client_id`),
  UNIQUE INDEX `client_id_UNIQUE` (`client_id` ASC) VISIBLE)
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

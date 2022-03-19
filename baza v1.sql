/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 10.4.21-MariaDB : Database - medical_management_system
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`medical_management_system` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `medical_management_system`;

/*Table structure for table `doctor` */

DROP TABLE IF EXISTS `doctor`;

CREATE TABLE `doctor` (
  `userId` int(30) NOT NULL,
  `fees` double DEFAULT NULL,
  `specializationId` int(30) DEFAULT NULL,
  `specialization_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  KEY `FKq23vqgpxphxpr1wwn10fxifhh` (`specialization_id`),
  CONSTRAINT `FKlcxdjgb9mp854wvx7d7i1659k` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`),
  CONSTRAINT `FKq23vqgpxphxpr1wwn10fxifhh` FOREIGN KEY (`specialization_id`) REFERENCES `specialization` (`specialization_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `doctor` */

insert  into `doctor`(`userId`,`fees`,`specializationId`,`specialization_id`) values 
(4,40,1,1),
(6,30,2,2),
(7,40,NULL,1);

/*Table structure for table `examination` */

DROP TABLE IF EXISTS `examination`;

CREATE TABLE `examination` (
  `doctorId` int(30) NOT NULL,
  `patientId` int(30) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `userCanceled` tinyint(1) DEFAULT NULL,
  `doctorCanceled` tinyint(1) DEFAULT NULL,
  `date_of_examination` datetime DEFAULT NULL,
  `time_of_examination` bit(1) DEFAULT NULL,
  `doctor_userid` int(30) NOT NULL,
  `patient_userid` int(30) NOT NULL,
  PRIMARY KEY (`doctorId`,`patientId`,`date`,`time`),
  KEY `FKdapttju1yckson238dimwemwu` (`patientId`),
  KEY `FKay77tnm1jw6wco1llc3rlfe1l` (`doctor_userid`),
  KEY `FK3pa1t3483e3bvc711pnj47jrc` (`patient_userid`),
  CONSTRAINT `FK3pa1t3483e3bvc711pnj47jrc` FOREIGN KEY (`patient_userid`) REFERENCES `patient` (`userId`),
  CONSTRAINT `FKay77tnm1jw6wco1llc3rlfe1l` FOREIGN KEY (`doctor_userid`) REFERENCES `doctor` (`userId`),
  CONSTRAINT `FKdapttju1yckson238dimwemwu` FOREIGN KEY (`patientId`) REFERENCES `patient` (`userId`),
  CONSTRAINT `FKtgq5sdrhkurqsidat7g0guba9` FOREIGN KEY (`doctorId`) REFERENCES `doctor` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `examination` */

insert  into `examination`(`doctorId`,`patientId`,`date`,`time`,`status`,`userCanceled`,`doctorCanceled`,`date_of_examination`,`time_of_examination`,`doctor_userid`,`patient_userid`) values 
(4,5,'2022-03-19','20:00:00',1,1,1,'2022-03-19 15:31:30','',4,5);

/*Table structure for table `hibernate_sequence` */

DROP TABLE IF EXISTS `hibernate_sequence`;

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `hibernate_sequence` */

insert  into `hibernate_sequence`(`next_val`) values 
(20);

/*Table structure for table `medicine` */

DROP TABLE IF EXISTS `medicine`;

CREATE TABLE `medicine` (
  `medicineId` int(30) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `company_id` int(30) NOT NULL,
  PRIMARY KEY (`medicineId`),
  KEY `fk_medicine` (`company_id`),
  CONSTRAINT `fk_medicine` FOREIGN KEY (`company_id`) REFERENCES `pharmaceuticalcompany` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

/*Data for the table `medicine` */

insert  into `medicine`(`medicineId`,`name`,`company_id`) values 
(9,'Brufen',1),
(10,'Pancef ',2),
(11,'Aspirin',3),
(12,'Brufen',1),
(13,'Brufen',1),
(14,'Brufen',1),
(15,'fasfasfafs',15),
(16,'Nordox',16),
(17,'Nordox',17),
(18,'Dušan Gajić',18),
(19,'DOS',19);

/*Table structure for table `patient` */

DROP TABLE IF EXISTS `patient`;

CREATE TABLE `patient` (
  `userId` int(30) NOT NULL,
  `contact` varchar(30) DEFAULT NULL,
  `allergies` varchar(30) DEFAULT NULL,
  `gender` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  CONSTRAINT `FKluue1lbi9f4edt2qng7rhtdgg` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `patient` */

insert  into `patient`(`userId`,`contact`,`allergies`,`gender`) values 
(5,'064134567','Penicillin','male');

/*Table structure for table `pharmaceuticalcompany` */

DROP TABLE IF EXISTS `pharmaceuticalcompany`;

CREATE TABLE `pharmaceuticalcompany` (
  `company_id` int(30) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `pharmaceuticalcompany` */

insert  into `pharmaceuticalcompany`(`company_id`,`name`) values 
(1,'Abbott fafaasf'),
(2,'Alkaloid AD'),
(3,'Bayers'),
(4,'Abbott s'),
(5,'Galenika'),
(6,'HEMOFARM'),
(7,'Svaba programer'),
(8,'Bambam'),
(9,'axas'),
(10,'112121'),
(11,'fafasfasfasfascxxxxxxxxxx'),
(12,'ddddddddddddd'),
(13,''),
(14,'sfasfas'),
(15,''),
(16,'Galenika'),
(17,'Galenika'),
(18,'HEMOFARM'),
(19,'Alkaloid AD');

/*Table structure for table `prescription` */

DROP TABLE IF EXISTS `prescription`;

CREATE TABLE `prescription` (
  `doctorId` int(30) NOT NULL,
  `patientId` int(30) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `disease` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`doctorId`,`patientId`,`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `prescription` */

/*Table structure for table `prescriptionmedicine` */

DROP TABLE IF EXISTS `prescriptionmedicine`;

CREATE TABLE `prescriptionmedicine` (
  `medicineId` int(30) NOT NULL,
  `doctorId` int(30) NOT NULL,
  `patientId` int(30) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`medicineId`,`doctorId`,`patientId`,`date`,`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `prescriptionmedicine` */

/*Table structure for table `specialization` */

DROP TABLE IF EXISTS `specialization`;

CREATE TABLE `specialization` (
  `specialization_id` int(30) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `graduated` varchar(100) NOT NULL,
  PRIMARY KEY (`specialization_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `specialization` */

insert  into `specialization`(`specialization_id`,`name`,`graduated`) values 
(1,'Dermatology','Faculties of Medical Sciences, Belgrade'),
(2,'Internal medicine','Faculties of Medical Sciences, Belgrade'),
(3,'Radiology','Faculties of Medical Sciences, Belgrade');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `userId` int(30) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

/*Data for the table `user` */

insert  into `user`(`userId`,`first_name`,`last_name`,`username`,`password`,`email`) values 
(1,'admin','admin','admin','admin','admin@gmail.com'),
(2,'Milos','Vujic','MilosVu','milos123','milos@gmail.com'),
(3,'Dusan','Gajic','DusanGa','dusan123','dusan@gmail.com'),
(4,'Petar','Petrovic','PetarPe','petar123','petar@gmail.com'),
(5,'Nikola','Smolovic','NikolaSm','nikola123','nikola@gmail.com'),
(6,'Danica','Milic','DanicaMi','danica123','danica@gmail.com'),
(7,'Petar','Petrovic','PetarPe','petar123','petar@gmail.com');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

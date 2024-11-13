-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 12, 2024 at 01:02 PM
-- Server version: 10.6.18-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kab212_8_accounts`
--

-- --------------------------------------------------------

--
-- Table structure for table `Clients`
--

CREATE TABLE `Clients` (
  `clientID` int(11) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Clients`
--

INSERT INTO `Clients` (`clientID`, `firstName`, `lastName`, `active`) VALUES
(1, 'Josh', 'Undertaker', 0),
(2, 'Fallow', 'Creatores', 1),
(3, 'Indie', 'Bazi', 0),
(4, 'Cropoli', 'Alot', 1),
(5, 'Pean', 'Porfavor', 0),
(6, 'Ali', 'Baba', 1),
(7, 'Kronii', 'Ouoji', 0),
(8, 'Fuwa', 'Voidgard', 1),
(9, 'Moco', 'Voidgard', 0),
(10, 'Loki', 'Godiro', 1),
(11, 'Tony', 'Stark', 0),
(12, 'Ryo', 'Treasurer', 1),
(13, 'Banza', 'Illu', 0),
(14, 'Tuu', 'Yuung', 1),
(15, 'Erara', 'Bini', 0),
(16, 'League', 'Terrabit', 1),
(17, 'Apex', 'Legendary', 0),
(18, 'Klon', 'Urusai', 1),
(19, 'Opalla', 'Xhin', 0),
(20, 'Oreo', 'Jum', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `orderID` int(11) NOT NULL,
  `orderNr` int(11) DEFAULT NULL,
  `orderSum` float(6,2) DEFAULT NULL,
  `clientID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`orderID`, `orderNr`, `orderSum`, `clientID`) VALUES
(21, 993932, 93.43, 12),
(22, 445455, 7.55, 14),
(23, 668766, 55.10, 15),
(24, 245577, 44.43, 17),
(25, 123558, 34.31, 9),
(26, 778977, 8.43, 7),
(27, 454821, 93.43, 19),
(28, 785546, 93.43, 20),
(29, 720742, 33.45, 1),
(30, 45852, 93.50, 5),
(31, 420468, 93.77, 6),
(32, 46545, 12.90, 4),
(33, 45642, 222.50, 10),
(34, 752698, 93.22, 11),
(35, 74852, 74.43, 8),
(36, 46534, 55.48, 2),
(37, 452040, 93.99, 13),
(38, 96374, 3.65, 18),
(39, 74545, 3.21, 3),
(40, 687955, 3.30, 16);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Clients`
--
ALTER TABLE `Clients`
  ADD PRIMARY KEY (`clientID`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `clientID` (`clientID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Clients`
--
ALTER TABLE `Clients`
  MODIFY `clientID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`clientID`) REFERENCES `Clients` (`clientID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

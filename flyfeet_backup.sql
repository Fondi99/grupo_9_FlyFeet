CREATE DATABASE  IF NOT EXISTS `flyfeet_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `flyfeet_db`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: flyfeet_db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `image` varchar(45) COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `description` mediumtext COLLATE utf8mb3_spanish2_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'PORTAVALOR','portavalor.jpg',3290.00,'Posee 2 bolsillos con cierre y 1 portapasajes. Es impermeable. Además, tiene la cintura elastizada y regulable.',NULL,NULL),(3,'ORGANIZADOR DE VALIJA','organizadordevalija.jpg',6200.00,'Contiene un total de 6 piezas: 3 cubos y 3 sobres. Son de diferentes tamaños con cierre. Los sobres son impermables. Ultra liviano y super prácticos. Además, se puede utilizar para organizar no solo la valija, sino también el placard.',NULL,NULL),(4,'FAQUÍN','faquin.jpeg',2200.00,'Anexa todas tus pertenencias al faquín. Super reforzado y resistente. Regulable. Material: correa mochilera.',NULL,NULL),(5,'NECESER XL','neceserxl.jpg',6500.00,'Material: poliéster alta calidad. Material ultrafino y suave al tacto. Muy liviano y cómodo de llevar.',NULL,NULL),(7,'PORTADOCUMENTO','portadocumento.jpg',3920.00,'Organiza tus documentos y tarjetas : pasaporte, pasajes, reservas, migraciones, documentación importante, mapas, tarjetas, billetes, lapicera, etc.',NULL,NULL),(8,'MOCHILA GRANDE DE YUTE','mochilayute.jpeg',18900.00,'Mochila de PU texturado tipo yute.',NULL,NULL),(9,'FUNDA DE VALIJA','fundadevalija.jpg',10800.00,'Realizadas de lycra expandible, por lo que se adaptan a los distintos tamaños de valijas.',NULL,NULL),(10,'VALIJA PLEGABLE CARRY ON','valijaplegable.jpg',45000.00,'Se pliega en una pequeña bolsa fácil de almacenar y llevar dentro de otro equipaje.',NULL,NULL),(11,'ORGANIZADOR DE CARTERA','organizadordecartera.jpg',2500.00,'Organizador ideal para la cartera, bolso, mochila.',NULL,NULL),(12,'MOCHILA HALI','mochilahali.webp',26500.00,'Mochila de tamaño grande.',NULL,NULL),(13,'NECESER GLAM','neceserglam.jpg',3500.00,'Neceser portacosmetico multifuncional de calidad premium.',NULL,NULL),(14,'TOALLÓN SECADO RÁPIDO','toallonsecadorapido.jpeg',4500.00,'Toallón de secado rápido.',NULL,NULL),(15,'MOCHILA PLEGABLE','mochilaplegable.jpg',5830.00,'Mochilas plegables «Make your travel life easy and fun».',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `address` varchar(100) COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `zip` varchar(10) COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `phone_number` varchar(100) COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `city` varchar(100) COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `role` int NOT NULL DEFAULT '2',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'juan pablo paillet','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','jpaillet@flyfeet.com.ar',NULL,NULL,NULL,NULL,1,NULL,NULL),(2,'nataliakrivanek','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','nkrivanek@flyfeet.com.ar',NULL,NULL,NULL,NULL,1,NULL,NULL),(3,'ximenacamacho','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','xcamacho@flyfeet.com.ar',NULL,NULL,NULL,NULL,1,NULL,NULL),(4,'lautaroserrano','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','lserrano@flyfeet.com.ar',NULL,NULL,NULL,NULL,1,NULL,NULL),(5,'matiasfondini','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','mfondini@flyfeet.com.ar',NULL,NULL,NULL,NULL,1,NULL,NULL),(6,'natachagodocik','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','ngodocik@flyfeet.com.ar',NULL,NULL,NULL,NULL,1,NULL,NULL),(7,'rodrigotalledo','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','rtalledo@flyfeet.com.ar',NULL,NULL,NULL,NULL,1,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-06 21:47:16

CREATE DATABASE  IF NOT EXISTS `flyfeet_db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci */;
USE `flyfeet_db`;
-- MySQL dump 10.13  Distrib 5.7.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: flyfeet_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Demo'),(2,'Portavalores'),(3,'Organizadores de valija'),(4,'Portapasaportes'),(5,'Mochilas'),(6,'Necesers'),(7,'Fundas'),(8,'Accesorios'),(9,'Valijas');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `rgb` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Green','0,128,0'),(2,'Orange','255,165,0'),(3,'Puce','204,136,153'),(4,'Goldenrod','218,165,32'),(5,'Aquamarine','127,255,212'),(6,'Khaki','195,176,145'),(7,'Yellow','255,255,0'),(8,'Maroon','128,0,0'),(9,'Teal','0,128,128'),(10,'Pink','255,192,203');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_details` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int(10) unsigned NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  `price` decimal(10,2) unsigned DEFAULT NULL,
  `quantity` int(10) unsigned DEFAULT NULL,
  `total` decimal(10,2) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_details_order_id_foreign_idx` (`order_id`),
  KEY `order_details_product_id_foreign_idx` (`product_id`),
  CONSTRAINT `order_details_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_details_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `payment_id` int(10) unsigned NOT NULL,
  `order_date` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_user_id_foreign_idx` (`user_id`),
  KEY `orders_payment_id_foreign_idx` (`payment_id`),
  CONSTRAINT `orders_payment_id_foreign` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`),
  CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_color`
--

DROP TABLE IF EXISTS `product_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_color` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `color_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_color_product_id_foreign_idx` (`product_id`),
  KEY `product_color_color_id_foreign_idx` (`color_id`),
  CONSTRAINT `product_color_color_id_foreign` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`),
  CONSTRAINT `product_color_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_color`
--

LOCK TABLES `product_color` WRITE;
/*!40000 ALTER TABLE `product_color` DISABLE KEYS */;
INSERT INTO `product_color` VALUES (1,1,1,NULL,NULL),(2,3,2,NULL,NULL),(3,4,3,NULL,NULL),(4,5,4,NULL,NULL),(5,7,5,NULL,NULL),(6,8,6,NULL,NULL),(7,9,7,NULL,NULL),(8,10,4,NULL,NULL),(9,11,2,NULL,NULL),(10,12,8,NULL,NULL),(11,13,5,NULL,NULL),(12,14,9,NULL,NULL),(13,15,10,NULL,NULL);
/*!40000 ALTER TABLE `product_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `description` mediumtext DEFAULT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_category_id_foreign_idx` (`category_id`),
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'PORTAVALOR','portavalor.jpg',3290.00,'Posee 2 bolsillos con cierre y 1 portapasajes. Es impermeable. Además, tiene la cintura elastizada y regulable.',2,NULL,NULL),(3,'ORGANIZADOR DE VALIJA','organizadordevalija.jpg',6200.00,'Contiene un total de 6 piezas: 3 cubos y 3 sobres. Son de diferentes tamaños con cierre. Los sobres son impermables. Ultra liviano y super prácticos. Además, se puede utilizar para organizar no solo la valija, sino también el placard.',3,NULL,NULL),(4,'FAQUÍN','faquin.jpeg',2200.00,'Anexa todas tus pertenencias al faquín. Super reforzado y resistente. Regulable. Material: correa mochilera.',8,NULL,NULL),(5,'NECESER XL','neceserxl.jpg',6500.00,'Material: poliéster alta calidad. Material ultrafino y suave al tacto. Muy liviano y cómodo de llevar.',6,NULL,NULL),(7,'PORTADOCUMENTO','portadocumento.jpg',3920.00,'Organiza tus documentos y tarjetas : pasaporte, pasajes, reservas, migraciones, documentación importante, mapas, tarjetas, billetes, lapicera, etc.',4,NULL,NULL),(8,'MOCHILA GRANDE DE YUTE','mochilayute.jpeg',18900.00,'Mochila de PU texturado tipo yute.',5,NULL,NULL),(9,'FUNDA DE VALIJA','fundadevalija.jpg',10800.00,'Realizadas de lycra expandible, por lo que se adaptan a los distintos tamaños de valijas.',7,NULL,NULL),(10,'VALIJA PLEGABLE CARRY ON','valijaplegable.jpg',45000.00,'Se pliega en una pequeña bolsa fácil de almacenar y llevar dentro de otro equipaje.',9,NULL,NULL),(11,'ORGANIZADOR DE CARTERA','organizadordecartera.jpg',2500.00,'Organizador ideal para la cartera, bolso, mochila.',6,NULL,NULL),(12,'MOCHILA HALI','mochilahali.webp',26500.00,'Mochila de tamaño grande.',5,NULL,NULL),(13,'NECESER GLAM','neceserglam.jpg',3500.00,'Neceser portacosmetico multifuncional de calidad premium.',6,NULL,NULL),(14,'TOALLÓN SECADO RÁPIDO','toallonsecadorapido.jpeg',4500.00,'Toallón de secado rápido.',8,NULL,NULL),(15,'MOCHILA PLEGABLE','mochilaplegable.jpg',5830.00,'Mochilas plegables «Make your travel life easy and fun».',5,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `zip` varchar(10) DEFAULT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `role` varchar(100) NOT NULL DEFAULT 'User',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'juan pablo paillet','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','jpaillet@flyfeet.com.ar',NULL,NULL,NULL,NULL,'admin',NULL,NULL),(2,'nataliakrivanek','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','nkrivanek@flyfeet.com.ar',NULL,NULL,NULL,NULL,'admin',NULL,NULL),(3,'ximenacamacho','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','xcamacho@flyfeet.com.ar',NULL,NULL,NULL,NULL,'admin',NULL,NULL),(4,'lautaroserrano','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','lserrano@flyfeet.com.ar',NULL,NULL,NULL,NULL,'admin',NULL,NULL),(5,'matiasfondini','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','mfondini@flyfeet.com.ar',NULL,NULL,NULL,NULL,'admin',NULL,NULL),(6,'natachagodocik','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','ngodocik@flyfeet.com.ar',NULL,NULL,NULL,NULL,'admin',NULL,NULL),(7,'rodrigotalledo','$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S','rtalledo@flyfeet.com.ar',NULL,NULL,NULL,NULL,'admin',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'flyfeet_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-05 20:13:29

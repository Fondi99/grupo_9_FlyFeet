CREATE DATABASE IF NOT EXISTS `flyfeet_db`
/*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */
/*!80016 DEFAULT ENCRYPTION='N' */
;

USE `flyfeet_db`;

-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: flyfeet_db
-- ------------------------------------------------------
-- Server version	8.0.31
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!50503 SET NAMES utf8 */
;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;

/*!40103 SET TIME_ZONE='+00:00' */
;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

--
-- Table structure for table `products`
--
DROP TABLE IF EXISTS `products`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb3_spanish2_ci,
  `price` decimal(10, 2) unsigned NOT NULL,
  `image` varchar(45) COLLATE utf8mb3_spanish2_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 16 DEFAULT CHARSET = utf8mb3 COLLATE = utf8mb3_spanish2_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `products`
--
LOCK TABLES `products` WRITE;

/*!40000 ALTER TABLE `products` DISABLE KEYS */
;

INSERT INTO
  `products`
VALUES
  (
    1,
    'PORTAVALOR',
    'Posee 2 bolsillos con cierre y 1 portapasajes. Es impermeable. Además, tiene la cintura elastizada y regulable.',
    3290.00,
    'portavalor.jpg',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    3,
    'ORGANIZADOR DE VALIJA',
    'Contiene un total de 6 piezas: 3 cubos y 3 sobres. Son de diferentes tamaños con cierre. Los sobres son impermables. Ultra liviano y super prácticos. Además, se puede utilizar para organizar no solo la valija, sino también el placard.',
    6200.00,
    'organizadordevalija.jpg',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    4,
    'FAQUÍN',
    'Anexa todas tus pertenencias al faquín. Super reforzado y resistente. Regulable. Material: correa mochilera.',
    2200.00,
    'faquin.jpeg',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    5,
    'NECESER XL',
    'Material: poliéster alta calidad. Material ultrafino y suave al tacto. Muy liviano y cómodo de llevar.',
    6500.00,
    'neceserxl.jpg',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    7,
    'PORTADOCUMENTO',
    'Organiza tus documentos y tarjetas : pasaporte, pasajes, reservas, migraciones, documentación importante, mapas, tarjetas, billetes, lapicera, etc.',
    3920.00,
    'portadocumento.jpg',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    8,
    'MOCHILA GRANDE DE YUTE',
    'mochilayute.jpeg',
    18900.00,
    'Mochila de PU texturado tipo yute.',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    9,
    'FUNDA DE VALIJA',
    'Realizadas de lycra expandible, por lo que se adaptan a los distintos tamaños de valijas.',
    10800.00,
    'fundadevalija.jpg',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    10,
    'VALIJA PLEGABLE CARRY ON',
    'Se pliega en una pequeña bolsa fácil de almacenar y llevar dentro de otro equipaje.',
    45000.00,
    'valijaplegable.jpg',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    11,
    'ORGANIZADOR DE CARTERA',
    'Organizador ideal para la cartera, bolso, mochila.',
    2500.00,
    'organizadordecartera.jpg',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    12,
    'MOCHILA HALI',
    'Mochila de tamaño grande.',
    26500.00,
    'mochilahali.webp',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    13,
    'NECESER GLAM',
    'Neceser portacosmetico multifuncional de calidad premium.',
    3500.00,
    'neceserglam.jpg',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    14,
    'TOALLÓN SECADO RÁPIDO',
    'Toallón de secado rápido.',
    4500.00,
    'toallonsecadorapido.jpeg',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    15,
    'MOCHILA PLEGABLE',
    'Mochilas plegables «Make your travel life easy and fun».',
    5830.00,
    'mochilaplegable.jpg',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  );

/*!40000 ALTER TABLE `products` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Table structure for table `users`
--
DROP TABLE IF EXISTS `users`;

/*!40101 SET @saved_cs_client     = @@character_set_client */
;

/*!50503 SET character_set_client = utf8mb4 */
;

CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb3_spanish2_ci NOT NULL,
  `role` int NOT NULL DEFAULT '2',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE (`email`)
) ENGINE = InnoDB AUTO_INCREMENT = 8 DEFAULT CHARSET = utf8mb3 COLLATE = utf8mb3_spanish2_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;

--
-- Dumping data for table `users`
--
LOCK TABLES `users` WRITE;

/*!40000 ALTER TABLE `users` DISABLE KEYS */
;

INSERT INTO
  `users`
VALUES
  (
    1,
    'juan pablo',
    'paillet',
    'jpaillet@flyfeet.com.ar',
    '$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S',
    1,
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    2,
    'natalia',
    'krivanek',
    'nkrivanek@flyfeet.com.ar',
    '$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S',
    1,
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    3,
    'ximena',
    'camacho',
    'xcamacho@flyfeet.com.ar',
    '$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S',
    1,
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    4,
    'lautaro',
    'serrano',
    'lserrano@flyfeet.com.ar',
    '$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S',
    1,
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    5,
    'matias',
    'fondini',
    'mfondini@flyfeet.com.ar',
    '$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S',
    1,
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    6,
    'natacha',
    'godocik',
    'ngodocik@flyfeet.com.ar',
    '$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S',
    1,
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  ),
  (
    7,
    'rodrigo',
    'talledo',
    'rtalledo@flyfeet.com.ar',
    '$2a$10$G.Mg3lXHvYLY.ZgfFtfFl.GNBcbOUFAScHKcC6U5IS4aYKcYPfT2S',
    1,
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
  );

/*!40000 ALTER TABLE `users` ENABLE KEYS */
;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2023-03-06 21:47:16
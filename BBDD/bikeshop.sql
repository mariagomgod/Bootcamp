-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 04-05-2021 a las 18:41:21
-- Versión del servidor: 8.0.23-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bikeshop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bikes`
--

CREATE TABLE `bikes` (
  `id` int NOT NULL,
  `model` varchar(64) DEFAULT NULL,
  `brand` varchar(64) DEFAULT NULL,
  `type` varchar(32) DEFAULT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `bikes`
--

INSERT INTO `bikes` (`id`, `model`, `brand`, `type`, `price`) VALUES
(1, 'tango', 'asics', 'mountain', 780),
(3, 'basic', 'adidas', 'trekking', 620);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients`
--

CREATE TABLE `clients` (
  `id` int NOT NULL,
  `dni` varchar(16) DEFAULT NULL,
  `bike_id` int DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL,
  `lastname` varchar(64) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `phone_number` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `clients`
--

INSERT INTO `clients` (`id`, `dni`, `bike_id`, `name`, `lastname`, `email`, `phone_number`) VALUES
(1, '26358478F', 1, 'Laura', 'Gomez', 'laura@hotmail.com', '952874563'),
(2, '26586374C', 3, 'Roberto', 'Leal', 'r86@gmail.com', '640121217'),
(3, '26485917V', 1, 'Rosa', 'Diaz', 'rosa34@yahoo.es', '650784120');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `offers`
--

CREATE TABLE `offers` (
  `id` int NOT NULL,
  `part_id` int DEFAULT NULL,
  `discount` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `offers`
--

INSERT INTO `offers` (`id`, `part_id`, `discount`) VALUES
(1, 1, 25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parts`
--

CREATE TABLE `parts` (
  `id` int NOT NULL,
  `name` varchar(128) DEFAULT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `parts`
--

INSERT INTO `parts` (`id`, `name`, `price`) VALUES
(1, 'cuadro', 38),
(2, 'saddle', 35),
(3, 'wheel', 30);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `repairs`
--

CREATE TABLE `repairs` (
  `id` int NOT NULL,
  `client_id` int DEFAULT NULL,
  `part_id` int DEFAULT NULL,
  `cost` float DEFAULT NULL,
  `time_spent` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `repairs`
--

INSERT INTO `repairs` (`id`, `client_id`, `part_id`, `cost`, `time_spent`) VALUES
(1, 1, 3, 60, 2.5),
(2, 2, 1, 125, 6),
(3, 3, 2, 75, 4.5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bikes`
--
ALTER TABLE `bikes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bike_id` (`bike_id`);

--
-- Indices de la tabla `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `part_id` (`part_id`);

--
-- Indices de la tabla `parts`
--
ALTER TABLE `parts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `repairs`
--
ALTER TABLE `repairs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `part_id` (`part_id`),
  ADD KEY `fk_client_id` (`client_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bikes`
--
ALTER TABLE `bikes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `parts`
--
ALTER TABLE `parts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `repairs`
--
ALTER TABLE `repairs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`bike_id`) REFERENCES `bikes` (`id`);

--
-- Filtros para la tabla `offers`
--
ALTER TABLE `offers`
  ADD CONSTRAINT `offers_ibfk_1` FOREIGN KEY (`part_id`) REFERENCES `parts` (`id`);

--
-- Filtros para la tabla `repairs`
--
ALTER TABLE `repairs`
  ADD CONSTRAINT `fk_client_id` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `repairs_ibfk_1` FOREIGN KEY (`part_id`) REFERENCES `parts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

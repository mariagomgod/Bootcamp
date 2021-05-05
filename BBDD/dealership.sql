-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 05-05-2021 a las 21:41:01
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
-- Base de datos: `dealership`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `customer_id` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone_number` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`customer_id`, `name`, `address`, `phone_number`) VALUES
(1, 'Jorge', 'Calle Rosa, 5, Málaga', '+34 952875412'),
(2, 'Clara', 'Calle Campoamor, 2, Málaga', '+34 952112233'),
(3, 'Ariadna', 'Calle Tinte, 41, Córdoba', '+34 620478512');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deliveries`
--

CREATE TABLE `deliveries` (
  `delivery_id` int NOT NULL,
  `sale_id` int NOT NULL,
  `delivery_date` date NOT NULL,
  `other_details` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `deliveries`
--

INSERT INTO `deliveries` (`delivery_id`, `sale_id`, `delivery_date`, `other_details`) VALUES
(1, 2, '2019-02-07', 'paid in cash'),
(2, 3, '2019-08-13', 'paid by credit card'),
(3, 4, '2020-02-17', 'paid by credit card');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ref_model_types`
--

CREATE TABLE `ref_model_types` (
  `model_type_code` varchar(50) NOT NULL,
  `parent_model_type_code` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `model_type_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `ref_model_types`
--

INSERT INTO `ref_model_types` (`model_type_code`, `parent_model_type_code`, `model_type_name`) VALUES
('electric tourism', 'tourism', 'Volskwagen Polo'),
('tourism', NULL, 'Citroen C4'),
('van', NULL, 'Volskwagen Kombi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `sale_id` int NOT NULL,
  `customer_id` int NOT NULL,
  `vehicle_id` int NOT NULL,
  `sale_date` date NOT NULL,
  `price` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`sale_id`, `customer_id`, `vehicle_id`, `sale_date`, `price`) VALUES
(2, 2, 3, '2019-02-01', '10000'),
(3, 3, 6, '2019-08-03', '12000'),
(4, 1, 5, '2020-02-08', '11500');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehicles`
--

CREATE TABLE `vehicles` (
  `vehicle_id` int NOT NULL,
  `model_type_code` varchar(50) NOT NULL,
  `vehicle_name` varchar(50) NOT NULL,
  `launch_date` date NOT NULL,
  `other_details` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `vehicles`
--

INSERT INTO `vehicles` (`vehicle_id`, `model_type_code`, `vehicle_name`, `launch_date`, `other_details`) VALUES
(3, 'tourism', 'Citroen C4', '2015-01-12', 'from 0 to 100 in 5 seconds'),
(5, 'electric tourism', 'Volskwagen Polo', '2019-05-15', 'full charge in 60 seconds'),
(6, 'van', 'Volkswagen Kombi', '2001-12-09', 'lots of space');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indices de la tabla `deliveries`
--
ALTER TABLE `deliveries`
  ADD PRIMARY KEY (`delivery_id`),
  ADD KEY `sale_id` (`sale_id`);

--
-- Indices de la tabla `ref_model_types`
--
ALTER TABLE `ref_model_types`
  ADD PRIMARY KEY (`model_type_code`),
  ADD KEY `parent_model_type_code` (`parent_model_type_code`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`sale_id`),
  ADD KEY `vehicle_id` (`vehicle_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indices de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`vehicle_id`),
  ADD KEY `model_type_code` (`model_type_code`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `deliveries`
--
ALTER TABLE `deliveries`
  MODIFY `delivery_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `sale_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `vehicle_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `deliveries`
--
ALTER TABLE `deliveries`
  ADD CONSTRAINT `deliveries_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`sale_id`);

--
-- Filtros para la tabla `ref_model_types`
--
ALTER TABLE `ref_model_types`
  ADD CONSTRAINT `ref_model_types_ibfk_1` FOREIGN KEY (`parent_model_type_code`) REFERENCES `ref_model_types` (`model_type_code`);

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`),
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Filtros para la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`model_type_code`) REFERENCES `ref_model_types` (`model_type_code`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

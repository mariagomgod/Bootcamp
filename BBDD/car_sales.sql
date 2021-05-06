-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 06-05-2021 a las 13:54:34
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
-- Base de datos: `car_sales`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `customer_id` int NOT NULL,
  `customer_details` varchar(256) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `phone_number` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`customer_id`, `customer_details`, `name`, `address`, `phone_number`) VALUES
(1, 'Detalles cliente 1', NULL, NULL, NULL),
(2, 'Detalles cliente 2', NULL, NULL, NULL),
(3, 'Detalles cliente 3', NULL, NULL, NULL),
(4, 'Detalles cliente 4', NULL, NULL, NULL),
(5, 'Detalles cliente 1', 'John', 'Calle X', '9012312'),
(6, 'Detalles cliente 2', 'Peter', 'Calle Y', '5012312'),
(7, 'Detalles cliente 3', 'Sarah', 'Calle Z', '6012312'),
(8, 'Detalles cliente 4', 'Martha', 'Calle K', '7012312');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deliveries`
--

CREATE TABLE `deliveries` (
  `delivery_id` int NOT NULL,
  `sale_id` int DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `other_details` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `deliveries`
--

INSERT INTO `deliveries` (`delivery_id`, `sale_id`, `delivery_date`, `other_details`) VALUES
(1, 1, '2020-01-01', ''),
(3, 2, '2020-01-01', ''),
(4, 3, '2020-01-01', ''),
(5, 4, '2020-01-01', ''),
(6, 5, '2020-01-01', ''),
(7, 6, '2020-01-01', ''),
(8, 7, '2020-01-01', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ref_model_types`
--

CREATE TABLE `ref_model_types` (
  `model_type_code` varchar(32) NOT NULL,
  `parent_model_type_code` varchar(32) DEFAULT NULL,
  `model_type_name` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `ref_model_types`
--

INSERT INTO `ref_model_types` (`model_type_code`, `parent_model_type_code`, `model_type_name`) VALUES
('COU', 'SC', 'Coupé'),
('CV', 'V', 'Camper Van'),
('MV', 'V', 'Mini Van'),
('SC', NULL, 'Sport Car'),
('SS', 'SC', 'SuperSport'),
('V', NULL, 'Van');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `sale_id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `vehicle_id` int DEFAULT NULL,
  `sale_date` date DEFAULT NULL,
  `other_details` varchar(256) DEFAULT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`sale_id`, `customer_id`, `vehicle_id`, `sale_date`, `other_details`, `price`) VALUES
(1, 1, 1, '2015-01-01', '', 20000),
(2, 1, 3, '2011-01-01', '', 10000),
(3, 2, 7, '2020-01-01', '', 850000),
(4, 2, 2, '2012-01-01', '', 70000),
(5, 3, 4, '2021-01-01', '', 25000),
(6, 4, 5, '2021-01-01', '', 300000),
(7, 4, 6, '2015-01-01', '', 450000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehicles`
--

CREATE TABLE `vehicles` (
  `vehicle_id` int NOT NULL,
  `model_type_code` varchar(32) DEFAULT NULL,
  `vehicle_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `launch_date` date DEFAULT NULL,
  `other_details` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `vehicles`
--

INSERT INTO `vehicles` (`vehicle_id`, `model_type_code`, `vehicle_name`, `launch_date`, `other_details`) VALUES
(1, 'MV', 'Volkswagen California', '2018-01-01', ''),
(2, 'MV', 'Minivan 1', '2010-05-05', ''),
(3, 'SC', 'Audi Q7', '2020-01-01', ''),
(4, 'MV', 'Mercedes Vito', '2008-01-01', ''),
(5, 'SS', 'Ferrari', '2010-06-15', ''),
(6, 'COU', 'Porsche Panamera', '2020-10-01', ''),
(7, 'SS', 'Lamborghini Aventador', '2019-01-01', '');

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
  ADD PRIMARY KEY (`model_type_code`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`sale_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `vehicle_id` (`vehicle_id`);

--
-- Indices de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`vehicle_id`),
  ADD KEY `model_type_code` (`model_type_code`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `deliveries`
--
ALTER TABLE `deliveries`
  MODIFY `delivery_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `sale_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `vehicle_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `deliveries`
--
ALTER TABLE `deliveries`
  ADD CONSTRAINT `deliveries_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`sale_id`);

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`vehicle_id`);

--
-- Filtros para la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`model_type_code`) REFERENCES `ref_model_types` (`model_type_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

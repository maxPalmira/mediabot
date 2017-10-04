-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `media_data`;
CREATE TABLE `media_data` (
  `media_id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_media_id` int(11) NOT NULL,
  `name_backend` varchar(256) NOT NULL,
  `name_frontend` varchar(256) NOT NULL,
  `type` tinyint(1) NOT NULL,
  `path` varchar(256) NOT NULL,
  `image` varchar(256) NOT NULL,
  `sort` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `views` int(11) NOT NULL,
  PRIMARY KEY (`media_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `media_data` (`media_id`, `parent_media_id`, `name_backend`, `name_frontend`, `type`, `path`, `image`, `sort`, `status`, `views`) VALUES
(135,	0,	'Filymy',	'Фильмы',	0,	'Корневая',	'0',	0,	1,	0),
(136,	0,	'Mulytfilymy',	'Мультфильмы',	0,	'Корневая',	'0',	1,	1,	0),
(137,	0,	'Serialy',	'Сериалы',	0,	'Корневая',	'0',	2,	1,	0),
(139,	136,	'Dlya samyh malenykih',	'Для самых маленьких',	0,	'Мультфильмы',	'0',	0,	1,	0),
(140,	135,	'Boeviki',	'Боевики',	0,	'Фильмы',	'0',	0,	1,	0),
(141,	140,	'Forsagh.mp4',	'Форсаж.mp4',	1,	'Фильмы/Боевики',	'0',	0,	1,	62),
(145,	162,	'euye.mp4',	'еуые.mp4',	1,	'Фильмы/Ужасы',	'https://video-nabludenie.com.ua/media/films/Filymy/Ughasy/',	0,	1,	0),
(157,	135,	'Fantastika',	'Фантастика',	0,	'Фильмы',	'0',	0,	1,	0),
(162,	135,	'Ughasy',	'Ужасы',	0,	'Фильмы',	'0',	0,	1,	0);

-- 2017-08-26 19:34:46

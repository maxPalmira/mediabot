<?php
$hostname = "localhost"; 
$username = "loagkglr_userM"; 
$password = "ht1d0059%(=-"; 
$dbName = "loagkglr_media"; 

// $hostname = "localhost"; 
// $username = "root"; 
// $password = "000"; //test123
// $dbName = "mediaserver"; 

$dbh = new PDO('mysql:host=' . $hostname . ';dbname=' . $dbName . ';charset=utf8', $username, $password);
$dbh->exec("set names utf8");

// /* Создаем соединение */
// mysql_connect($hostname, $username, $password) or die ("Не могу создать соединение");
 
// /* Выбираем базу данных. Если произойдет ошибка - вывести ее */
// mysql_select_db($dbName) or die (mysql_error());
// mysql_set_charset('utf8');
<?php
$dotenv = parse_ini_file('.env'); 

$host = $dotenv['DB_HOST'];
$dbname = $dotenv['DB_NAME'];
$user = $dotenv['DB_USER'];
$pass = $dotenv['DB_PASS'];

const DB_CONNECTION_EXCEPTION = "Faild to connect with database with error: ";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die(DB_CONNECTION_EXCEPTION . $e->getMessage());
}

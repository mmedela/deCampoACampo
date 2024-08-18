<?php

require_once 'db.php';
require_once 'Product.php';
require_once 'ProductHelper.php';
require_once 'ProductController.php';
require_once 'Config.php';

try {
    $config = new Config('.env');
    $exchangeRate = $config->get('DOLLAR_EXCHANGE_RATE', 1);

    $ProductHelper = new ProductHelper($pdo);
    $productController = new ProductController($ProductHelper, $exchangeRate);

    $method = $_SERVER['REQUEST_METHOD'];
    $productController->handleRequest($method);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}

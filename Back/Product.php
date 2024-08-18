<?php

class Product
{
    private $id;
    private $name;
    private $price;

    public function __construct($id, $name, $price)
    {
        $this->id = $id;
        $this->name = $name;
        $this->price = $price;
    }

    public static function formatProducts(array $products, $exchangeRate)
    {
        return array_map(function($product) use ($exchangeRate) {
            $product['dolarPrice'] = $product[ProductHelper::PRICE_COLUMN] / $exchangeRate;
            return $product;
        }, $products);
    }

    // Getters
    public function getId() { return $this->id; }
    public function getName() { return $this->name; }
    public function getPrice() { return $this->price; }
}

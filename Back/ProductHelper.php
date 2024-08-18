<?php

class ProductHelper
{
    private $pdo;

    const PRODUCT_COLUMN = "product_name";
    const PRICE_COLUMN = "price";

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function getAll()
    {
        return $this->pdo->query("SELECT * FROM products")->fetchAll(PDO::FETCH_ASSOC);
    }

    public function create($name, $price)
    {
        $this->pdo
        ->prepare("INSERT INTO products (".ProductHelper::PRODUCT_COLUMN.", 
                    ".ProductHelper::PRICE_COLUMN.") VALUES (:name, :price)")
                ->execute(['name' => $name, 'price' => $price]);
    }

    public function update($id, $name, $price)
    {
        $this->pdo
        ->prepare("UPDATE products SET ".ProductHelper::PRODUCT_COLUMN." = :name, 
                    ".ProductHelper::PRICE_COLUMN." = :price WHERE id = :product_id")
        ->execute(['product_id' => $id, 
                    'name' => $name, 
                    'price' => $price]);
    }

    public function delete($id)
    {
        $this->pdo
        ->prepare("DELETE FROM products WHERE id = :id")->execute(['id' => $id]);
    }
}

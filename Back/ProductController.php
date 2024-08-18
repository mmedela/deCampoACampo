<?php

const DELETE_PRODUCT_SUCCESS_RESPONSE = "Producto eliminado";
const UPDATE_PRODUCT_SUCCESS_RESPONSE = "Producto actualizado";
const CREATE_PRODUCT_SUCCESS_RESPONSE = "Producto creado";
const METHOD_NOT_SUPPORTED_EXCEPTION = "Método no soportado";

class ProductController
{
    private $ProductHelper;
    private $exchangeRate;

    public function __construct(ProductHelper $ProductHelper, $exchangeRate)
    {
        $this->ProductHelper = $ProductHelper;
        $this->exchangeRate = $exchangeRate;
    }

    public function handleRequest($method)
    {
        switch ($method) {
            case 'GET':
                $this->getAllProducts();
                break;
            case 'POST':
                $this->createProduct();
                break;
            case 'PUT':
                $this->updateProduct();
                break;
            case 'DELETE':
                $this->deleteProduct();
                break;
            default:
                $this->methodNotSupported();
                break;
        }
    }

    private function getAllProducts()
    {
        $products = $this->ProductHelper->getAll();
        $formattedProducts = Product::formatProducts($products, $this->exchangeRate);
        $this->respond($formattedProducts);
    }

    private function createProduct()
    {
        $input = $this->getInput();
        $this->ProductHelper->create($input[ProductHelper::PRODUCT_COLUMN], 
                                    $input[ProductHelper::PRICE_COLUMN]);
        $this->respond(['message' => CREATE_PRODUCT_SUCCESS_RESPONSE]);
    }

    private function updateProduct()
    {
        $input = $this->getInput();
        $this->ProductHelper->update($input['id'], 
                                    $input[ProductHelper::PRODUCT_COLUMN], 
                                    $input[ProductHelper::PRICE_COLUMN]);
        $this->respond(['message' => UPDATE_PRODUCT_SUCCESS_RESPONSE]);
    }

    private function deleteProduct()
    {
        $input = $this->getInput();
        $this->ProductHelper->delete($input['id']);
        $this->respond(['message' => DELETE_PRODUCT_SUCCESS_RESPONSE]);
    }

    private function methodNotSupported()
    {
        $this->respond(['message' => METHOD_NOT_SUPPORTED_EXCEPTION], 405);
    }

    private function getInput()
    {
        return json_decode(file_get_contents("php://input"), true);
    }

    private function respond($data, $statusCode = 200)
    {
        http_response_code($statusCode);
        header("Content-Type: application/json");
        echo json_encode($data);
    }
}

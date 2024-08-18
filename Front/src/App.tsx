import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductTable from './components/ProductTable';
import { fetchProducts } from './api/fetchProducts';
import { GENERIC_FETCH_ROUTE } from './utils/constants';
import { Product } from './utils/types';
import { handleInputChange } from './utils/utils';
function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ product_name: '', price: null });
  
  useEffect(() => {
    fetchProducts(setProducts, GENERIC_FETCH_ROUTE);
  }, []);

  

  const updateProduct = async (updatedProduct:Product) => {
    try {
      await axios.put('/api', updatedProduct);
      fetchProducts(setProducts, GENERIC_FETCH_ROUTE); 
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await axios.delete('/api', { data: { id } });
      fetchProducts(setProducts, GENERIC_FETCH_ROUTE); 
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const addProduct = async () => {
    try {
      await axios.post('/api', newProduct);
      setNewProduct({ product_name: '', price: null }); 
      fetchProducts(setProducts, GENERIC_FETCH_ROUTE); 
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Add a New Product</h2>
        <input
          className="border border-gray-300 p-2 mr-2"
          type="text"
          name="product_name"
          placeholder="Product Name"
          value={newProduct.product_name}
          onChange={(e)=>{handleInputChange(e, setNewProduct, newProduct)}}
        />
        <input
          className="border border-gray-300 p-2 mr-2"
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price ?? ''}
          onChange={(e)=>{handleInputChange(e, setNewProduct, newProduct)}}
        />
        <button
          onClick={addProduct}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ProductTable
        products={products}
        onUpdate={updateProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
}

export default App;

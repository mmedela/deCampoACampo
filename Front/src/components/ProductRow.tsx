import { useState } from 'react';
import { Product } from '../utils/types';
import { handleInputChange } from '../utils/utils';
function ProductRow({ product, onUpdate, onDelete }:
    {
        product:Product, 
        onUpdate: CallableFunction, 
        onDelete: CallableFunction
    }) {
  const [editingProduct, setEditingProduct] = useState({ ...product });
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    onUpdate(editingProduct);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <tr>
      <td className="border border-gray-200 px-4 py-2">{product.id}</td>
      <td className="border border-gray-200 px-4 py-2">
        {isEditing ? (
          <input
            className="border border-gray-300 p-1"
            type="text"
            name="product_name"
            value={editingProduct.product_name}
            onChange={(e)=>{handleInputChange(e, setEditingProduct, editingProduct)}}
          />
        ) : (
          product.product_name
        )}
      </td>
      <td className="border border-gray-200 px-4 py-2">
        {isEditing ? (
          <input
            className="border border-gray-300 p-1"
            type="number"
            name="price"
            value={editingProduct.price ?? 0}
            onChange={(e)=>{handleInputChange(e, setEditingProduct, editingProduct)}}
          />
        ) : (
          product.price
        )}
      </td>
      <td className="border border-gray-200 px-4 py-2">{product.dolarPrice?.toFixed(2)}</td>
      <td className="border border-gray-200 px-4 py-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-gray-500 text-white px-2 py-1 rounded mr-2"
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProductRow;

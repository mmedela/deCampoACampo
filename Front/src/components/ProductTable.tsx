import ProductRow from './ProductRow';
import { Product } from '../utils/types';
function ProductTable({ products, onUpdate, onDelete }:
    {
        products:Product[], 
        onUpdate: CallableFunction, 
        onDelete: CallableFunction
    }) {
  return (
    <table className="min-w-full table-auto border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-200 px-4 py-2">ID</th>
          <th className="border border-gray-200 px-4 py-2">Name</th>
          <th className="border border-gray-200 px-4 py-2">Price (Pesos)</th>
          <th className="border border-gray-200 px-4 py-2">Price (USD)</th>
          <th className="border border-gray-200 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products?.map(product => (
          <ProductRow
            key={product.id}
            product={product}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;

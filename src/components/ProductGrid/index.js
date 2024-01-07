import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const ProductGrid = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

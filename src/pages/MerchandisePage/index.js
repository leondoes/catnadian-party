/*
Product Grid Component: Displaying party-themed merchandise like t-shirts, mugs, etc.
*/

import React from 'react';
import './ProductGrid.css'; // Import your CSS

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

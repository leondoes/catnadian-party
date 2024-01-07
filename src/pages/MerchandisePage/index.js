import React from 'react';
import ProductGrid from '../../components/ProductGrid';
import products from '../../assets/products';
import { CartProvider } from '../../components/CartContext';
import CartDisplay from '../../components/CartDisplay';

const MerchandisePage = () => {
  return (
    <CartProvider>
      <div>
        <ProductGrid products={products} />
        <CartDisplay />
      </div>
    </CartProvider>
  );
};

export default MerchandisePage;


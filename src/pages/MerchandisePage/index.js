import React from 'react';
import ProductGrid from './ProductGrid';
import products from './assets/products';
import { CartProvider } from '../../components/CartContext';
import CartDisplay from './CartDisplay';

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


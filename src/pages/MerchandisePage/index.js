import React from 'react';
import ProductGrid from '../../components/ProductGrid';
import products from '../../assets/products';

const MerchandisePage = () => {
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}

export default MerchandisePage;
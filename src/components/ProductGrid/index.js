import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { Grid, Product, Image, Name, Price, Button, Description } from './styled';
import Modal from '../ProductModal'; // Import the Modal component

const ProductGrid = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Grid>
      {products.map(product => (
        <Product key={product.id} onClick={() => openModal(product)}>
          <Image src={product.image} alt={product.name} />
          <Name>{product.name}</Name>
          {/* Remove Price, Description, and Button from here if you want them only in the modal */}
        </Product>
      ))}
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {selectedProduct && (
          <>
            <Image src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%' }} />
            <Name>{selectedProduct.name}</Name>
            <Price>{selectedProduct.price}</Price>
            <Description>{selectedProduct.description}</Description>
            <Button onClick={() => addToCart(selectedProduct)}>Add to Cart</Button>
          </>
        )}
      </Modal>
    </Grid>
  );
};

export default ProductGrid;

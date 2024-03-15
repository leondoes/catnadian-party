import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { Grid, Product, Image, Name, Price, Button, Description, QuantityInput } from './styled';
import Modal from '../ProductModal'; // Import the Modal component

const ProductGrid = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setQuantity(1); // Reset quantity to 1 every time a modal opens
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity); // Pass quantity to addToCart
    closeModal(); // Close the modal after adding to cart
  };

  return (
    <Grid>
      {products.map(product => (
        <Product key={product.id} onClick={() => openModal(product)}>
          <Image src={product.image} alt={product.name} />
          <Name>{product.name}</Name>
        </Product>
      ))}
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {selectedProduct && (
          <>
            <Image src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%' }} />
            <Name>{selectedProduct.name}</Name>
            <Price>{selectedProduct.price}</Price>
            <Description>{selectedProduct.description}</Description>
            {/* Quantity input */}
            <QuantityInput 
              type="number" 
              value={quantity} 
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))} // Ensure quantity is at least 1
              min="1" 
              style={{ marginBottom: '10px' }} // Add some styling as needed
            />
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </>
        )}
      </Modal>
    </Grid>
  );
};

export default ProductGrid;

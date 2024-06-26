import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import {
  Grid,
  Product,
  Image,
  Name,
  Price,
  Button,
  Description,
  FeatureList,
  FeatureItem,
  Reviews,
  Review,
  Rating,
} from "./styled"; // Assume Reviews, Review, and Rating are styled components for displaying reviews
import Modal from "../ProductModal"; // Import the Modal component

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

  // Helper function to render product features if available
  const renderFeatures = (product) => {
    const features = [];

    // Conditional rendering based on product attributes
    if (product.material) {
      features.push(
        <FeatureItem key="material">Material: {product.material}</FeatureItem>
      );
    }
    if (product.sizes) {
      features.push(
        <FeatureItem key="sizes">Sizes: {product.sizes}</FeatureItem>
      );
    }
    if (product.colors) {
      features.push(
        <FeatureItem key="colors">
          Colors: {product.colors.join(", ")}
        </FeatureItem>
      );
    }
    if (product.features) {
      product.features.forEach((feature, index) =>
        features.push(
          <FeatureItem key={`feature-${index}`}>{feature}</FeatureItem>
        )
      );
    }

    return features.length ? <FeatureList>{features}</FeatureList> : null;
  };

  // Helper function to render product reviews if available
  const renderReviews = (product) => {
    return product.reviews && product.reviews.length ? (
      <Reviews>
        {product.reviews.map((review, index) => (
          <Review key={`review-${index}`}>
            <Rating>Rating: {review.rating}/5</Rating>
            <p>{review.comment}</p>
          </Review>
        ))}
      </Reviews>
    ) : null;
  };

  return (
    <Grid>
      {products.map((product) => (
        <Product key={product.id} onClick={() => openModal(product)}>
          <Image src={product.image} alt={product.name} />
          <Name>{product.name}</Name>
          <Price>{product.price}</Price>
        </Product>
      ))}
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {selectedProduct && (
          <>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{ width: "100%" }}
            />
            <Name>{selectedProduct.name}</Name>
            <Price>{selectedProduct.price}</Price>
            <Description>{selectedProduct.description}</Description>
            {/* Render additional features if available */}
            {renderFeatures(selectedProduct)}
            {/* Quantity input */}
            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value, 10)))
              } // Ensure quantity is at least 1
              min="1"
              style={{ marginBottom: "10px" }} // Add some styling as needed
              aria-label="Quantity"
            />
            <Button onClick={handleAddToCart}>Add to Cart</Button>
            {/* Render reviews if available */}
            {renderReviews(selectedProduct)}
          </>
        )}
      </Modal>
    </Grid>
  );
};

export default ProductGrid;

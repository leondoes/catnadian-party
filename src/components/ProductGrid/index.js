import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Grid, Product, Image, Name, Price, Button, Description } from './styled';

const ProductGrid = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Grid>
      {products.map(product => (
        <Product key={product.id}>
          <Image src={product.image} alt={product.name} />
          <Name>{product.name}</Name>
          <Price>{product.price}</Price>
          <Description>{product.description || "No description available"}</Description>
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </Product>
      ))}
    </Grid>
  );
};

export default ProductGrid;

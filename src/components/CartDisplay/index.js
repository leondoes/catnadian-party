import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import {
  DrawerButton,
  CartDrawer,
  CartItem,
  CartItemImage,
  ItemDetails,
  ItemName,
  ItemPrice
} from './styled'; // Import updated styled components

const CartDisplay = () => {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <DrawerButton onClick={toggleDrawer}>
        {isOpen ? 'Close Cart' : 'Open Cart'}
      </DrawerButton>
      <CartDrawer isOpen={isOpen}>
        <h2>Cart</h2>
        {cartItems.map((item, index) => (
          <CartItem key={index}>
            <CartItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>${item.price}</ItemPrice>
            </ItemDetails>
          </CartItem>
        ))}
        <div>Total: ${totalPrice}</div>
      </CartDrawer>
    </>
  );
};

export default CartDisplay;

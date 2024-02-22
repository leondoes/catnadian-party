import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import {
  DrawerButton,
  CartDrawer,
  CartItem,
  CartItemImage,
  ItemDetails,
  ItemName,
  ItemPrice,
  RemoveItemButton // Assuming you have or will create this styled component
} from './styled';

const CartDisplay = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  // Assuming price is a string with $, convert to number and calculate total
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.substring(1)), 0);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <DrawerButton onClick={toggleDrawer}>
        {isOpen ? 'Close Cart' : 'Open Cart'}
      </DrawerButton>
      <CartDrawer isOpen={isOpen}>
        <h2>Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem key={index}>
              <CartItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.price}</ItemPrice>
                <RemoveItemButton onClick={() => removeFromCart(item.id)}>Remove</RemoveItemButton>
              </ItemDetails>
            </CartItem>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div>Total: ${totalPrice.toFixed(2)}</div>
      </CartDrawer>
    </>
  );
};

export default CartDisplay;

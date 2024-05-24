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
  RemoveItemButton,
  ItemQuantity
} from './styled';

const CartDisplay = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const parsePrice = (price) => {
    const parsed = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    return isNaN(parsed) ? 0 : parsed;
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (parsePrice(item.price) * item.quantity), 0);

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
                <ItemPrice>${parsePrice(item.price).toFixed(2)}</ItemPrice>
                <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
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

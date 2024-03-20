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
  RemoveItemButton, // Assuming you have or will create this styled component
  ItemQuantity // Assuming you create this styled component for displaying the quantity
} from './styled';

const CartDisplay = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  // Update total price calculation to account for item quantity
  const totalPrice = cartItems.reduce((acc, item) => acc + (parseFloat(item.price.substring(1)) * item.quantity), 0);

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
                {/* Display the quantity of each item */}
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

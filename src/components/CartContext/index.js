import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    // Check if the product is already in the cart
    const exists = cartItems.findIndex(item => item.id === product.id);
    if (exists !== -1) {
      // If the product exists, update its quantity
      const updatedCartItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If the product doesn't exist, add it with its quantity
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

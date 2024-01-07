import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const CartDisplay = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
      <div>Total: ${totalPrice}</div>
    </div>
  );
};

export default CartDisplay;

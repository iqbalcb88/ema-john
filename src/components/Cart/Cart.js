import React from 'react';
import './Cart.css';

const Cart = (props) => {
  // console.log(props.cart);
  const { cart } = props;
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div>
      <h2>Order Summary</h2>
      <h3>Item Ordered: {props.cart.length}</h3>
      <br />
      <p>Total: {total.toFixed(2)} </p>
    </div>
  );
};

export default Cart;

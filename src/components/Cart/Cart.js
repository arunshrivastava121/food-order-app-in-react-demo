import React from "react";
import classes from './Cart.module.css';
import Model from "../UI/Model";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{id: 'c1', name: 'sushi', amount: 3, price: 29.39}, 
        {id: 'c2', name: 'sushi', amount: 3, price: 29.39}].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  
  return (
    <Model>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>32.64</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.order}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
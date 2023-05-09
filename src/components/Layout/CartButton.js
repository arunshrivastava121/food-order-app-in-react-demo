import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css"
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const noOfCartItems = items.reduce((currentNo, item) => {
    return currentNo + item.amount;
  }, 0);

  const [btnIsHighlited, setBtnIsHeighlited] = useState(false);

  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIsHeighlited(true);

    const timer = setTimeout(() => {
      setBtnIsHeighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  const btnClasses = `${classes.button} ${btnIsHighlited ? classes.bump : ''}`;

  return (
    <button className={btnClasses} onClick={props.onCartButtonPass}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={classes.badge}>
        {noOfCartItems}
      </span>
    </button>
  );
};

export default CartButton;
import React, { Fragment } from "react";
import MealImg from "../../assets/meals.jpg";
import classes from "./Header.module.css"
import CartButton from "./CartButton";

const Header = (props) => {
  return(
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <CartButton onCartButtonPass={props.onCartClick} />
      </header>
      <div className={classes['main-image']}>
        <img src={MealImg} alt="A table of foods img." />
      </div>
    </Fragment>
  );
}

export default Header;
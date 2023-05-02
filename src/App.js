import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Header />
      <Cart />
      <Meals />
    </Fragment>
  );
}

export default App;
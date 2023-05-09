import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [modalIsShown, setModelIsShown] = useState(false);

  const showCartModal = () => {
    setModelIsShown(true);
  };

  const hideCartModal = () => {
    setModelIsShown(false);
  };

  return (
    <CartProvider>
      {modalIsShown && <Cart onHideCart={hideCartModal} />}
      <Header onCartClick={showCartModal} />
      <Meals />
    </CartProvider>
  );
}

export default App;

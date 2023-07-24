import React, { useState } from "react";
import Header from "./Layout/Header";
import Meals from './Meals/Meals'
import Cart from "./Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
const [cartIsShown, setcartIsShown] = useState(false);

const showCartHandler = () => {
  setcartIsShown(true);
}
const hideCartHandler = () => {
  setcartIsShown(false);
}
  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;

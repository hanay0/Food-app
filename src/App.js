import React, { useState } from "react";
import Header from "./Layout/Header";
import Meals from './Meals/Meals'
import Cart from "./Cart/Cart";

function App() {
const [cartIsShown, setcartIsShown] = useState(false);

const showCartHandler = () => {
  setcartIsShown(true);
}
const hideCartHandler = () => {
  setcartIsShown(false);
}
  return (
    <React.Fragment>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
      <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;

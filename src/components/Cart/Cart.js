import React, { useContext } from "react";
import ContextData from "../ContextData";

const Cart = () => {
  const { cartdata } = useContext(ContextData);

  // const {inputdata} = useContext(ContextData);

  //   const numberOfCartItems = cartCtx.items.reduce(
  //     (currentNo, item) => {
  //     return currentNo + item.inputdata;
  //   }, 0);
  console.log(cartdata);

  return (
    <div>
      <h1>Cart</h1>
      <h2>{cartdata}</h2>
    </div>
  );
};

export default Cart;

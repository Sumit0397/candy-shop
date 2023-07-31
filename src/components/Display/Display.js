import React, { useContext } from "react";
import ContextData from "../ContextData";
import ButtonData from "../Model/ButtonData";

const Display = () => {
  const { products } = useContext(ContextData);
  return (
    <div>
      <h1>Diplay</h1>
      {products.map((pro) => {
        return (
          <p>
            {pro.candyname} - {pro.describtion} - Rs. {pro.price}
            <ButtonData />
          </p>
        );
      })}
    </div>
  );
};

export default Display;

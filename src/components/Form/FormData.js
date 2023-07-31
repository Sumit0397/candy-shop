import React, { useContext, useState } from "react";
import ContextData from "../ContextData";
import "./FormData.css";

const FormData = () => {
  const [candyname, Setcandyname] = useState("");
  const { addtocart } = useContext(ContextData);
  const NameChangeHandler = (event) => {
    Setcandyname(event.target.value);
    // console.log(event.target.value)
  };

  const [describtion, Setdescribtion] = useState("");
  const describtionChangeHandler = (event) => {
    Setdescribtion(event.target.value);
    // console.log(event.target.value)
  };

  const [price, Setprice] = useState("");
  const priceChangeHandler = (event) => {
    Setprice(event.target.value);
    // console.log(event.target.value)
  };

  const OnSubmitHandler = (event) => {
    event.preventDefault();
    console.log(candyname);
    console.log(describtion);
    console.log(price);

    addtocart(candyname, describtion, price);
    Setcandyname("");
    Setdescribtion("");
    Setprice("");
  };

  return (
    <div className="form">
      <h1>Form</h1>
      <label>Candy Name : </label>
      <input type="text" value={candyname} onChange={NameChangeHandler}></input>
      <br />
      <label>Describtion : </label>
      <input
        type="text"
        value={describtion}
        onChange={describtionChangeHandler}
      ></input>
      <br />
      <label>Price : </label>
      <input type="number" value={price} onChange={priceChangeHandler}></input>
      <br />
      <button type="Submit" onClick={OnSubmitHandler}>
        Add
      </button>
    </div>
  );
};

export default FormData;

import React from "react";
import { useSelector } from "react-redux";
import "./BuyItem.css";
const BuyItem = () => {
  const itemToBuy = useSelector((state) => state.allProducts.boughtItems);
  console.log(itemToBuy);
  return (
    <div className="mainDiv">
      <form className="buyItemForm">
        <label className="textLabel">Address</label>
        <input
          type="text"
          placeholder="Enter your delivery address"
          className="inputText"
        />
      </form>
    </div>
  );
};

export default BuyItem;

import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { buyItemPricePage } from "../../redux/actions/idActions";

const Cart = () => {
  const stateItem = useSelector((state) => state.allProducts.cart);

  console.log(stateItem);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  function handleRemove(item) {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  }

  const buyItem = (item) => {
    navigate("/BuyItem");
    dispatch(buyItemPricePage(item));
    console.log(item);
  };
  let subtotal = 0;
  return (
    <div className="mainDiv">
      <p className="TotalPrice">
        <b>Total Price</b>
      </p>
      {stateItem.map((cartProduct) => {
        subtotal += cartProduct.price;
      })}
      <span className="subtotal">${subtotal}</span>
      <div className="productDiv">
        {stateItem.map((product, index) => {
          return (
            <div key={index} className="cartproducts">
              <img
                src={product.image}
                alt=""
                key={index}
                className="cartImage"
              />
              <p className="productTitle">
                <b>{product.title}</b>
              </p>
              <p className="priceTag">
                <b>${product.price.toFixed(3)}</b>
              </p>
              <button onClick={() => handleRemove(index)} className="removeBtn">
                Remove
              </button>
              <button className="removeBtn" onClick={() => buyItem(product)}>
                Buy
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;

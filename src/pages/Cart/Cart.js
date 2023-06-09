import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const stateItem = useSelector((state) => state.allProducts.cart);

  console.log(stateItem);
  let dispatch = useDispatch();

  function handleRemove(item) {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  }
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
            <div className="cartproducts">
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
            </div>
          );
        })}
      </div>
      <div className="childDiv"></div>
    </div>
  );
};

export default Cart;

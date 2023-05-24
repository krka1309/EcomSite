import React from "react";
import "./Shop.css";
import { useDispatch } from "react-redux";
import { cartItems } from "../../redux/actions/idActions";
const Products = (props) => {
  let dispatch = useDispatch();
  const addToCart = (data) => {
    dispatch(cartItems(data));
  };
  const { title, image, price } = props.data;
  return (
    <div className="product">
      <img src={image} className="image" alt="" />

      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p>
          <span>
            <b>${price}</b>
          </span>
        </p>
        <button onClick={() => addToCart(props.data)} className="addbutton">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Products;

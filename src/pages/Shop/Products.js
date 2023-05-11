import React from "react";
import "./Shop.css";
import { connect } from "react-redux";
import { cartItems } from "../../redux/actions/idActions";
const Products = (props) => {
  const addToCart = (data) => {
    // props.getProduct(index);
    props.cartItems(data);
    console.log(data);
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
          <b>${price}</b>
        </p>
        <button onClick={() => addToCart(props.data)} className="addbutton">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return ({ id }) => ({ id });
};
const mapDispatchToProps = (dispatch) => {
  return {
    // getProduct: (data) => dispatch(getProduct(data)),
    cartItems: (item) => dispatch(cartItems(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);

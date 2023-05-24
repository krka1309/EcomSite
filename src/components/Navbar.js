import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { MagnifyingGlass } from "phosphor-react";
import { setSearchQuery } from "../redux/actions/idActions";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";

const Navbar = memo(() => {
  const [query, setQuery] = useState("");

  let countCartItems = useSelector((state) => state.allProducts.cart);
  let dispatch = useDispatch();

  const handleInputChange = (inputValue) => {
    dispatch(setSearchQuery(inputValue));
    setQuery(inputValue);
  };
  console.log(countCartItems.length);
  return (
    <header className="navbar">
      <div className="logo">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
          className="logoImage"
          alt="Amazon Logo"
        />
      </div>
      <div className="inputTag">
        <input
          type="text"
          placeholder="Search Here"
          className="input"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <MagnifyingGlass size={32} className="SearchIcon" />
      </div>
      <div className="links">
        <Link to="/Login" className="linktext2">
          Login
        </Link>
        <Link to="/Shop" className="linktext1">
          Shop
        </Link>
        <Link to="/Cart" className="linktext">
          <ShoppingCart size={32} />
        </Link>
      </div>
      <span className="cartItem">{countCartItems.length}</span>
    </header>
  );
});
export default Navbar;

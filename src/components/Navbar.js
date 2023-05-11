import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/" className="linktext1">
          Shop
        </Link>
        <Link to="/Cart" className="linktext">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

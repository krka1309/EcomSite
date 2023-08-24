import React, { memo, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, List, User, MagnifyingGlass } from "phosphor-react";
import Drawer from "@mui/material/Drawer";
import { setSearchQuery } from "../redux/actions/idActions";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";

const Navbar = memo(() => {
  const [draweropen, setDrawerOpen] = useState(false);
  const [query, setQuery] = useState("");

  let countCartItems = useSelector((state) => state.allProducts.cart.length);
  let dispatch = useDispatch();

  const handleInputChange = (inputValue) => {
    dispatch(setSearchQuery(inputValue));
    setQuery(inputValue);
  };
  const memoizedCartItemsCount = useMemo(
    () => countCartItems,
    [countCartItems]
  );

  return (
    <div className="MainDiv">
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
        <span className="cartItem">{memoizedCartItemsCount}</span>
      </header>

      <div className="ChildDiv">
        <span>
          <List size={22} onClick={() => setDrawerOpen(true)} />
        </span>
        <span className="spanClass">All</span>

        <span>Amazon Mini Tv</span>
        <span>Sell</span>
        <span>Best Seller</span>
        <span>Mobiles</span>
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <span>New Release</span>
        <span>Electronic</span>
        <span>Prime</span>
        <span>Home&Kitchen</span>
        <span>Amazon Pay</span>
        <span>Fashion</span>
      </div>
      <Drawer
        className="leftDrawer"
        open={draweropen}
        anchor={"left"}
        onClose={() => setDrawerOpen(false)}
      >
        <div className="mainDrawerDiv">
          <div className="childDrawerDiv">
            <User size={32} style={{ width: "22px", padding: "2px" }} />
            Hello,Sign In
          </div>
          <div className="Trending">Trending</div>

          <a href="/Cart" className="subItems">
            Best Sellers
          </a>
          <a href="#" className="subItems">
            New Releases
          </a>
          <a href="#" className="subItems">
            Movers and Shakers
          </a>
          <hr className="dotted" />
          <div className="Trending">Digital Content And Devices</div>
          <a href="#" className="subItems">
            Echo & Alexa
          </a>

          <a href="#" className="subItems">
            Fire Tv
          </a>
          <a href="#" className="subItems">
            Kondle E-readers & eBooks
          </a>
          <a href="#" className="subItems">
            Audible Audiobooks
          </a>
          <a href="#" className="subItems">
            Amazon Prime Video
          </a>
          <a href="#" className="subItems">
            Amazon Prime Music
          </a>
          <hr className="dotted" />
          <div className="Trending">Shop By Category</div>
          <a href="#" className="subItems">
            Mobiles,Computers
          </a>
          <a href="#" className="subItems">
            Tv,Appliances,Electronics
          </a>
          <a href="#" className="subItems">
            Men's Fashion
          </a>
          <a href="#" className="subItems">
            Women's Fashion
          </a>
          <a href="#" className="subItems">
            See All
          </a>
          <hr className="dotted" />
          <div className="Trending">Programs and Features</div>
          <a href="#" className="subItems">
            Gift Card and Mobile Recharges
          </a>
          <a href="#" className="subItems">
            Flight Tickets
          </a>
          <a href="#" className="subItems">
            Clearnace Store
          </a>
          <div className="Trending">Help & Settings</div>
          <a href="#" className="subItems">
            Your Account
          </a>
          <a href="#" className="subItems">
            Customer Service
          </a>
          <a href="#" className="subItems">
            Sign In
          </a>
        </div>
      </Drawer>
    </div>
  );
});
export default Navbar;

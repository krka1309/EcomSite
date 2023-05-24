import React, { useEffect, useState } from "react";
import axios from "axios";
import { setSearchQuery } from "../../redux/actions/idActions";
import Products from "./Products";
import "../../components/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
const Shop = () => {
  const [products, setProducts] = useState([]);
  let dispatch = useDispatch();
  const query = useSelector((state) => state.allProducts.searchQuery);
  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(() => {
    fetchProducts();
    dispatch(setSearchQuery(""));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="Main-class">
      <div className="searchBar"></div>
      <div className="productsname">
        {filteredProducts.map((item, index) => (
          <Products data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

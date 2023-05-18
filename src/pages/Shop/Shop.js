import React, { useEffect, useState, memo } from "react";
import axios from "axios";
import Products from "./Products";
import "../../components/Navbar.css";
import { useSelector } from "react-redux";
const Shop = () => {
  const [products, setProducts] = useState([]);

  const query = useSelector((state) => state.allProducts.searchQuery);
  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(() => {
    fetchProducts();
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

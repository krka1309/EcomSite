import React, { useEffect, useState } from "react";
import "./Shop.css";
import axios from "axios";
import Products from "./Products";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="Main-class">
      <div className="productsname">
        {products.map((item, index) => {
          return <Products data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Shop;

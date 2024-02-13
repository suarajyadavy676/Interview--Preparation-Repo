import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllProducts() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:8080/products`);
      const jsonData = await res.json();
      // console.log(jsonData)
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>All Products</div>
      <div  className="wrapper">
        {data?.map((data) => {
          return (
            <div data-testid="products-wrapper" style={{ border: "2px solid black" }} key={data.id}>
              <h1 data-testid="product_name">{data.name}</h1>
              <h2 data-testid="product_price">{data.price}</h2>
              <h2>{data.id}</h2>
              <Link to={`/products/${data.id}`}>Product details ...</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

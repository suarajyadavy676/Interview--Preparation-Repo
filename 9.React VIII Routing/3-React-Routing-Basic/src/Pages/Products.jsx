import React from "react";
import { useState, useEffect } from "react";
export default function Products() {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const fetchApi = async () => {
    try {
      let res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
      );
      let jsonData = await res.json();
      setUserData(jsonData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className="products-wrapper">
          {/* Map the below div agaisnt your product data */}
          {userData?.map((data) => {
            return (
              <div className="all-product" key={data.id} style={{border:"2px solid black"}}>
                <div className="id">{data?.id}</div>
                <h3 className="title">{data?.title}</h3>
                <div className="category">{data?.category}</div>
                <div className="price">{data?.price} </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

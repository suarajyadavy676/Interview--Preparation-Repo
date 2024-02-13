import React from 'react'
import { useState,useEffect } from 'react'

export default function AllProducts() {
  const [userData,setUserData] = useState([])
  console.log(userData)
  const fetchApi = async()=>{
    try {
      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
      let jsonData = await res.json()
      setUserData(jsonData.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper">
          {/* Map the below div against product data */}
          {
            userData?.map(data=>{
              return(
            <div key={data.id} style={{border:"2px solid red"}}>
                <h3 className = "name">{data?.title}</h3>
                <div className= "brand">{data?.brand}</div>
                <div className = "price">{data?.price}</div>
            </div>
              )
            })
          }
      </div>
    </div>
  )
}
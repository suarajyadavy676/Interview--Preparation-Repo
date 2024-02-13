import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

export default function ProductDetails() {
  // console.log(name,price)
  const [singleData,setSingleData] = useState({})
  // console.log(singleData)
  const {id} = useParams()
  // console.log(id)
  const fetchId = async()=>{
    try {
      const res = await fetch(`http://localhost:8080/products/${id}`)
      const singleData = await res.json()
      setSingleData(singleData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchId()
  },[id])
  return (
    <div data-testid = "product-details" style={{border:"2px solid black",width:"50%",margin:"auto"}} >
      <div>
      {/* show product details here */}
      <h1 >Name:{singleData.name} and Price : {singleData.price}</h1>
      </div>
    </div>
  )
}

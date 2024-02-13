import React from 'react'
import AllProducts from '../Pages/AllProducts'
import ProductDetails from '../Pages/ProductDetails'
import {Routes,Route} from "react-router-dom"
export default function AllRoutes() {
    return (
        <div>
          <Routes>
            <Route path='/' element={<AllProducts/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
          </Routes>  
        </div>
    )
}

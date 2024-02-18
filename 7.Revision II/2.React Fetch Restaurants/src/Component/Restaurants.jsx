import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import "./Restaurants.css"

function Restaurants() {

  const [data,setData] = useState()
  const [isLoading,setIsLoding] = useState(false)
  const [currentPage,setCurrentpage]=useState(1)

  const fetchApi = async()=>{
    setIsLoding(true)
    try {
      let apiData = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${currentPage}`)
      let jsonData = await apiData.json()
      // console.log(jsonData)
      setData(jsonData)
      setIsLoding(false)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchApi()
  },[currentPage])

    // return ;
  return isLoading?<LoadingIndicator />: (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container" className="cont">
       {/* Restaurant Card */}{(data?.data)?.map(e=><RestaurantCard {...e} key={e.id} />)}
      </div>
      <div>
        {/* Pagination Component */}<Pagination total={data?.totalPages} onChange={setCurrentpage} current= {currentPage} />
      </div>
    </div>
  );
}

export default Restaurants;

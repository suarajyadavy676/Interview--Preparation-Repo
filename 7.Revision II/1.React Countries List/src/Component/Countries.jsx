import LoadingIndicator from "./LoadingIndicator";
import { useState, useEffect } from "react";
import CountriesCard from "./CountriesRow";
import Pagination from "./Pagination";

function Countries() {
  // return <LoadingIndicator />;

  const [data, setData] = useState();
  const [currentPage,setCurrentPage]=useState(1)
  const [isLoading, setIsLoading] = useState(true);
  // console.log(data)

  const fetchApi = async () => {
    setIsLoading(true);
    try {
      const apiData = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${currentPage}&limit=10`
      );
      const jsonData = await apiData.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [currentPage]);
  // return <LoadingIndicator/>
  // console.log(data)

  return isLoading?<LoadingIndicator/>:( 
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>COUNTRY</th>
            <th>POPULATION</th>
            <th>RANK</th>
          </tr>
        </thead>
        <tbody data-testid="countries-container">
          {/* Show the CountriesRow here  */}
          {(data?.data)?.map(e=><CountriesCard {...e} key={e?.id} />)}
        </tbody>
      </table>
      <div>{/* Pagination */}
      <Pagination total={data.totalPages} current={currentPage} onChange={setCurrentPage} />
      </div>
    </div>
  );
}

export default Countries;

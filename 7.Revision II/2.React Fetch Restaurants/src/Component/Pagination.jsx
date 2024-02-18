function Pagination({onChange,current,total}) {
  // console.log(onChange,page)
  return (
  <div data-testid = "page-container">
  <button onClick={()=>{onChange(1)}} style={{borderColor:"red"}}>1</button>
  <button onClick={()=>{onChange(2)}}>2</button>
  <button onClick={()=>{onChange(3)}}>3</button>
  <button onClick={()=>{onChange(4)}}>4</button>
  <button onClick={()=>{onChange(5)}}>5</button>
  <button onClick={()=>{onChange(6)}}>6</button>
  <button onClick={()=>{onChange(7)}}>7</button>
  <button onClick={()=>{onChange(8)}}>8</button>
  <button onClick={()=>{onChange(9)}}>9</button>
  <button onClick={()=>{onChange(10)}}>10</button>
  {/* <h1>Total-Pages:{total}</h1> */}
  </div>
 
  );
  }

export default Pagination;

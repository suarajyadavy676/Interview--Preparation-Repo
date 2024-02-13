import "./App.css";
import {AllRoutes} from '../src/Routes/AllRoutes'
import { Navbar } from "./Routes/Navbar";

function App() {
  return <div className="App">
  <Navbar/>
  <AllRoutes/>
  </div>;
}

export default App;
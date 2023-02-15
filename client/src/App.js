import { useEffect, useState } from "react";
import { getProducts } from "./utils/services";
import ProductsCard from "./components/ProductsCard"
import Register from "./components/Register";
import axios from "axios";
import Login from "./components/Login";



function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;

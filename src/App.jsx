import {useEffect, useState } from "react";
import Context from "./context/Context";
import "./App.css";
import axios from "axios";
import Products from "./components/Products";

function App() {
  useEffect(() => {
    getdata();
  }, []);

  const [productsData, setproductsData] = useState([]);
  const [array, setarray] = useState([]);
  const [count, setCount] = useState(0);
  const [modalshow, setmodalshow] = useState(false);

  async function getdata() {
    const request = await axios.get("https://fakestoreapi.com/products");
    setproductsData(request.data);
  }

  const data = {
    productsData,
    setproductsData,
    array,
    setarray,
    count,
    setCount,
    modalshow,
    setmodalshow,
  };

  return (
    <><Context.Provider value={data}>
      <Products/>
  </Context.Provider>
  </>
  );
}

export default App;

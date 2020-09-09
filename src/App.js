import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './Products.js';
//import CartList from './Cart.js';


function App() {

  let [data, setdata] = useState([]);
  let [page, setPage] = useState('productPage')

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/data.json").then(rawdata => {
      return rawdata.json()
    }).then(data => {
      console.log(data);
      localStorage.setItem("fallbackdata", JSON.stringify(data))
      setdata(data.products || []);
    }).catch(() => {
      if ("fallbackdata" in localStorage) {
        let localdata = JSON.parse(localStorage.getItem("fallbackdata"));
        setdata(localdata.products || [])
      }
    })
  }, [])



  if (page === "productPage") return (
    <div className="App">
      <ProductList products={data}></ProductList>
    </div>
  ); else return (
    <div className="App">
      <h1>Cart page</h1>
      <ProductList products={data}></ProductList>
      {/* <CartList products={data}></CartList> */}
    </div>
  );

}

export default App;

import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import SideNav from "./components/SideNav";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';


library.add(fab,   faCaretDown, faCaretUp)

function App() {
  const [store, setStore] = useState([]);
  const [compName, setName] = useState([]);
  // console.log(store.map(item => item.product_name))
  const allProducts = [];
  store.map((item) => {
    if (allProducts.includes(item.product_name)) {
      return;
    } else {
      allProducts.push(item.product_name);
    }
  });
  console.log(allProducts);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetch("https://assessment-edvora.herokuapp.com/", {
        mode: "cors",
      });
      const response = await apiData.json();
      setStore(response);

      // console.log(store.map(item => item.product_name));
    };
    fetchData();
  }, []);
  return (
    <div className="parent-container">
      <div>
        <SideNav allProducts={allProducts} store={store} />
      </div>
      <div>
        <h1 className="company-name">Edvora</h1>
        <h2 className="product-title">Products</h2>
        <Products allProducts={allProducts} store={store} />
      </div>
    </div>
  );
}

export default App;

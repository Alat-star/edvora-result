//INCOMPLETE FEATURES

import React, {useRef, useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideNav({ store, allProducts, setFilter, compFilter, setTag }) {
  const [caretToggle, setCaret] = useState(false)


  const productRef = useRef(null)

  const clickHandler = () => {
    productRef.current.style.display = 'block';
    setCaret(!false)
  }

  const caretHandler = () => {
    productRef.current.style.display = 'none';
    setCaret(false)
  }

  const filterComp = (value) => {
   const companyName = store.filter(item => item === value)
   console.log(compFilter)
   setFilter([...companyName])
   setTag(!false)
   console.log(compFilter);
  }

  const productsBtn = allProducts.map((item) => {

    return(
        <button className='product-btn' onClick={ () => {filterComp(productRef.current.innerHtml)}} ref={productRef} >{item}</button>
    )
  });
  // const stateBtn = "";
  // const cityBtn = "";

  return (
    <div className="dropdown-bar">
      <span>
        Filters<hr></hr>
      </span>
      <div>
        <div className='product-nav'>
          <button onClick={ () => {clickHandler()}}>
            Products
            {!caretToggle && (<span>
              <FontAwesomeIcon size="lg" icon={["fas", "caret-down"]} />
            </span>)}
            {caretToggle && (<span onClick={ () => caretHandler()} >
              <FontAwesomeIcon  size="lg" icon={["fas", "caret-up"]} />
            </span>)}
          </button>
          <div>{productsBtn}</div>
        </div>
        <div>
          <button>
            State
            <span>
              <FontAwesomeIcon size="lg" icon={["fas", "caret-down"]} />
            </span>
          </button>
        </div>
        <div>
          <button>
            City
            <span>
              <FontAwesomeIcon size="lg" icon={["fas", "caret-down"]} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideNav;

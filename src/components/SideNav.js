//INCOMPLETE FEATURES

import React, {useRef, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideNav({ store, allProducts }) {

  const productRef = useRef(null)
  const caretUpRef = useRef(null)
  const caretDownRef = useRef(null)

  useEffect( () => {
   const caretCtrl = () => {
      caretUpRef.current.style.display = 'none';
    }
    caretCtrl()
  }, [])



  const clickHandler = () => {
  productRef.current.style.display = 'block';
  caretUpRef.current.style.display = 'block';
  caretDownRef.current.style.display = 'none';
  }

  const caretHandler = () => {
    productRef.current.style.display = 'none';
    caretDownRef.current.style.display = 'block';
    caretUpRef.current.style.display = 'none';
  }

  const filter = (value) => {
    
  }
  const productsBtn = allProducts.map((item) => {

    return(
        <button className='product-btn' onClick={ () => {console.log(productRef.current)}} ref={productRef} >{item}</button>
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
            <span ref={caretDownRef} >
              <FontAwesomeIcon size="lg" icon={["fas", "caret-down"]} />
            </span>
            <span onClick={caretHandler} className='caret-up' ref={caretUpRef} >
              <FontAwesomeIcon  size="lg" icon={["fas", "caret-up"]} />
            </span>
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

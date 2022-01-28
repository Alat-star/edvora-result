import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideNav({ store, allProducts }) {
  // const productsBtn = allProducts.map((item) => {});
  // const stateBtn = "";
  // const cityBtn = "";

  return (
    <div className="dropdown-bar">
      <span>
        Filters<hr></hr>
      </span>
      <div>
        <div>
          <button>
            Products
            <span>
              <FontAwesomeIcon size="lg" icon={["fas", "caret-down"]} />
            </span>
          </button>
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

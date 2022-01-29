import React from "react";


function Products({ allProducts, store }) {

  // const

  const productsBox = allProducts.map((item, index) => {
    return (
      <div key={index}>
        <span className="product-name">{item}</span>
        <hr></hr>
        <div className="item-container">
            {store.map((product, index) =>
              product.product_name === item ? (
                <div className="item-box" key={index}>
                  <div className="product-img-container">
                    <img width="70px" src={product.image} alt="product visual" />
                    <div>
                      <span className="item-name">{product.product_name}</span>
                      <span>{product.brand_name}</span>
                      <span className="item-price">$ {product.price}</span>
                    </div>
                  </div>
                  <div className="details-div">
                    <div>
                      <span>{product.address.city}</span>
                      <span>
                        <span className="date-tag">Date:</span>{" "}
                        {product.date.split("T").splice(0, 1)}
                      </span>
                    </div>
                    <p className="item-description">{product.discription}</p>
                  </div>
                </div>
              ) : (
                false
              )
            )}
        </div>
      </div>
    );
  });
  return <div className="product-container">{productsBox}</div>;
}

export default Products;

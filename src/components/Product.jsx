import React from "react";
import "./Product.css";

import { useStateValue } from "../StateProvider";

function Product({ title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: 1,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="card-box">
      <div className="product">
        <div className="box-product">
          <p className="card-text">{title}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_) => (
                // eslint-disable-next-line
                <span>🌟</span>
              ))}
          </div>
          <div>
            <img className="img-card" src={image} alt="product-images" />
          </div>
          <button onClick={addToBasket} className="btn-1">
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

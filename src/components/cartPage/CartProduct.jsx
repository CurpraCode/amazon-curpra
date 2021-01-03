import React from "react";
import "./CartProduct.css";
import { useStateValue } from "../../StateProvider";


function CartProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeBasket = () => {
    dispatch({
      type: "REMOVE_BASKET",
      id: id,
    });
  };
  return (
    <div>
      <div className="cart-product">
        <div className="cart-box-product">
          <div>
            <img className="cart-img-card" src={image} alt="product-images" />
          </div>
          <p className="cart-card-text">{title}</p>
          <p className="cart-product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="cart-product-rating">
            {Array(rating)
              .fill()
              .map(() => (
                // eslint-disable-next-line
                <span>🌟</span>
              ))}
          </div>

          <button className="cart-btn-1" onClick={removeBasket}>
            Remove from Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;

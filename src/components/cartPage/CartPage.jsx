import React from "react";
import "./CartPage.css";
import CartProduct from "./CartProduct";
import SubTotal from "./SubTotal";
import { useStateValue } from "../../StateProvider";

function CartPage() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="CartBody">
      <div className="cart">
        <h2>SHOPPING CART</h2>
        {basket.map((item) => {
          return(
          <CartProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />);
        })}
      </div>
      <div>
        <SubTotal />
      </div>
    </div>
  );
}

export default CartPage;

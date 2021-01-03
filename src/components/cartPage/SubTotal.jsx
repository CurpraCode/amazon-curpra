import React from "react";
import "./CartPage.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useHistory } from "react-router-dom";

function SubTotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket?.length} item): <span>{value}</span>
            </p>
            <div className="flex-check-p">
              <input type="checkbox" name="" id="" />
              <div>This order contains a gift for you</div>
            </div>

            <button onClick={(e) => history.push("/checkout")}>
              Proceed to Checkout
            </button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default SubTotal;

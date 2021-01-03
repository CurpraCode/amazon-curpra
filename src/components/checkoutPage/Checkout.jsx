import React, { useState, useEffect } from "react";
import CartProduct from "../cartPage/CartProduct";
import { useStateValue } from "../../StateProvider";
import { Link, useHistory } from "react-router-dom";
import "./Checkout.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import axios from "../../axios"

function Checkout() {
  const [{ basket }] = useStateValue();

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/checkout/create?total=${getBasketTotal(basket) + 100}`,
      });
      setClientSecret(response.data.ClientSecret);
    };
    getClientSecret();
  }, [basket]);
  const handleSubmit = async (event) => {
    //stripe in action
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="checkout-position">
      hello am the checkout page
      <div>
        <div>
          Checkout <Link to="/cartpage">{basket?.length} Items</Link>
        </div>
        <div>
          <div>Item order with description</div>

          {/* item from the cartproduct */}
          <div>
            {basket.map((item) => (
              <CartProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div>
          <div>Payment Method</div>
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div>
              <CurrencyFormat
                renderText={(value) => {
                  <h3>Order Total: {value}</h3>;
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Pay Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

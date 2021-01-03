import React, { useEffect } from "react";
import "./App.css";
import Header from "././components/Header";
import Body from "././components/Body";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./components/cartPage/CartPage";
import Login from "./components/login/Login";
import Footer from "./components/Footer";
import Checkout from "./components/checkoutPage/Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import "./reset.css";

const promise = loadStripe(
  "pk_test_51I4NI5EOBe7AMdug1Eq7ns3RtAhgPz7JGbPrVzkRrixIdFVYDocAZBYuNZriz9bwMdkdHY0dHPyFdYvrJHn4Q8XM00Id58XNox"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will run only once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just logged in / the user just logged out
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Body />
            <Footer />
          </Route>
          <Route exact path="/cartpage">
            <Header />
            <CartPage />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Elements stripe={promise}>
              <Checkout />
            </Elements>

            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

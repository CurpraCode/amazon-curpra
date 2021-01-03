import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div>
      <div className="headerbar">
        <Link to="/">
          <img
            className="headerlogo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        <div className="searchBar">
          <input
            className="search-input"
            type="text"
            placeholder="Search Items"
          />
          <SearchIcon className="searchBar-icon" />
        </div>

        <div className="menu">
          <Link to={!user && '/Login'}>
            <div onClick={handleAuthentication} className="Select">
              <span className="optionUp">{user ? user.email : "Welcome"}</span>

              <span className="optionDown">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <div className="Select">
            <span className="optionUp">Returns</span>
            <span className="optionDown">& Orders</span>
          </div>

          <div className="Select">
            <span className="optionUp">Your</span>
            <span className="optionDown">Prime</span>
          </div>
          <Link to="/cartpage">
            <div className="Select-Cart">
              <AddShoppingCartIcon />
              <span className="Select-Cart-amount">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="mini-header">
        <div>All</div>
        <div>Today's Deals</div>
        <div>Amazon.com</div>
        <div>Customer Service</div>
        <div>Browsing History</div>
        <div>Buy Again</div>
        <div>Gift Card</div>
        <div>Sell</div>
        <div>Registry</div>
      </div>
    </div>
  );
}

export default Header;

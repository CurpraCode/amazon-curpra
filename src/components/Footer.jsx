import React from "react";
import "./Footer.css";
import LanguageIcon from "@material-ui/icons/Language";

function Footer() {
  return (
    <div className="foot">
      <div className="footer-container">
        <div className="flex-foot-a">
          <h4>Get to Know Us</h4>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Sustainability</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Tours</p>
        </div>

        <div className="flex-foot-a">
          <h4>Make Money with Us</h4>
          <p>Sell products on Amazon</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Product</p>
          <p>Self-Publish with Us</p>
          <p>Host and Amazon Hub</p>
          <p>See More Make Money with Us</p>
        </div>

        <div className="flex-foot-a">
          <h4>Amazon Payments Products</h4>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>

        <div className="flex-foot-a">
          <h4>Let Us Help You</h4>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Order</p>
          <p>Shipping Rates & Policies</p>
          <p>Return & Replacement</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <img
            className="headerlogo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
            <LanguageIcon/>

          <select name="English" id="eng">
            <option>English</option>
          </select>
          <button>$ USD-U.S. Dollar</button>
          <button>United States</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

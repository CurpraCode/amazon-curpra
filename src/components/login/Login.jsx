import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";

function Login() {
    const history = useHistory(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //use firebase to login
    auth.signInWithEmailAndPassword(email, password) 
    .then(auth=>{
      history.push('/')
    })
    .catch(error=>alert(error.message))
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created a new user with email and password
       if (auth){
         history.push('/')
       }
        console.log(auth);
      })
      .catch((error) => alert(error.message));
    //use firebase for the register
  };
  return (
    <div className="login-box">
      <Link to="/">
        <img
          className="headerlogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login-container">
        <h2>Sign In</h2>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="email"
            name=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to AMAZON's CLONE AND NOT THE REAL AMAZON
          condition of Use & Sale. Please see our Privacy Notice, our Cookies
          Notice and our interest-Based Ads Notice.
        </p>
        <button type="submit" onClick={register}>
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

import { useState } from "react";
import { LOGO_URL } from "../utils/const";
import { Link } from "react-router-dom";
import useCheckOnlineStatus from "../utils/useCheckOnlineStatus";
/** header component */
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('Login');
  console.log('header rendered');
  const getOnlineStatus = useCheckOnlineStatus();
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="#home">
            <img
              src={LOGO_URL}
              alt="Logo"
            />
          </a>
        </div>
        <div className="nav-items">
          <ul>
            <li>
            <span style={{ color: getOnlineStatus ? "green" : "red" }}>
              {getOnlineStatus ? "Online" : "Offline"}
            </span>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <a href="#cart">Cart</a>
            </li>
            <li>
              <button className="btn btn-login" onClick={() => {
                isLoggedIn === 'Login' ? setIsLoggedIn('Logout') : setIsLoggedIn('Login')
              }}>{isLoggedIn}</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};


export default Header;
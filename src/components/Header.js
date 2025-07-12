import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/const";
import { Link } from "react-router-dom";
import useCheckOnlineStatus from "../utils/useCheckOnlineStatus";
import UserContext from "../utils/UserContext";
/** header component */
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('Login');

  const getOnlineStatus = useCheckOnlineStatus();

  const data = useContext(UserContext);
  return (
    <header className="bg-stone-400 shadow-sm mb-3 sm:bg-pink-100">
      <div className="container m-auto">
        <div className="flex justify-between items-center">
          <div className="logo w-40">
            <a href="#home">
              <img
                src={LOGO_URL}
                alt="Logo"
              />
            </a>
          </div>
          <div className="nav-items">
            <ul className="flex justify-between gap-5 items-center">
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
                <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 text-white rounded-lg" onClick={() => {
                  isLoggedIn === 'Login' ? setIsLoggedIn('Logout') : setIsLoggedIn('Login')
                }}>{isLoggedIn}</button>
              </li>
              <li>
                {data?.user?.name}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;
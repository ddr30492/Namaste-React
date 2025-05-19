import { LOGO_URL } from "../utils/const";
/** header component */
const Header = () => {
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#cart">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};


export default Header;
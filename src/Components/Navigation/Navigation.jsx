import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">
        <img src="/images/logo..png" alt="brand_logo" />
      </div>
      <div>
        <ul>
          <li className="list">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="list">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="list">
            <Link to="/signin">SIGN IN</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;

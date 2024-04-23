import { Link } from "react-router-dom";

import "./navbar.css";
function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="ul">
          <li className="li">
            <Link to="/">Shop</Link>
          </li>
          <li className="li">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

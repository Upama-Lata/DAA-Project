import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AquaLink</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/help">Help</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
import { Link } from "react-router-dom";
import "./client.css";
import { useState } from "react";
const Client = ({ user }) => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="client">
      <nav className="navbar">
        <div className="nav-container">
          <h3 className="user-name"> {user.name} </h3>
          <div className={`nav-links ${showNav && "nav-links active"}`}>
            <ul>
              <li>
                <Link className="nav-link" to="/listings">
                  My listings
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/add">
                  Add listing
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/offers">
                  My offers
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className="icone">
            <button onClick={handleShowNav}>icone</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Client;

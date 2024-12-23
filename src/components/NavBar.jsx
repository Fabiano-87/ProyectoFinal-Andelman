import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        <img
          className="logo"
          src="/assets/img/logo.png"
          alt="logo"
          width="120"
          height="60"
        />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/faqs" className="nav-link">
            FAQs
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

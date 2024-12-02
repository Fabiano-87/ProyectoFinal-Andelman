import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <img
          className="logo"
          src="/assets/logo.png"
          alt="logo"
          width="120"
          height="60"
        />
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact Us
          </a>
        </li>
        <li className="nav-item">
          <a href="/products" className="nav-link">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a href="/faqs" className="nav-link">
            Faqs
          </a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

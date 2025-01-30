import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "black",
      }}
    >
      <Link to="/">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bioxcel-210e1.firebasestorage.app/o/logo.png?alt=media&token=225e9779-a738-4ca6-a3c0-6e581b3b3162" // Replace with the Firestore URL
          alt="logo"
          style={{ width: "120px", height: "60px" }}
        />
      </Link>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "15px",
          margin: "0",
          padding: "0",
        }}
      >
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/faqs" style={{ color: "white", textDecoration: "none" }}>
            FAQs
          </Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

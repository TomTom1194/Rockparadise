// src/Components/Navbar.jsx

import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo.png"; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white px-3 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  justify-content-end" id="navbarLinks">
          <ul className="navbar-nav d-flex justify-content-lg-center w-100 text-lg-center text-end" style={{fontWeight: "600", gap: "12px"}}>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/category">Category</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

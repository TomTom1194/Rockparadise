import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"; 
import CartDropdown from './CartDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { cartItems } = useCart();
  const dropdownRef = useRef(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white px-3 shadow-sm ps-lg-5 fixed-top">
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
          className="navbar-toggler order-2 order-lg-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end order-3" id="navbarLinks">
          <ul className="navbar-nav d-flex justify-content-lg-center w-100 text-lg-center text-end" style={{ fontWeight: "600", gap: "12px" }}>
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

        <div className="ms-auto position-relative order-1 order-lg-3" ref={dropdownRef}>
          <button
            className="btn btn-link text-dark position-relative"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaShoppingCart size={24} />
             {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
              </span>
              )}
          </button>

          {showDropdown && (
            <div className="dropdown-menu show position-absolute end-0 mt-2 z-3 cart-dropdown-mobile" style={{ minWidth: "300px" }}>
              <CartDropdown closeDropdown={() => setShowDropdown(false)}/>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

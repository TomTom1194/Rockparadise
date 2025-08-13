import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../images/logo.png"; 
import CartDropdown from './CartDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { totalQuantity } = useCart();
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isCategoryActive = location.pathname.startsWith("/productlist");
  const isGalleryActive = location.pathname.startsWith("/gallery");

 
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarLinks");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      
      const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
      bsCollapse.hide();
    }
  };

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
        <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
          <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
          />
        </NavLink>

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
          <ul
            className="navbar-nav d-flex justify-content-lg-center w-100 text-lg-center text-end"
            style={{ fontWeight: "300", gap: "12px", fontSize: "1rem" }}
          >
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/about" onClick={closeNavbar}>About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/contact" onClick={closeNavbar}>Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/faq" onClick={closeNavbar}>FAQ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/gallery/Diamond"
                className={`nav-link text-dark ${isGalleryActive ? "active" : ""}`}
                onClick={closeNavbar}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/productlist/Diamond"
                className={`nav-link text-dark ${isCategoryActive ? "active" : ""}`}
                onClick={closeNavbar}
              >
                Category
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="ms-auto position-relative order-1 order-lg-3" ref={dropdownRef}>
          <button
            className="btn btn-link text-dark position-relative"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaShoppingCart size={24} />
            { totalQuantity > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                { totalQuantity}
              </span>
            )}
          </button>

          {showDropdown && (
            <div
              className="dropdown-menu show position-absolute end-0 mt-2 z-3 cart-dropdown-mobile"
              style={{ minWidth: "300px" }}
            >
              <CartDropdown closeDropdown={() => setShowDropdown(false)} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

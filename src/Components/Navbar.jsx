import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png"; 
import CartDropdown from './CartDropdown';
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { totalQuantity } = useCart();
  const dropdownRef = useRef(null);
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/searchlist/${encodeURIComponent(searchTerm)}`);
      // setSearchTerm("");
      setShowMobileSearch(false);
    }
  };

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
    <>
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

          {/* Desktop Search */}
          <form
            className="d-none d-lg-flex me-3 order-3 position-relative"
            onSubmit={handleSearch}
            style={{ width: "250px" }}
          >
            <input
              type="text"
              className="form-control pe-5"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn position-absolute top-50 end-0 translate-middle-y pe-3 border-0 bg-transparent"
              type="submit"
              style={{ color: "#666" }}
            >
              <FaSearch />
            </button>
          </form>

          {/* Mobile Search Icon */}
          <button
            className="btn btn-link text-dark d-lg-none ms-auto"
            onClick={() => setShowMobileSearch(true)}
          >
            <FaSearch size={20} />
          </button>

          {/* Cart */}
          <div className="ms-auto position-relative order-1 order-lg-3" ref={dropdownRef}>
            <button
              className="btn btn-link text-dark position-relative"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FaShoppingCart size={24} />
              {totalQuantity > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalQuantity}
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

      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            background: "white",
            padding: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
          }}
        >
          <form className="position-relative fixed-top pt-3" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control pe-5"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button
              className="btn btn-addtocart mt-2 w-100"
              type="submit"
              // style={{ color: "#666" }}
            >
              Search
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary mt-2 w-100"
              onClick={() => setShowMobileSearch(false)}
            >
              Close
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Navbar;

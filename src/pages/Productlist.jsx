import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import rockData from "../data/rock.json";
import SellSection from "../Components/Home/SellSection";
import Category from "../Components/Category";

function Productlist() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [showCategory, setShowCategory] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  
  useEffect(() => {
    const navbar = document.querySelector(".navbar"); 
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const filteredProducts = rockData.filter(
    (p) => p.type === category || p.brand === category
  );

  return (
    <div className="container py-5">
      <div
        className="d-flex justify-content-between align-items-center mb-4 "
        style={{ position: "sticky", top: navbarHeight, zIndex: 10, background: "#fff" }}
      >
        <button
          className="btn btn-outline-secondary "
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <button
          className={`filter-btn btn d-md-none ${
            showCategory ? "btn-dark text-white" : "btn-outline-dark text-dark"
            }`}
          onClick={() => setShowCategory(!showCategory)}
        >
          <i className="bi bi-filter"></i> Filter
        </button>
      </div>

      {/* Mobile-only sidebar */}
        {showCategory && (
          <div
            className="d-md-none mb-4"
            style={{
              position: "sticky",
              top: navbarHeight + 40,
              zIndex: 1000,
              background: "#fff",
              padding: "10px 0"
            }}
          >
            <Category layout="v" onCategoryClick={() => setShowCategory(false)} />
          </div>
        )}
      <div className="row">
        {/* Desktop sidebar */}
        <div
          className="d-none d-md-block col-md-3"
          style={{
            position: "sticky",
            top: navbarHeight + 40, 
            alignSelf: "flex-start",
            zIndex: 1
          }}
        >
          <Category layout="v"/>
        </div>

        {/* Product list */}
        <div className="col-12 col-md-9">
          <SellSection
            title={`Products in ${category}`}
            products={filteredProducts}
            showViewMoreButton={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Productlist;

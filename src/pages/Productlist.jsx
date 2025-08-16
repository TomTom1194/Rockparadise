import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import rockData from "../data/rock.json";
import SellSection from "../Components/Home/SellSection";
import Category from "../Components/Category";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Productlist() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { category } = useParams();
  const navigate = useNavigate();
  const [showCategory, setShowCategory] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const filteredProducts = rockData.filter(
    (p) => p.type === category || p.brand === category
  );

  let sortedProducts = [...filteredProducts];
  if (sortOrder === 'low-to-high') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high-to-low') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }


  return (
    <div className="container py-5 ">
      {/* Mobile/Desktop Header */}
      <div
        className="d-flex justify-content-between align-items-center mb-1 "
        style={{ position: "sticky", top: "121px", zIndex: 10, 
          background: "#fff" 
        }}
      >
        <button
          className="btn btn-outline-secondary  "
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

      {/* Mobile Sidebar */}
      {showCategory && (
        <div
          className="d-md-none mb-4"
          style={{
            position: "sticky",
            top: "155px",
            zIndex: 9,
            background: "#fff",
            padding: "10px 0"
          }}
        >
          <Category layout="v" onCategoryClick={() => setShowCategory(false)} />
        </div>
      )}

      <div className="row mt-md-5 ">
        {/* Desktop Sidebar */}
        <div
          className="d-none d-md-block col-md-3"
          style={{
            position: "sticky",
            top:"166px",
            alignSelf: "flex-start",
            zIndex: 1
          }}
          data-aos="fade-right"
        >
          <Category layout="v" />
        </div>

        {/* sort */}
        <div className="col-12 col-md-9 overflow-hidden" >
          <div className="d-flex justify-content-end mb-4" data-aos="fade-left">
            <select
              className="form-select w-auto"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Default Sort</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
          
          {/* product list */}
          <div className="overflow-hidden" data-aos="fade-left">
          <SellSection
            title={`Products in ${category}`}
            products={sortedProducts}
            showViewMoreButton={false}
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
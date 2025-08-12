import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import rockData from "../data/rock.json";
import SellSection from "../Components/Home/SellSection";
import Category from "../Components/Category";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function ViewmoreList() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { title } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [sortOrder, setSortOrder] = useState('default');

  const homeSectionMap = {
    "Best Seller": ["J001", "J003", "J005", "J007", "GEM001", "GEM003", "GEM005", "GEM007"],
    "Promotion": ["J002", "J004", "J006", "J008", "GEM002", "GEM004", "GEM006", "GEM008"],
    "Latest": ["J009", "J010", "J011", "J012", "GEM009", "GEM010", "GEM011", "GEM012"],
  };

  const fixedIds = location.state?.ids || homeSectionMap[title] || [];
  const displayTitle = location.state?.title || title;

  const fixedProducts = rockData.filter((p) => fixedIds.includes(p.id));
  const remainingProducts = rockData
    .filter((p) => !fixedIds.includes(p.id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 11);

  let finalProducts = [...fixedProducts, ...remainingProducts];

  let sortedProducts = [...finalProducts];
  if (sortOrder === 'low-to-high') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high-to-low') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
 <div className="container py-5">
      <div
        className="d-flex justify-content-between align-items-center mb-4 sticky-top py-3 "
        style={{ top: "121px", zIndex: 10, background: "#fff", overflow: "hidden" }}
      >
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate(-1)}
          data-aos="fade-right"
        >
          ← Back
        </button>

        <select
          className="form-select w-auto "
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          data-aos="fade-left"
        >
          <option value="default">Default Sort</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
      
      {/* product list */}
      <div className="overflow-hidden" data-aos="fade-up">
        <SellSection
          title={`Products in ${displayTitle}`}
          products={sortedProducts} 
          showViewMoreButton={false}
        />
      </div>
    </div>  );
}

export default ViewmoreList;

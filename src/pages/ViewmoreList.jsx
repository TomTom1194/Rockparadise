// src/pages/ViewmoreList.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import rockData from "../data/rock.json";
import SellSection from "../Components/Home/SellSection";

function ViewmoreList() {
  const { title } = useParams();
  const navigate = useNavigate();
    console.log(title);
  
  const homeSectionMap = {
    "Best Seller": ["J001", "J003", "J005", "J007", "GEM001", "GEM003", "GEM005", "GEM007"],
    "Promotion": ["J002", "J004", "J006", "J008", "GEM002", "GEM004", "GEM006", "GEM008"],
    "Latest": ["J009", "J010", "J011", "J012", "GEM009", "GEM010", "GEM011", "GEM012"],
  };

  const fixedIds = homeSectionMap[title] || [];

  const fixedProducts = rockData.filter((p) => fixedIds.includes(p.id));

  
  const remainingProducts = rockData
    .filter((p) => !fixedIds.includes(p.id))
    .sort(() => Math.random() - 0.5) 
    .slice(0, 12); 

  
  const finalProducts = [...fixedProducts, ...remainingProducts];
  console.log(finalProducts);

  return (
    <div className="container py-5">
      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <SellSection
        title={`${title} `}
        products={finalProducts}
        showViewMoreButton={false}
      />
    </div>
  );
}

export default ViewmoreList;

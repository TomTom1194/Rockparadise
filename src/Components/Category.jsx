import React from "react";
import { Link, useParams } from "react-router-dom";

const categories = [
  "Diamond",
  "Quartz",
  "Ruby",
  "Sapphire",
  "Emerald",
  "Topaz",
  "Amethyst",
  "Opal",
  "Tiffany",
  "Swarovski",
  "Pandora"
];

function Category({ layout = "horizontal", onCategoryClick }) {
  const { category } = useParams();

  const containerClass =
    layout === "horizontal"
      ? "d-flex flex-row flex-wrap justify-content-center gap-2"
      : "d-flex flex-column gap-2";

  return (
    <div className={containerClass}>
      {categories.map((cat, index) => {
        const isActive = category?.toLowerCase() === cat.toLowerCase();
        return (
          <Link
            key={index}
            to={`/productlist/${cat}`}
            className={`btn ${
              isActive ? "btn-dark text-white" : "btn-outline-dark"
            }`}
            style={{ textTransform: "capitalize" }}
            onClick={() => {
              if (onCategoryClick) onCategoryClick(); //close filter onclick
            }}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
}

export default Category;

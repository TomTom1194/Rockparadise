import React from 'react';
import { Link } from 'react-router-dom';

const categories = ["Diamond", "Quartz", "Ruby", "Sapphire", "Emerald"];

function Category() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Explore Gemstone Categories</h2>
      <div className="row justify-content-center">
        {categories.map((category, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2 text-center mb-3">
            <Link
              to={`/productlist/${category.toLowerCase()}`}
              className="btn btn-outline-dark w-100"
              style={{ textTransform: "capitalize" }}
            >
              {category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;

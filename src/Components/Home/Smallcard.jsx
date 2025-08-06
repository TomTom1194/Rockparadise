import React from "react";
import { Link } from "react-router-dom";

function SmallCard({ product }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 " >
        <img
          src={product.mainImage}
          alt={`${product.type} ${product.brand}`}
          className="card-img-top"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title" style={{ fontSize: "1.1rem" }}>
            {product.name}
          </h5>
          <p className="card-text text-muted mb-2" style={{ fontSize: "0.95rem" }}>
            ${product.price.toLocaleString()} USD
          </p>
          <Link to={`/product/${product.id}`} className="btn btn-outline-dark btn-sm mt-2">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;

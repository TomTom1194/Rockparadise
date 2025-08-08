import React from "react";
import rockData from "../../data/rock.json";
import SmallCard from "./Smallcard";
import { Link } from "react-router-dom";

function SellSection({ title, ids, filter, products, showViewMoreButton = true }) {
  let itemsToShow = [];

  if (products) {
    itemsToShow = products;
  } else if (ids) {
    itemsToShow = rockData.filter((item) => ids.includes(item.id));
  } else if (filter) {
    itemsToShow = rockData.filter(filter).slice(0, 8);
  }

  return (
    <section className="container  my-5 text-center ">
      <h3 className="border rounded p-2 d-inline-block px-5 mt-3">{title}</h3>
      <div className="row justify-content-center mt-4">
        {itemsToShow.map((item) => (
          <SmallCard key={item.id} product={item} />
        ))}
      </div>
      
       {showViewMoreButton && (
        <div className="mt-1  ">
          <Link
            to={`/viewmore/${title}`}
            className="btn btn-outline-dark"
          >
            View More
          </Link>
        </div>
      )}
    </section>
  );
}

export default SellSection;
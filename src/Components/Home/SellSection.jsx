import React from "react";
import rockData from "../../data/rock.json";
import SmallCard from "./Smallcard";

function SellSection({ title, ids, filter, products }) {
  let itemsToShow = [];

  if (products) {
    itemsToShow = products.slice(0, 4);
  } else if (ids) {
    itemsToShow = rockData.filter((item) => ids.includes(item.id));
  } else if (filter) {
    itemsToShow = rockData.filter(filter).slice(0, 8);
  }

  return (
    <section className="container my-5 text-center">
      <h3 className="border rounded p-2 d-inline-block">{title}</h3>
      <div className="row justify-content-center mt-4">
        {itemsToShow.map((item) => (
          <SmallCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default SellSection;

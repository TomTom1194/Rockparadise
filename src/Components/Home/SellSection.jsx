import React from "react";
import rockData from "../../data/rock.json";
import SmallCard from "./Smallcard";

function SellSection({ title, ids }) {
  // Lọc sản phẩm theo ID được truyền vào
  const selectedProducts = rockData.filter((item) => ids.includes(item.id));

  return (
    <section className="container my-5">
      <h3 className="mb-4 text-center">{title}</h3>
      <div className="row">
        {selectedProducts.map((item) => (
          <SmallCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default SellSection;

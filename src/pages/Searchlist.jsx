import React from "react";
import { useParams } from "react-router-dom";
import rockData from "../data/rock.json";
import SellSection from "../Components/Home/SellSection";

function Searchlist() {
  const { query } = useParams();
  const searchTerm = query?.toLowerCase() || "";

  const filteredData = rockData.filter(item =>
    item.id.toLowerCase().includes(searchTerm) ||
    item.name.toLowerCase().includes(searchTerm) ||
    item.type.toLowerCase().includes(searchTerm) ||
    item.color.toLowerCase().includes(searchTerm) ||
    item.brand.toLowerCase().includes(searchTerm) ||
    item.productType.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container my-5">
      {filteredData.length > 0 ? (
        <SellSection
          title="Search Results"
          products={filteredData}
          showViewMoreButton={false}
        />
      ) : (
        <h4 className="text-center mt-5 text-muted">No Results Found</h4>
      )}
    </div>
  );
}

export default Searchlist;

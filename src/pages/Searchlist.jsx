import React,  { useState } from "react";
import { useParams } from "react-router-dom";
import rockData from "../data/rock.json";
import SellSection from "../Components/Home/SellSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Searchlist() {
  const { query } = useParams();
  const searchTerm = query?.toLowerCase() || "";
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  

  const filteredData = rockData.filter(item =>
    item.id.toLowerCase().includes(searchTerm) ||
    item.name.toLowerCase().includes(searchTerm) ||
    item.type.toLowerCase().includes(searchTerm) ||
    item.color.toLowerCase().includes(searchTerm) ||
    item.brand.toLowerCase().includes(searchTerm) ||
    item.productType.toLowerCase().includes(searchTerm)
  );

  const [sortOrder, setSortOrder] = useState('default');

  let sortedProducts = [...filteredData];
if (sortOrder === 'low-to-high') {
    sortedProducts.sort((a, b) => a.price - b.price);
} else if (sortOrder === 'high-to-low') {
    sortedProducts.sort((a, b) => b.price - a.price);
}
  return (
    <div className="container my-5">
        <div className="d-flex justify-content-end align-items-center mb-4">
            <select
                className="form-select w-auto"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                data-aos="fade-left"
            >
                <option value="default">Default Sort</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
            </select>
        </div>

        <div data-aos="fade-up">

      {filteredData.length > 0 ? (
          <SellSection
          title="Search Results"
          products={sortedProducts}
          showViewMoreButton={false}
          />
        ) : (
            <h4 className="text-center mt-5 text-muted">No Results Found</h4>
        )}
        </div>
    </div>
  );
}

export default Searchlist;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import rockData from "../data/rock.json"; 
import SellSection from "../Components/Home/SellSection";

function Productdetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const foundProduct = rockData.find((item) => item.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.mainImage);
    }
  }, [id]);

  if (!product) return <div className="text-center my-5">Loading...</div>;

  const relatedProducts = rockData
  .filter(
    (item) =>
      (item.type === product.type) &&
      item.id !== product.id
  )
  .slice(0, 8);

  return (
    <div className="container my-5">
      <div className="row align-items-start">
        {/* Image Section */}
        <div className="col-md-6">
          <div className="mb-3 text-center">
            <img
              src={mainImage}
              alt={product.name}
              className="img-fluid rounded border shadow-sm"
              style={{ maxHeight: "400px", width: "auto", objectFit: "contain" }}
            />
          </div>
          <div className="d-flex gap-3 flex-wrap justify-content-center">
            {[product.mainImage, ...product.images].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="img-thumbnail"
                style={{ width: "100px", height: "100px", objectFit: "cover", cursor: "pointer" }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p><strong>Type:</strong> {product.type}</p>
          <p><strong>Color:</strong> {product.color}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Size:</strong> {product.size} ct</p>
          <p><strong>Price:</strong> ${product.price.toLocaleString()}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>

            {/* Gợi ý liên quan */}
            <SellSection title="You May Also Like" ids={relatedProducts} />
    </div>
  );
}

export default Productdetail;

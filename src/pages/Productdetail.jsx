import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import rockData from "../data/rock.json"; 
import SellSection from "../Components/Home/SellSection";
import commentsData from "../data/comment.json";

function Productdetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const navigate = useNavigate();

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
      (item.type === product.type || item.brand === product.brand) &&
      item.id !== product.id
  )
  .slice(0, 8);


  return (
    <div className="container my-5">
      <button onClick={() => navigate(-1)} className="btn btn-outline-secondary mb-4">
        ← Back
      </button>
      <div className="row align-items-start">
        {/* Image Section */}
        <div className="col-md-6">
          <div className="mb-3 text-center">
            <img
              src={mainImage}
              alt={product.id}
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

            {/*Info section */ }
       <div className="col-md-6">
            <h2 className="mb-4 mt-3" style={{color: "rgb(148, 118, 94)"}}>{product.name}</h2>

        <div className="mb-3">
          <div className="d-flex mb-3">
            <strong className="me-2" style={{ width: "100px" }}>Type:</strong>
            <span>{product.type}</span>
          </div>
           <hr className="my-2" />

          <div className="d-flex mb-3">
            <strong className="me-2" style={{ width: "100px" }}>Color:</strong>
            <span>{product.color}</span>
          </div>
           <hr className="my-2" />

          <div className="d-flex mb-3">
            <strong className="me-2" style={{ width: "100px" }}>Brand:</strong>
            <span>{product.brand}</span>
          </div>
           <hr className="my-2" />

          <div className="d-flex mb-3">
            <strong className="me-2" style={{ width: "100px" }}>Size:</strong>
            <span>{product.size} ct</span>
          </div>
           <hr className="my-2" />

          <div className="d-flex mb-3">
            <strong className="me-2" style={{ width: "100px" }}>Price:</strong>
            <span>${product.price.toLocaleString()}</span>
          </div>
        </div>

        <div className="border rounded p-3 bg-light">
          <h5 className="mb-2">Description</h5>
          <p className="mb-0">{product.description}</p>
        </div>
      </div>

      </div>
            {/* Reccomment*/}
            <SellSection title="You May Also Like" products={relatedProducts} />

        
        {/* Comment Section */}
        <div className="mt-5" style={{margin: "auto", width: "75%"}}>
          <h4 className="mb-4 border-bottom pb-2">Customer Reviews</h4>
          {commentsData.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            commentsData.map((comment) => (
              <div
                key={comment.comment_id}
                className="border rounded p-3 mb-3 shadow-sm bg-light"
                
              >
                <div className="d-flex flex-column mb-2">
                  <strong>{comment.name}</strong>
                  <div>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} style={{ color: i < comment.rating ? "#ffc107" : "#ddd" }}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mb-0">{comment.content}</p>
              </div>
            ))
          )}
        </div>
    </div>
  );
}

export default Productdetail;

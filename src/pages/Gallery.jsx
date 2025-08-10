import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import galleryData from "../data/gallery.json";
import { FaFilter } from "react-icons/fa";

const typegem = [
  "Diamond",
  "Quartz",
  "Ruby",
  "Sapphire",
  "Emerald",
  "Topaz",
  "Amethyst",
  "Opal"
];

function GalleryFullWidth() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const selectedGallery = galleryData.find(
    (item) => item.type.toLowerCase() === type.toLowerCase()
  );

  if (!selectedGallery) {
    return (
      <div className="text-center my-5">
        No gallery found for "{type}".
      </div>
    );
  }

  return (
    <div className=" p-0 mb-5 mt-3">
      {/* Banner */}
      <div
        className=" text-white d-flex align-items-center justify-content-center"
        style={{
          height: "300px",
          backgroundImage: `url(${selectedGallery.mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="fw-bold">{selectedGallery.type}</h1>
      </div>

        {isMobile && (
          <div className="mt-3"
            style={{
              position: "sticky",
              top: 120, 
              zIndex: 1000,
              display: "flex",
              justifyContent: "flex-end",
              padding: "16px 16px",
              background: "#fff" 
            }}
          >
            <button
              className={`btn d-flex align-items-center gap-2 ${
                showFilter ? "btn-dark text-white" : "btn-outline-dark text-dark bg-white"
              }`}
              onClick={() => setShowFilter(!showFilter)}
            >
              Other Gemstone
            </button>
          </div>
        )}
      {/* Category menu */}
      {isMobile ? (
        showFilter && (
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-3 mt-3 "
          style={{
        position: "sticky",
        top: 174, 
        zIndex: 999,
        background: "#fff",
        padding: "24px 0"
      }}>
            {typegem.map((types, index) => {
              const isActive = type?.toLowerCase() === types.toLowerCase();
              return (
                <Link
                  key={index}
                  to={`/gallery/${types}`}
                  className={`btn ${
                    isActive ? "btn-dark text-white" : "btn-outline-dark"
                  }`}
                  style={{
                    textTransform: "capitalize",
                    minWidth: "140px"
                  }}
                  onClick={() => setShowFilter(false)}
                >
                  {types}
                </Link>
              );
            })}
          </div>
        )
      ) : (
        <div className="container d-flex flex-wrap justify-content-center gap-2 mb-5 mt-5">
          {typegem.map((types, index) => {
            const isActive = type?.toLowerCase() === types.toLowerCase();
            return (
              <Link
                key={index}
                to={`/gallery/${types}`}
                className={`btn ${
                  isActive ? "btn-dark text-white" : "btn-outline-dark"
                }`}
                style={{
                  textTransform: "capitalize",
                  width: "200px"
                }}
              >
                {types}
              </Link>
            );
          })}
        </div>
      )}

        

      {/* Title */}
      <div
        className="container text-center mb-3 mt-3"
      >
        <h2 className="fw-light m-0">From Our Gallery of {type}</h2>

        
      </div>


      {/* Grid Gallery */}
      <div
        className="container gallery-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "15px",
          padding: "0 15px",
        }}
      >
        {selectedGallery.images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img
              src={img}
              alt={`${selectedGallery.type} ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryFullWidth;

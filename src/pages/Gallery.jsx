import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import galleryData from "../data/gallery.json";
import { FaFilter, FaTimes } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Mảng chứa các loại đá quý
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
 
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { type } = useParams();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showFilter, setShowFilter] = useState(false);
  
  
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const selectedGallery = galleryData.find(
    (item) => item.type === type
  );

 
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

 
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage("");
  };

  if (!selectedGallery) {
    return (
      <div className="text-center my-5">
        Can't find any Gallery of "{type}".
      </div>
    );
  }

  return (
    <div className=" p-0 mb-5 mt-3">
      {/* Banner */}
      <div
        className="w-100 position-relative"
        style={{
          backgroundImage: `url(${selectedGallery.mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0, 0, 0, 0.4)" }}
        ></div>
        <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100  " style={{padding: "0 10%"}}>
          <h1 className="text-white text-center text-capitalize">{selectedGallery.type} Gallery</h1>
          <p className="text-white text-center">{selectedGallery.smalldesc}</p>
        </div>
      </div>

      {/* Filter cho mobile */}
      <div className="d-flex justify-content-center mt-3 d-md-none"
      style={{
        position: "sticky",
        top: "120px",
        backgroundColor: "#fff",
        padding: "12px 0",
        zIndex: "10"

      }}
      >
        <button
          className={`filter-btn btn d-md-none ${
            showFilter ? "btn-dark text-white" : "btn-outline-dark text-dark"
          }`}
          onClick={() => setShowFilter(!showFilter)}
        >
          <FaFilter className="me-2" />
          Filter
        </button>
      </div>

      {showFilter && (
        <div className="d-md-none p-3 shadow-sm bg-white border-bottom"   style={{
        position: "sticky",
        top: "182px",
        backgroundColor: "#fff",
        padding: "12px 0",
        zIndex: "9"

      }}>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {typegem.map((types, index) => {
              const isActive = types === type;
              return (
                <Link
                  key={index}
                  to={`/gallery/${types}`}
                  className={`btn ${
                    isActive ? "btn-dark text-white" : "btn-outline-dark"
                  }`}
                  style={{
                    textTransform: "capitalize",
                    width: "45%"
                  }}
                  onClick={() => setShowFilter(false)}
                >
                  {types}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Title */}
      <div
        className="container text-center mb-3 mt-3"
        data-aos="fade-up"
      >
        <h2 className="fw-light m-0">From Our {type}'s' Gallery</h2>
      </div>

      {/* Description */}
      <div className="container text-center mb-3 mt-3" data-aos="fade-up" >
        <p className="mt-2 text-muted">{selectedGallery.description}</p>
      </div>


      {/* Desktop Filter */}
      <div
        className="container d-none d-md-flex flex-wrap gap-3 justify-content-center mb-4"
        data-aos="fade-up"
      >
        {typegem.map((types, index) => {
          const isActive = types === type;
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
          <div key={index} className="gallery-item" onClick={() => handleImageClick(img)} data-aos="fade-up">
            <img
              src={img}
              alt={`${selectedGallery.type} ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
              }}
              className="shadow-sm"
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 2000,
            padding: "20px"
          }}
          onClick={handleCloseModal}
        >
          <div className="position-relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="btn btn-light position-absolute top-0 end-0 m-3"
              onClick={handleCloseModal}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Full-sized"
              className="img-fluid rounded"
              style={{ maxHeight: "90vh", maxWidth: "90vw" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryFullWidth;

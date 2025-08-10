import React from "react";
import Slider from "react-slick";
import galleryData from "../../data/gallery.json";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function GallerySection() {
  const itemsToShow = galleryData.slice(0, 8);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Desktop
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section
      className="p-5 mt-5 position-relative "
      style={{ backgroundColor: "rgba(183, 174, 155, 1)",
       }}
    >
      <h2
        className="h2 text-center text-white mb-3 "
        style={{ fontWeight: "100" }}
      >
        Explore Our Gallery
      </h2>

      <Slider {...settings} className="mb-3">
        {itemsToShow.map((item, index) => (
          <div key={index} className="px-2">
            <div className="card" style={{ border: "none" }}>
              <Link to={`/gallery/${item.type}`}>
                <div className="position-relative w-100 h-100 overflow-hidden rounded" >
                  <img
                    src={item.mainImage}
                    alt={item.type}
                    className="d-block w-100 h-100"
                    style={{
                      aspectRatio: "16 / 9",
                      objectFit: "cover",
                    //   borderRadius: "8px"
                    }}
                  />
                  <div
                    className="position-absolute w-100 h-100 top-0 start-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)"
                    }}
                  ></div>
                  <div
                    className="position-absolute bottom-0 start-0 p-4 text-white d-flex flex-column align-items-start w-100"
                    style={{ gap: "0px" }}
                  >
                    <h3 className="h5 fw-semibold">{item.type}</h3>
                    <p
                      className="opacity-75 mb-0"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}
                    >
                      {item.smalldesc}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default GallerySection;

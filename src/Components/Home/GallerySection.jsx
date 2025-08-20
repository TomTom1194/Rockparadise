import React from 'react';
import galleryData from '../../data/gallery.json';
import { Link } from 'react-router-dom';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function GallerySection() {
  const itemsToShow = galleryData.slice(0, 8);

  return (
    <section className="p-5 position-relative" style={{ backgroundColor: "rgba(183, 174, 155, 1)" }}>
      <h2 className="h2 text-center text-white mb-3" style={{ fontWeight: "100" }}>
        Explore Our Gallery
      </h2>

      <Swiper
        spaceBetween={20}
        grabCursor={true}
        pagination={{ el: '.custom-pagination',clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },   // mobile
          768: { slidesPerView: 2 },   // tablet
          1024: { slidesPerView: 4 },  // desktop
        }}
      >
        {itemsToShow.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card " style={{ width: '100%', border: "none" }}>
              <Link to={`/gallery/${item.type}`}>
                <div className="position-relative w-100 h-100 overflow-hidden rounded">
                  <img
                    src={item.mainImage}
                    alt={item.type}
                    className="d-block w-100 h-100"
                    style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                  />
                  <div
                    className="position-absolute w-100 h-100 top-0 start-0"
                    style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)' }}
                  ></div>
                  <div
                    className="position-absolute bottom-0 start-0 p-4 text-white d-flex flex-column align-items-start w-100"
                    style={{ gap: "0px" }}
                  >
                    <h3 className="h5 fw-semibold">{item.type}</h3>
                    <p
                      className="opacity-75 mb-0"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.smalldesc}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-3"></div>
    </section>
  );
}

export default GallerySection;

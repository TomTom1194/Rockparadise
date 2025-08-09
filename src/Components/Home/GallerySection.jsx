import React from 'react';
import galleryData from '../../data/gallery.json';
import { Link } from 'react-router-dom';

function GallerySection() {
    // We will display the first 8 items from the galleryData
    const itemsToShow = galleryData.slice(0, 8);
    const itemsPerSlide = 4; // Số lượng card hiển thị trên mỗi slide
    const totalSlides = Math.ceil(itemsToShow.length / itemsPerSlide);

    return (
        <section className=" p-5 mt-5 position-relative" style={{ backgroundColor: "rgb(153, 133, 112)" }}>
            <h2 className="h2 text-center text-white mb-3" style={{ fontWeight: "100" }}>
                Explore Our Gallery
            </h2>

            <div id="galleryCarousel" className="carousel slide mb-4" data-bs-interval="false">
                <div className="carousel-inner">
                    {[...Array(totalSlides)].map((_, slideIndex) => (
                        <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}>
                            <div className="d-flex justify-content-center">
                                {itemsToShow.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((item, cardIndex) => (
                                    <div className="card mx-2" style={{ width: '300px', minWidth: '300px' }} key={cardIndex}>
                                        <Link to={`/gallery/${item.type}`}>
                                            <div className="position-relative w-100 h-100 overflow-hidden">
                                                {/* Card background image */}
                                                <img
                                                    src={item.mainImage}
                                                    alt={item.type}
                                                    className="d-block w-100 h-100"
                                                    style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                                                />
                                                {/* Overlay with gradient for better text visibility */}
                                                <div
                                                    className="position-absolute w-100 h-100 top-0 start-0"
                                                    style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)' }}
                                                ></div>
                                                {/* Text content */}
                                                <div className="position-absolute bottom-0 start-0 p-4 text-white d-flex flex-column align-items-start w-100" style={{ gap: "12px" }}>
                                                        <h3 className="h5 fw-semibold">{item.type}</h3>
                                                        <p className="opacity-75 mb-0" style={{
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: '2',
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis'
                                                        }}>
                                                            {item.smalldesc}
                                                        </p>
                                                    </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Previous button */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#galleryCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                {/* Next button */}
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#galleryCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default GallerySection;

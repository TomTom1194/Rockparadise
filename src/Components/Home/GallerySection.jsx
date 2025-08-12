// src/Components/GallerySection.jsx
import React from 'react';
import galleryData from '../../data/gallery.json';
import { Link } from 'react-router-dom';
// import AOS from 'aos'; // Comment out AOS if not needed
// import 'aos/dist/aos.css'; // Comment out AOS if not needed

/**
 * Component to display a section of gallery items using a Bootstrap 5 carousel.
 * Renders a horizontally scrollable list of cards with navigation controls.
 * @returns {JSX.Element} The GallerySection component with a Bootstrap carousel.
 */
function GallerySection() {
    const itemsToShow = galleryData.slice(0, 8);
    const itemsPerSlide = 4; // Display 4 items on desktop
    const totalSlides = Math.ceil(itemsToShow.length / itemsPerSlide);

    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000,
    //         once: true,
    //     });
    // }, []);

    return (
        <section className="container p-5 my-5 position-relative" style={{ backgroundColor: "rgba(183, 174, 155, 1)" }}>
            <h2 className="h2 text-center text-white mb-3" style={{ fontWeight: "100" }}>
                Explore Our Gallery
            </h2>

            {/* Desktop carousel with 4 cards per slide */}
            <div id="desktopGalleryCarousel" className="carousel slide d-none d-md-block" data-bs-interval="false">
                <div className="carousel-inner">
                    {[...Array(totalSlides)].map((_, slideIndex) => (
                        <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}>
                            <div className="d-flex justify-content-center">
                                {itemsToShow.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((item, cardIndex) => (
                                    <div className="card mx-2" style={{ width: '300px', minWidth: '300px', border: "none" }} key={cardIndex}>
                                        <Link to={`/gallery/${item.type}`}>
                                            <div className="position-relative w-100 h-100 overflow-hidden rounded">
                                                <img
                                                    src={item.mainImage}
                                                    alt={item.type}
                                                    className="d-block w-100 h-100"
                                                    style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                                                />
                                                <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)' }}></div>
                                                <div className="position-absolute bottom-0 start-0 p-4 text-white d-flex flex-column align-items-start w-100" style={{ gap: "0px" }}>
                                                    <h3 className="h5 fw-semibold">{item.type}</h3>
                                                    <p className="opacity-75 mb-0" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
                <button className="carousel-control-prev" type="button" data-bs-target="#desktopGalleryCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#desktopGalleryCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Mobile carousel with 1 card per slide */}
            <div id="mobileGalleryCarousel" className="carousel slide d-block d-md-none" data-bs-interval="false">
                <div className="carousel-inner">
                    {itemsToShow.map((item, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="d-flex justify-content-center">
                                <div className="card mx-2 w-100" style={{ minWidth: '100%', border: "none" }}>
                                    <Link to={`/gallery/${item.type}`}>
                                        <div className="position-relative w-100 h-100 overflow-hidden rounded">
                                            <img
                                                src={item.mainImage}
                                                alt={item.type}
                                                className="d-block w-100 h-100"
                                                style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                                            />
                                            <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)' }}></div>
                                            <div className="position-absolute bottom-0 start-0 p-4 text-white d-flex flex-column align-items-start w-100" style={{ gap: "0px" }}>
                                                <h3 className="h5 fw-semibold">{item.type}</h3>
                                                <p className="opacity-75 mb-0" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    {item.smalldesc}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mobileGalleryCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mobileGalleryCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default GallerySection;

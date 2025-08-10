import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div id="heroCarousel"
        className="carousel slide full-width-carousel"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        >
      <div className="carousel-inner">
        
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1633934542430-0905ccb5f050?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Gemstone 1" style={{ height: "80vh", objectFit: "cover" }} />
          <div className="carousel-caption custom-caption-bottom ">
            <h2>Discover Rare Gemstones</h2>
            <p>Elegant. Timeless. Unique.</p>
            <Link className="btn btn-light" to="/viewmore/BestSeller">Explore</Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1585960622850-ed33c41d6418?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Gemstone 2" style={{ height: "80vh", objectFit: "cover" }} />
          <div className="carousel-caption custom-caption-bottom c">
            <h2>Luxury Jewelry Collection</h2>
            <p>Crafted with passion and precision.</p>
            <Link className="btn btn-light" to="/viewmore/Promotion">Explore</Link>
          </div>
        </div>

      </div>

      {/* Navigation buttons */}
      <button className="carousel-control-prev custom-carousel-btn " type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next custom-carousel-btn" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default Hero;

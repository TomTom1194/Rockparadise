import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink,useLocation } from 'react-router-dom';
import logo from '../images/logo.png'; 


function Footer() {
  const location = useLocation();
  const isCategoryActive = location.pathname.startsWith("/productlist");
  const isGalleryActive = location.pathname.startsWith("/gallery");
    const [currentDateTime, setCurrentDateTime] = useState('');
  const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setCurrentDateTime(now.toLocaleDateString('vi-VN', options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

    useEffect(() => {
    let count = localStorage.getItem('visitorCount');
    if (count) {
      count = parseInt(count) + 1;
    } else {
      count = 1;
    }
    localStorage.setItem('visitorCount', count);
    setVisitorCount(count);
  }, []);

  return (
    <footer className="text-dark pt-4 pb-4 " style={{ backgroundColor: "#e8e4d9" }}>
      <div className="container py-3">
        <div className="row">
          {/* Logo + Links */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-4 mb-4 text-center text-lg-start">
            <img src={logo} alt="Logo" style={{ maxWidth: '200px' }} className="img-fluid" />
            <div className="d-flex justify-content-center justify-content-lg-start mt-3 gap-3" style={{ fontSize: "2rem" }}>
              <a href="https://facebook.com" className="text-dark"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" className="text-dark"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="text-dark"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="text-dark"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          
          <ul className="d-flex flex-column gap-3 col-12 col-sm-6 col-md-3 col-lg-4 mb-4 text-center text-md-start list-unstyled" style={{ fontWeight: "300", fontSize: "20px" }}>
            <li><NavLink to="/contact" className="text-dark text-decoration-none">Contact Us</NavLink></li>
            <li><NavLink to="/about" className="text-dark text-decoration-none">About Us</NavLink></li>
            <li><NavLink to="/faq" className="text-dark text-decoration-none">FAQ</NavLink></li>
            <li>
              <NavLink 
                to="/productlist/Diamond"
                className={`text-dark text-decoration-none ${isCategoryActive ? "active" : ""}`}
              >
                Category
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery/Diamond"
                className={`text-dark text-decoration-none ${isGalleryActive ? "active" : ""}`}
              >
                Gallery
              </NavLink>
            </li>
          </ul>

          {/* New Contact Info */}
          <div className="col-12 col-md-6 col-lg-4  text-center text-md-start">
            <h5 style={{ fontWeight: "300" }}>Location & Contact</h5>
            <ul className="list-unstyled" >
              <li className='custom-li'><strong><i class="fa-solid fa-location-dot me-3 mb-3" style={{fontSize: "1.5rem"}}></i></strong> 88 Lê Lợi, District 1, HCMC <a href="https://www.google.com/maps/place/88+L%C3%AA+L%E1%BB%A3i,+B%E1%BA%BFn+Ngh%C3%A9,+Qu%E1%BA%ADn+1,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.773415,106.702758,17z/data=!3m1!4b1!4m6!3m5!1s0x31752f4410972411:0x51c784e27f6c3822!8m2!3d10.7734097!4d106.7053329!16s%2Fg%2F11c6k2g5p4?hl=vi-VN&entry=ttu" target="_blank" rel="noopener noreferrer" className=" text-decoration-none">Google Map</a></li>
              <li className='custom-li'><strong><i class="fa-solid fa-phone me-3 mb-3" style={{fontSize: "1.5rem"}}></i></strong> +84 909 888 999</li>
              <li className='custom-li'><strong><i class="fa-solid fa-envelope me-3 mb-3" style={{fontSize: "1.5rem"}}></i></strong> concierge@rockparadise.vn</li>
              <li className='custom-li'>        
                {/* Visitor and Date/Time Info */}
              <div className="row mt-4">
                <div className="col-12 ">
                  <p className="mb-1" style={{ fontSize: "0.9rem", color: "#666" }}>
                    Date and Time: {currentDateTime}
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#666" }}>
                    Visitors: {visitorCount}
                  </p>
                </div>
              </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
            <div className="container-fluid text-center mt-3 border-top pt-3" style={{ fontSize: "0.8rem", color: "#666" }}>
              © 2024 Rock Paradise. No Copyright.
            </div>

    </footer>
  );
}

export default Footer;

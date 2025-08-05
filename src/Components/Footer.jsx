import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; // điều chỉnh path nếu khác

function Footer() {
  return (
    <footer className=" text-dark pt-4 pb-2 mt-5" style={{backgroundColor: "#e8e4d9"}}>
      <div className="container">
        <div className="row">

          {/* Logo + Links */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-4 mb-4 text-center text-lg-start">
            <img src={logo} alt="Logo" style={{ maxWidth: '200px' }} className="img-fluid" />
          </div>
            <ul className="d-flex flex-column gap-3  col-12 col-sm-6 col-md-3 col-lg-4 mb-4 text-center text-md-start list-unstyled" style={{fontWeight: "300", fontSize: "20px"}}>
              <li><Link to="/contact" className="text-dark text-decoration-none ">Contact Us</Link></li>
              <li><Link to="/about" className="text-dark text-decoration-none ">About Us</Link></li>
              <li><Link to="/faq" className="text-dark text-decoration-none ">FAQ</Link></li>
              <li><Link to="/category" className="text-dark text-decoration-none ">Category</Link></li>
              <li><Link to="/gallery" className="text-dark text-decoration-none ">Gallery</Link></li>
            </ul>

          {/* Google Map */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <h5 className=" text-md-start" style={{fontWeight: "300"}}>Location</h5>
            <div className="ratio ratio-16x9">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.482336187042!2d106.70042401533415!3d10.776897692322975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f4d4706d3%3A0x58a1a577cb8506e3!2zUGFya2xhbmcgQm9va3MgLSBIb8OgIFRodeG6rW4gUXXDoW4gOCwgVGjhuq9uZyBQaOG7kSBIw6AgQ8aw!5e0!3m2!1svi!2s!4v1690697475652!5m2!1svi!2s"
                width="100%"
                height="50%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
        <div className="text-center text-muted small">
          © {new Date().getFullYear()} Rockparadise. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

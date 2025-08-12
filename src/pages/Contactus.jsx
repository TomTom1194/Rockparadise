import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fb from '../images/fb-icon.png';
import x from '../images/twitter-icon.png';
import insta from '../images/insta-icon.png';
import linkedin from '../images/linkedin-icon.webp';

function ContactUs() {
useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

// function ContactUs()  {
  return (
    <div className=" py-4">
    {/* Header Section */}
     <section
        className="text-center mb-5 text-white d-flex flex-column align-items-center justify-content-center position-relative"
        style={{
          backgroundImage: "url('https://i.pinimg.com/1200x/61/3c/4d/613c4d2ea564b07bd0e6f213ab535e8f.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          minHeight: "70vh",
          padding: "40px"
        }}
        >
          <div
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                        zIndex:"0"
                    }}
          ></div>
          <div className="position-relative z-1 p-3">
          <h1 className="display-4 fw-bold" data-aos="fade-up">
            Contact Us
          </h1>
          <p className="lead fw-normal mt-3" data-aos="fade-up" data-aos-delay="200">
            Reach out to discover the perfect piece that tells your story.
          </p>
        </div>

      </section>


      <div className='container overflow-hidden'>
        <section className="row mb-5 py-5 justify-content-center align-items-start">
        <div className="col-md-6 col-lg-5 mb-4 mb-md-0 d-flex flex-column justify-content-center" data-aos="fade-right">
          <h3>Get in Touch</h3>
          <p>
            Experience personalized service tailored to your desires. From bespoke designs to gemstone consultations, our experts are ready to guide you every step of the way.
          </p>
          <ul className="list-unstyled">
            <li><strong><i class="fa-solid fa-location-dot me-3 mb-3" style={{fontSize: "1.5rem"}}></i></strong> 88 Lê Lợi, District 1, HCMC</li>
            <li><strong><i class="fa-solid fa-phone me-3 mb-3" style={{fontSize: "1.5rem"}}></i></strong> +84 909 888 999</li>
            <li><strong><i class="fa-solid fa-envelope me-3 mb-3" style={{fontSize: "1.5rem"}}></i></strong> concierge@rockparadise.vn</li>
          </ul>
          <div className="d-flex align-items-center gap-3 mt-3">
            <a href="#"><img src={fb} alt="facebook" style={{width:"40px", height: "40px", objectFit:"cover"}}/></a>
            <a href="#"><img src={x} alt="twitter" style={{width:"40px", height: "48px", objectFit:"cover"}}/></a>
            <a href="#"><img src={insta} alt="instagram" style={{width:"35px", height: "40px", objectFit:"cover"}}/></a>
            <a href="#"><img src={linkedin} alt="linkedin" style={{width:"60px", height: "40px", objectFit:"cover"}}/></a>
          </div>
        </div>

        <div className="col-md-6 col-lg-5 mb-4 mb-md-0 d-flex flex-column justify-content-center" data-aos="fade-left">
          <h3>Send a Message</h3>
          <form className="d-flex flex-column gap-3">
            <input type="text" className="form-control" placeholder="Name" required />
            <input type="email" className="form-control" placeholder="Email Address" required />
            <textarea className="form-control" placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-addtocart">Submit</button>
          </form>
          <p className="mt-3 text-muted ">
            We value your privacy. Your message and personal details will be kept confidential and used solely to assist you.
            For more information, please review our <a href="#">Privacy Statement</a>.
          </p>
        </div>
      </section>
      </div>
        
        <div className='container'>
        <section className="mb-5"  data-aos="fade-up">
          <iframe
            title="RockParadise Boutique Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1234567890123!2d106.7000!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3e12345678%3A0x1234567890123456!2s88+Lê+Lợi,+District+1,+HCMC!5e0!3m2!1sen!2s!4v1234567890123"
            width="100%"
            height="300"
            style={{ border: "2px solid black", borderRadius: "20px" }}
            allowFullScreen=""
            loading="lazy"
            
        ></iframe>
        </section>

        </div>
    </div>
  );
};

export default ContactUs;
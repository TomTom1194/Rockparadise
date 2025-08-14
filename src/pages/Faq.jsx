import React from "react";
import faqData from "../data/faq.json";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Faq() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" data-aos="fade-up">Frequently Asked Questions</h2>

      <div className="accordion" id="faqAccordion">
        {faqData.map((item, index) => (
          <div
            className="accordion-item mb-3 shadow-sm"
            key={item.id}
            style={{ borderRadius: "8px", overflow: "hidden" }}
            data-aos="fade-up" data-aos-delay="200"
          >
            <h2 className="accordion-header" id={`heading-${item.id}`}>
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${item.id}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse-${item.id}`}
                style={{ fontWeight: "500" }}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`collapse-${item.id}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`heading-${item.id}`}
              data-bs-parent="#faqAccordion"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: "#f1f3f5", 
                  color: "#333",
                  fontSize: "0.95rem",
                }}
              >
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

       <div className="text-center mt-5" >
        <h2>Still have questions?</h2>
        <p>Feel free to reach out to us for more information.</p>
        <Link to="/contact" className="btn btn-addtocart px-4 py-2" style={{fontSize: "20px"}}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Faq;

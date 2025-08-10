import React from 'react';
import { Link } from 'react-router-dom';

function ContactUs()  {
  return (
    <div className="container py-4">
      <section className="text-center mb-5">
        <h2>Contact Us</h2>
        <p>Reach out to discover the perfect piece that tells your story.</p>
      </section>

      <section className="row mb-5">
        <div className="col-md-6 mb-4">
          <h3>Get in Touch</h3>
          <p>
            Experience personalized service tailored to your desires. From bespoke designs to gemstone consultations, our experts are ready to guide you every step of the way.
          </p>
          <ul className="list-unstyled">
            <li><strong>📍 Boutique:</strong> 88 Lê Lợi, District 1, HCMC</li>
            <li><strong>📞 Concierge:</strong> +84 909 888 999</li>
            <li><strong>📧 Email:</strong> concierge@rockparadise.vn</li>
          </ul>
          <div className="d-flex gap-3 mt-3">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>
        </div>

        <div className="col-md-6">
          <h3>Send a Message</h3>
          <form className="d-flex flex-column gap-3">
            <input type="text" className="form-control" placeholder="Name" required />
            <input type="email" className="form-control" placeholder="Email Address" required />
            <textarea className="form-control" placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <p className="mt-3 text-muted small">
            We value your privacy. Your message and personal details will be kept confidential and used solely to assist you.
            For more information, please review our <a href="/privacy">Privacy Statement</a>.
          </p>
        </div>
      </section>

      <section className="mb-5">
        <iframe
          title="RockParadise Boutique Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1234567890123!2d106.7000!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3e12345678%3A0x1234567890123456!2s88+Lê+Lợi,+District+1,+HCMC!5e0!3m2!1sen!2s!4v1234567890123"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  [...document.querySelectorAll('*')].forEach(el => {
  if (el.scrollWidth > document.documentElement.clientWidth) {
    console.log('Overflow element:', el, 'scrollWidth:', el.scrollWidth, 'clientWidth:', el.clientWidth);
  }
});

  return (
    <div className="mb-5">
      {/* Header Section */}
      <section
        className="text-center mb-5 text-white d-flex flex-column align-items-center justify-content-center position-relative p-3 p-md-5"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/4b/77/fc/4b77fccc10c64959324c6c8634847573.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          minHeight: '70vh',
        }}
      >
        <div
          className="position-absolute w-100 h-100 top-0 start-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
            zIndex: '0',
          }}
        ></div>
        <h1 className="display-5 fw-bold" style={{ zIndex: '1' }} data-aos="fade-up">
          All Jewels Living with Art
        </h1>
        <p className="lead" style={{ maxWidth: '800px', zIndex: '1' }} data-aos="fade-up" data-aos-delay="200">
          Cube stories unfold in sculpted gold. At Rock Paradise, every piece is
          a quiet dialogue between timeless elegance and contemporary soul.
        </p>
      </section>

      {/* Brand Story */}
      <div className="container overflow-hidden">
        <section className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <h2 className="fw-bold">Our Story</h2>
            <p>
              Conceived in the quiet elegance of Vienna’s old quarters, Rock
              Paradise is a celebration of timeless beauty — where natural stone
              meets the soul of European craftsmanship.
            </p>
            <p>
              Each piece is more than adornment; it is a whispered narrative of
              heritage, emotion, and artistry. We craft with intention, allowing
              form and texture to speak in subtle tones — never loud, always
              profound.
            </p>
            <p>
              Inspired by the interplay of shadow and light, our designs embrace
              contrast: the raw and the refined, the bold and the delicate, the
              eternal and the ephemeral.
            </p>
            <p>
              At Rock Paradise, we believe luxury lies not in excess, but in
              essence. Our jewelry is created for those who seek meaning in
              beauty — and beauty in meaning.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center" data-aos="fade-left">
            <img
              src="https://i.pinimg.com/736x/b8/56/5d/b8565de877bbf2406bd9a8b1eadbada7.jpg"
              alt="Rock Paradise Atelier"
              className="img-fluid rounded shadow-lg mt-4 mt-md-0"
            />
          </div>
        </section>
      </div>

      {/* Swiss Essence */}
      <div className="container overflow-hidden">
        <section className="row align-items-start mb-5">
          <div className="col-md-6 order-md-2" data-aos="fade-left">
            <h2 className="fw-bold">Swiss Essence</h2>
            <p>
              At Rock Paradise, the Swiss essence is not merely a signature — it
              is a philosophy. Rooted in the purity of alpine landscapes and the
              legacy of precision craftsmanship, our creations embody a quiet
              sophistication that transcends time.
            </p>
            <p>
              Each piece is shaped with meticulous care, echoing the clarity of
              glacial waters and the harmony of Swiss design. We draw
              inspiration from nature’s geometry and the serenity of mountain
              air, crafting jewelry that feels both elemental and eternal.
            </p>
            <p>
              To wear Rock Paradise is to carry a fragment of Switzerland’s soul
              — refined, resilient, and effortlessly elegant.
            </p>
          </div>
          <div className="col-md-6 order-md-1" data-aos="fade-right">
            <img
              src="https://i.pinimg.com/1200x/77/1d/3b/771d3bd0a99a5bccd424c0171f40dfcf.jpg"
              alt="Swiss Essence Rock Paradise"
              className="img-fluid rounded shadow-lg mt-4 mt-md-0"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import tan from '../images/tan.jpg'
import huy from '../images/huy.jpg'
import tuan from '../images/tuan.jpg'

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

//   [...document.querySelectorAll('*')].forEach(el => {
//   if (el.scrollWidth > document.documentElement.clientWidth) {
//     console.log('Overflow element:', el, 'scrollWidth:', el.scrollWidth, 'clientWidth:', el.clientWidth);
//   }
// });

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
      <div className="container ">
        <section className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <h2 className="fw-bold">Tang Thien Tan</h2>
            <p>
             <strong>Student1634690</strong>
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
              src={tan}
              alt="Rock Paradise Atelier"
              className="img-fluid rounded shadow-lg mt-4 mt-md-0"
            />
          </div>
        </section>
      </div>

      {/* Swiss Essence */}
      <div className="container ">
        <section className="row align-items-start mb-5">
          <div className="col-md-6 order-md-2" data-aos="fade-left">
            <h2 className="fw-bold">Phan Minh Huy</h2>
            <p>
              <strong>Student1634681</strong><br /> <br />
              — it
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
          <div className="col-md-6 d-flex justify-content-center" data-aos="fade-right">
            <img
              src={huy}
              alt="Swiss Essence Rock Paradise"
              className="img-fluid rounded shadow-lg mt-4 mt-md-0"
              style={{height:"400px"}}
            />
          </div>
        </section>
      </div>

            <div className="container ">
        <section className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <h2 className="fw-bold">Pham Quoc Tuan</h2>
            <p>
             <strong>Student1637695</strong>
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
              src={tuan}
              alt="Rock Paradise Atelier"
              className="img-fluid rounded shadow-lg mt-4 mt-md-0"
            />
          </div>
        </section>
      </div>

    </div>
  );
}

export default AboutUs;

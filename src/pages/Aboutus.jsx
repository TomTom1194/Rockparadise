import React from 'react';
import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react';
import SellSection from "../Components/Home/SellSection";

const bestSellerData = {
  title: "Our Bestsellers",
  ids: ["J001", "J003", "J005", "J007", "GEM001", "GEM003", "GEM005", "GEM007"]
};
// const AboutUs = () => {
// useEffect(() => {
//   AOS.init({ duration: 1000, once: true });
// }, []);
function AboutUs()  {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <section className="text-center mb-5">
        <h1 className="display-5 fw-bold">All Jewels Living with Art</h1>
        <p className="lead">
          Cube stories unfold in sculpted gold. At Rock Paradise, every piece is a quiet dialogue between timeless elegance and contemporary soul.
        </p>
        {/* <Link to="/category" className="btn btn-dark mt-3">View Category</Link> */}
      </section>

      {/* Brand Story */}
      <section className="row align-items-center mb-5">
  <div className="col-md-6" data-aos="fade-right">
    <h2 className="fw-bold">Our Story</h2>
    <p>
      Conceived in the quiet elegance of Vienna’s old quarters, Rock Paradise is a celebration of timeless beauty — where natural stone meets the soul of European craftsmanship.
    </p>
    <p>
      Each piece is more than adornment; it is a whispered narrative of heritage, emotion, and artistry. We craft with intention, allowing form and texture to speak in subtle tones — never loud, always profound.
    </p>
    <p>
      Inspired by the interplay of shadow and light, our designs embrace contrast: the raw and the refined, the bold and the delicate, the eternal and the ephemeral.
    </p>
    <p>
      At Rock Paradise, we believe luxury lies not in excess, but in essence. Our jewelry is created for those who seek meaning in beauty — and beauty in meaning.
    </p>
  </div>
  <div className="col-md-6" data-aos="fade-left">
    <img src="/images/rock-paradise-elegance.jpg" alt="Rock Paradise Atelier" className="img-fluid rounded" />
  </div>
</section>
      <section className="mb-5" data-aos="fade-up">
  {/* <SellSection title={bestSellerData.title} ids={bestSellerData.ids} /> */}
</section>

      <section className="row align-items-center mb-5">
  <div className="col-md-6 order-md-2" data-aos="fade-left">
    <h2 className="fw-bold">Swiss Essence</h2>
    <p>
      At Rock Paradise, the Swiss essence is not merely a signature — it is a philosophy. Rooted in the purity of alpine landscapes and the legacy of precision craftsmanship, our creations embody a quiet sophistication that transcends time.
    </p>
    <p>
      Each piece is shaped with meticulous care, echoing the clarity of glacial waters and the harmony of Swiss design. We draw inspiration from nature’s geometry and the serenity of mountain air, crafting jewelry that feels both elemental and eternal.
    </p>
    <p>
      To wear Rock Paradise is to carry a fragment of Switzerland’s soul — refined, resilient, and effortlessly elegant.
    </p>
  </div>
  <div className="col-md-6 order-md-1" data-aos="fade-right">
    <img src="/images/swiss-essence.jpg" alt="Swiss Essence Rock Paradise" className="img-fluid rounded" />
  </div>
</section>
    </div>
  );
};

export default AboutUs;
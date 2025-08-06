import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contactus";
import About from "./pages/Aboutus";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Category from "./Components/Category";
import logo from "./images/logo.png"; 
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductDetail from "./pages/Productdetail";

function App() {
  return (
      <>
      <Navbar />

      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
        </Routes>
      </main>

      <Footer />
    </>

  );
}

export default App;

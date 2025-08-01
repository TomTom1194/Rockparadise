import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contactus";
import About from "./pages/Aboutus";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Category from "./Components/Category";

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#ffffffff' }}>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px' }}>About Us</Link>
        <Link to="/contact" style={{ margin: '0 10px' }}>Contact Us</Link>
        <Link to="/faq" style={{ margin: '0 10px' }}>FAQ</Link>
        <Link to="/gallery" style={{ margin: '0 10px' }}>Gallery</Link>
        <Link to="/category" style={{ margin: '0 10px' }}>Category</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;

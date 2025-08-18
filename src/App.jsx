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
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import PaymentDetail from "./pages/PaymentDetail";
import PaymentCongrat from "./pages/PaymentCongrat";
import Productlist from "./pages/Productlist";
import ViewmoreList from "./pages/ViewmoreList";
import Searchlist from "./pages/Searchlist";

function App() {
  return (
      <CartProvider>
      <Navbar />

      <main style={{backgroundColor: "#ffff"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery/:type" element={<Gallery />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentDetail/>} />
          <Route path="/payment-success" element={<PaymentCongrat />} />
          <Route path="/productlist/:category" element={<Productlist />} />
          <Route path="/viewmore/:title" element={<ViewmoreList />} />
           <Route path="/searchlist/:query" element={<Searchlist />} />
           <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </CartProvider>

  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQS";
import "./styles/banner.css";
import CheckoutModal from "./components/CheckoutModal"; // Import CheckoutModal
import { useCart } from "./context/CartContext";

const App = () => {
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const { cart } = useCart();

  return (
    <Router>
      <NavBar />
      <div
        style={{
          width: "100%",
          height: "300px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bioxcel-210e1.firebasestorage.app/o/biohack.jpeg?alt=media&token=ea83fd2d-cb52-4471-836d-c86084b7486f" // Replace with the Firestore URL
          alt="Biohack Image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />

      {/* Checkout Modal */}
      {cart.length > 0 && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setCheckoutOpen(false)}
        />
      )}
    </Router>
  );
};

export default App;

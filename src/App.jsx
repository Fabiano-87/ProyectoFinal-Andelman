import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQS";
import "./styles/banner.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="w-full h-80 relative overflow-hidden">
        <img
          src="/assets/img/biohack.jpeg"
          alt="Biohack Image"
          className="w-full h-full object-cover object-center"
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
    </Router>
  );
};

export default App;

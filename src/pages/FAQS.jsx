import React from "react";
import "../styles/pages.css";

const FAQs = () => {
  return (
    <main>
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>FAQs</li>
        </ul>
      </nav>

      {/* FAQs Section */}
      <section className="faqs-container">
        <h1 className="prod-name">FAQs</h1>
        <div className="faqs-content">
          <img
            className="faqs-image"
            src="/assets/img/mainpic.png"
            alt="Biohack"
          />
          <p className="faqs-description">
            Biohacking is the practice of employing methods drawn from fields
            like biology, genetics, neuroscience, and nutrition to enhance
            physical or mental performance, improve overall health and
            well-being, or achieve a specific health outcome (like weight loss),
            according to Brea Lofton, a registered dietitian and nutritionist
            for health and wellness company Lumen. Sometimes biohacking is also
            called do-it-yourself (DIY) biology.
          </p>
        </div>
      </section>
    </main>
  );
};

export default FAQs;

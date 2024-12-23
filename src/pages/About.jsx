import React from "react";
import "../styles/pages.css";

const About = () => {
  return (
    <main>
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>About Us</li>
        </ul>
      </nav>

      {/* About Section */}
      <section className="about-container">
        <h1 className="prod-name">About Us</h1>
        <div className="about-content">
          <p className="about-description">
            At BioXcel, we're passionate about harnessing cutting-edge
            biotechnology to empower individuals to optimize their health,
            performance, and well-being. Our mission is to democratize
            biohacking, making advanced tools and techniques accessible to
            everyone seeking to enhance their lives. Whether you're a
            professional athlete striving for peak performance, a biohacker
            exploring the limits of human potential, or simply someone committed
            to living your best life, we're here to support you on your journey.
            From personalized supplements and wearable devices to innovative
            biofeedback technologies, our curated selection of products is
            designed to help you achieve your goals and elevate your everyday
            experience. At BioXcel, we believe that by understanding and
            optimizing our biology, we can unlock new levels of vitality,
            resilience, and fulfillment. Join us in redefining what it means to
            thrive.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;

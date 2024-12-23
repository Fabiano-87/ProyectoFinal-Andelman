import React from "react";
import "../styles/pages.css"; // Assuming you have a global CSS file for shared styles

const ContactUs = () => {
  return (
    <main>
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>Contact Us</li>
        </ul>
      </nav>

      {/* Contact Section */}
      <section className="contact-container">
        <div className="contact-content">
          <h1 className="prod-name">Contact Us</h1>
          <p className="contact-description">
            Have questions or need support? Fill out the form below, and our
            team will get back to you shortly.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="form-input"
                placeholder="Write a subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                id="message"
                className="form-textarea"
                rows="6"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;

import React, { useState } from "react";
import { emailjsConfig } from '../../config/emailjs';
import { FaEnvelopeOpen, FaPhoneSquareAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import { myEmailId, myPhoneNo, socialLinks } from "../../data";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simple validation
    if (!name || !email || !message) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsLoading(true);

    // ✅ Use config file values
    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        e.target,
        emailjsConfig.publicKey
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Error:", error);
          toast.error("Failed to send message");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In
        <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">{myEmailId}</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 {myPhoneNo}</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            {socialLinks.map(({ icon, url, id }, index) => (
              <a
                key={id}
                href={url}
                className="contact__social-link"
                target="_blank"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              name="message"
              placeholder="Your Message *"
              className="form__control textarea"
              required
            ></textarea>
          </div>

          <button type="submit" className="button" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
            {!isLoading && (
              <span className="button__icon contact___button-icon">
                <FiSend />
              </span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

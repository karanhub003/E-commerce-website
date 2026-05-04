import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <h2 className="contactUs">Contact Us</h2>
      <div className="contactBox">
        <p>
          We’d love to hear from you! Whether you have questions about our
          products, need help with your order, or simply want to share feedback,
          our team is here to assist.
        </p>
        <ul>
          <li>
            <b>Customer Support:</b>Quick help with orders, returns, and
            shipping.
          </li>
          <li>
            <b>Feedback & Suggestions:</b>Your thoughts help us improve and
            grow.
          </li>
          <li>
            <b>Business Inquiries:</b>Collaborations, wholesale, or partnership
            opportunities.
          </li>
        </ul>
        <div className="contactInfo">
          <p><b>📧 Email:</b>support@Nexora.com</p>
          <p><b>📞 Phone:</b>+91-9000047432</p>
          <p><b>📍 Address:</b>Agra, Uttar Pradesh</p>
        </div>
        <p>Our support team is available Monday to Saturday, 9 AM – 7 PM IST. We aim to respond to all queries within 24 hours.</p>
      </div>
    </>
  );
}

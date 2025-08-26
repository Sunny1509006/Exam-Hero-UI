import React from 'react';
import { Helmet } from 'react-helmet';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Helmet>
        <title>Contact Us - Exam Hero</title>
        <meta name="description" content="Contact Exam Hero support team. Get help with your SSC & HSC exam preparation. Email, phone, and social media contact information." />
        <meta name="keywords" content="contact exam hero, customer support, help center, exam preparation support" />
        <meta property="og:title" content="Contact Us - Exam Hero" />
        <meta property="og:description" content="Get in touch with Exam Hero support team for assistance with your exam preparation." />
      </Helmet>
      <div className="contact-us-container">
        <h1>Contact Us – Exam Hero</h1>
        <p className="contact-intro">
          We're here to help! If you have any questions, feedback, or need assistance, feel free to
          reach out to us through any of the following channels:
        </p>

        <div className="contact-section">
          <h2>1. Email Support</h2>
          <p>For general inquiries, technical issues, or support requests:</p>
          <div className="contact-info">
            <a href="mailto:support@examhero.app" className="contact-link email-link">
              📧 support@examhero.app
            </a>
          </div>
        </div>

        <div className="contact-section">
          <h2>2. Phone Support</h2>
          <p>Call or WhatsApp us for quick assistance:</p>
          <div className="contact-info">
            <a href="tel:+880" className="contact-link phone-link">
              📞 +880**********
            </a>
          </div>
        </div>

        <div className="contact-section">
          <h2>3. Social Media</h2>
          <p>Stay connected, get updates, and reach us on social media:</p>
          <div className="social-links">
            <div className="social-item">
              <span className="social-icon">📘</span>
              <span>Facebook: </span>
              <a href="#" className="social-link">link</a>
            </div>
            <div className="social-item">
              <span className="social-icon">📷</span>
              <span>Instagram: </span>
              <a href="#" className="social-link">[Your Instagram link]</a>
            </div>
            <div className="social-item">
              <span className="social-icon">📺</span>
              <span>YouTube: </span>
              <a href="#" className="social-link">[Your YouTube link]</a>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2>4. Feedback & Suggestions</h2>
          <p>
            We value your feedback! Send your suggestions or ideas to support@examhero.app, and
            help us make Exam Hero even better.
          </p>
          <div className="contact-info">
            <a href="mailto:support@examhero.app?subject=Feedback%20and%20Suggestions" className="contact-link feedback-link">
              💡 Send Feedback
            </a>
          </div>
        </div>

        <div className="contact-section business-section">
          <h2>5. Business Inquiries</h2>
          <p>For partnerships, collaborations, or business-related inquiries, please contact:</p>
          <div className="contact-info">
            <a href="mailto:business@examhero.app" className="contact-link business-link">
              💼 business@examhero.app
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <div className="response-time">
            <h3>📅 Response Time</h3>
            <p>We typically respond to all inquiries within 24-48 hours during business days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
import React from 'react';
import './RefundPolicy.css';

const RefundPolicy = () => {
  return (
    <div className="refund-container">
      <div className="refund-content">
        <div className="refund-header">
          <h1 className="refund-title">💰 Refund Policy – Exam Hero</h1>
          <p className="refund-intro">
            At Exam Hero, we strive to provide high-quality educational content and services. 
            Please read this refund policy carefully before making any purchase.
          </p>
        </div>

        <div className="refund-sections">
          <div className="refund-section">
            <h2>1. Online Courses / Digital Content</h2>
            <div className="policy-item">
              <h3>No Refund:</h3>
              <p>
                All online courses, subscriptions, video lessons, AI tutor access, and live exams 
                are <strong>non-refundable</strong> once purchased.
              </p>
            </div>
            <div className="policy-note">
              <p>Please review course details carefully before making a purchase.</p>
            </div>
          </div>

          <div className="refund-section">
            <h2>2. Physical Products / Student Shop</h2>
            <div className="policy-item">
              <h3>Refund Available:</h3>
              <p>
                For physical products purchased through the Student Shop (e.g., study materials, 
                books, stationery), refunds or replacements are available if:
              </p>
              <ul>
                <li>The product is damaged or defective upon delivery.</li>
                <li>Refund requests are made within <strong>7 days</strong> of delivery.</li>
                <li>Products are returned in their original packaging and condition.</li>
              </ul>
            </div>
            <div className="contact-info">
              <p>
                To request a refund, contact our support team at: 
                <a href="mailto:support@examhero.app" className="contact-link">support@examhero.app</a>
              </p>
            </div>
          </div>

          <div className="refund-section">
            <h2>3. Payment Disputes</h2>
            <ul>
              <li>All payments are processed securely.</li>
              <li>Any unauthorized or disputed transactions must be reported immediately.</li>
            </ul>
          </div>

          <div className="refund-section">
            <h2>4. Contact Us</h2>
            <p>
              For any questions or issues regarding refunds, please contact us:
            </p>
            <div className="contact-section">
              <a href="mailto:support@examhero.app" className="contact-email">
                📧 support@examhero.app
              </a>
            </div>
          </div>
        </div>

        <div className="refund-footer">
          <div className="important-notice">
            <h3>Important Notice</h3>
            <p>
              This refund policy is subject to change. Any updates will be communicated through 
              the app. By using our services, you agree to the terms outlined above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
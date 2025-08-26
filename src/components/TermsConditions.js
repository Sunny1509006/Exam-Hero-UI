import React from 'react';
import { Helmet } from 'react-helmet';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="terms-container">
      <Helmet>
        <title>Terms & Conditions - Exam Hero</title>
        <meta name="description" content="Terms and Conditions for Exam Hero - Smart Learning App. Read our terms of service, user guidelines, and legal policies." />
        <meta name="keywords" content="exam hero terms conditions, terms of service, user agreement, legal policies" />
        <meta property="og:title" content="Terms & Conditions - Exam Hero" />
        <meta property="og:description" content="Read the Terms and Conditions for using Exam Hero smart learning platform." />
      </Helmet>
      <div className="terms-content">
        <div className="terms-header">
          <h1 className="terms-title">📋 Terms & Conditions</h1>
          <p className="terms-intro">
            Welcome to Exam Hero. By downloading, installing, or using this app, you agree to be 
            bound by these Terms & Conditions. Please read them carefully before using the app.
          </p>
        </div>

        <div className="terms-sections">
          <div className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using Exam Hero, you agree to comply with these Terms & Conditions and our Privacy 
              Policy. If you do not agree, please discontinue use of the app.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Eligibility</h2>
            <p>
              This app is intended for students preparing for SSC, HSC, and similar board exams. You 
              must be at least 13 years old to use this app.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. Use of Service</h2>
            <ul>
              <li>The app must be used only for educational purposes.</li>
              <li>Users must not attempt to hack, disrupt, or introduce harmful content.</li>
              <li>Each account is personal and cannot be sold, shared, or transferred without permission.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>4. Content & Intellectual Property</h2>
            <ul>
              <li>All study materials, video solutions, PDFs, AI-generated answers, and other content are the intellectual property of Exam Hero and its partners.</li>
              <li>Content may not be copied, redistributed, or used outside the app without written consent.</li>
              <li>Unauthorized use may result in suspension or legal action.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>5. Payments & Subscriptions</h2>
            <ul>
              <li>Some features are free; premium features may require payment or subscription.</li>
              <li>All payments are final and non-refundable, unless required by applicable law.</li>
              <li>Users are responsible for maintaining valid payment methods.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>6. AI Tutor Disclaimer</h2>
            <p>
              The AI Tutor provides instant answers and support, but accuracy is not guaranteed. 
              Students are encouraged to verify answers with teachers or reliable sources.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Community Guidelines</h2>
            <ul>
              <li>Respectful communication is required in the Student Community.</li>
              <li>Harmful, abusive, or inappropriate content is prohibited.</li>
              <li>Violations may lead to content removal, suspension, or permanent account termination.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>8. Limitation of Liability</h2>
            <ul>
              <li>Exam Hero is not responsible for exam results, performance, or consequences of using the app.</li>
              <li>We provide educational support, but success depends on the student's own effort.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>9. Privacy & Data</h2>
            <ul>
              <li>By using the app, you consent to our Privacy Policy, which governs how we collect, use, and protect data.</li>
              <li>We do not sell or share personal data with unauthorized third parties.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>10. Termination</h2>
            <p>
              We may suspend or terminate accounts that violate these Terms without prior notice.
            </p>
          </div>

          <div className="terms-section">
            <h2>11. Changes to Terms</h2>
            <p>
              Exam Hero reserves the right to update or modify these Terms & Conditions at any time. 
              Users will be notified of significant changes.
            </p>
          </div>

          <div className="terms-section">
            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="contact-info">
              <a href="mailto:support@examhero.app" className="contact-email">
                📧 support@examhero.app
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
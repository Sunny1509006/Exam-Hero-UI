import React from 'react';
import { Helmet } from 'react-helmet';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <Helmet>
        <title>Privacy Policy - Exam Hero</title>
        <meta name="description" content="Privacy Policy for Exam Hero - Smart Learning App. Learn how we collect, use, and protect your personal information and data." />
        <meta name="keywords" content="exam hero privacy policy, data protection, user privacy, personal information" />
        <meta property="og:title" content="Privacy Policy - Exam Hero" />
        <meta property="og:description" content="Read our Privacy Policy to understand how Exam Hero protects your personal information." />
      </Helmet>
      <div className="privacy-content">
        <div className="privacy-header">
          <h1 className="privacy-title">🔒 Privacy Policy</h1>
          <p className="privacy-intro">
            Exam Hero ("we," "our," "us") is a Smart Learning Platform designed for SSC, HSC, and 
            other board exam students in Bangladesh. This Privacy Policy explains how we collect, use, 
            and protect your personal information.
          </p>
          <p className="privacy-agreement">
            By using our app, you agree to the terms outlined in this policy.
          </p>
        </div>

        <div className="privacy-sections">
          <div className="privacy-section">
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, or other details you provide during registration.</li>
              <li><strong>Educational Information:</strong> Class, board, subjects, exam preferences, and study activity.</li>
              <li><strong>Usage Data:</strong> Device details, IP address, browser type, app usage behavior, and analytics data.</li>
              <li><strong>Payment Information:</strong> Payment details for premium features are processed through secure third-party payment gateways. We do not store full payment details.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our educational services.</li>
              <li>Personalize your study experience.</li>
              <li>Manage subscriptions and process payments.</li>
              <li>Enable exams, ranking systems, and community features.</li>
              <li>Send you important updates and notifications.</li>
              <li>Ensure security and prevent misuse of the app.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information. However, we may share data in the 
              following cases:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted third parties who help us with hosting, payment processing, or technical support.</li>
              <li><strong>Legal Requirements:</strong> If required by law, court order, or government authority.</li>
              <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or sale of assets.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>4. Data Security</h2>
            <p>
              We use appropriate technical and organizational measures to protect your information. 
              However, no system is 100% secure, so we cannot guarantee absolute security.
            </p>
          </div>

          <div className="privacy-section">
            <h2>5. Children's Privacy</h2>
            <p>
              Our app is intended for students aged 13 and above. We do not knowingly collect data from 
              children under 13. If such data is accidentally collected, we will delete it immediately.
            </p>
          </div>

          <div className="privacy-section">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal information.</li>
              <li>Opt out of promotional messages.</li>
              <li>Request a copy of your stored data.</li>
            </ul>
            <p>
              For any such requests, contact us at: 
              <a href="mailto:support@examhero.app" className="contact-link">support@examhero.app</a>
            </p>
          </div>

          <div className="privacy-section">
            <h2>7. Third-Party Links</h2>
            <p>
              Our app may contain links to third-party websites or services. We are not responsible for 
              their privacy practices. Please review their policies before using their services.
            </p>
          </div>

          <div className="privacy-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be notified within the 
              app. Continued use of the app after updates means you accept the new terms.
            </p>
          </div>

          <div className="privacy-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions or concerns, please reach us at:
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

export default PrivacyPolicy;
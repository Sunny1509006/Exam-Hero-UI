import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Exam Hero</h3>
            <div className="download-buttons">
              <a href="#" className="download-btn play-store">
                <span className="store-icon">📱</span>
                <div className="store-text">
                  <span className="get-it">GET IT ON</span>
                  <span className="store-name">Google Play</span>
                </div>
              </a>
              <a href="#" className="download-btn app-store">
                <span className="store-icon">🍎</span>
                <div className="store-text">
                  <span className="get-it">Download on the</span>
                  <span className="store-name">App Store</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="footer-section programs-section">
            <div className="programs-left">
              <h4>Programs</h4>
              <ul>
                <li><a href="#ssc-science">SSC (Science)</a></li>
                <li><a href="#ssc-arts">SSC (Arts)</a></li>
                <li><a href="#ssc-commerce">SSC (Commerce)</a></li>
                <li><a href="#hsc-science">HSC (Science)</a></li>
                <li><a href="#hsc-arts">HSC (Arts)</a></li>
                <li><a href="#hsc-commerce">HSC (Commerce)</a></li>
              </ul>
            </div>
            <div className="programs-right">
            <div className="support-legal-container">
              <div className="support-section">
                <h4>Support</h4>
                <ul>
                  <li><a href="#help">Help Center</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
              <div className="legal-section">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms of Service</a></li>
                  <li><a href="#refund">Refund Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Exam Hero. All rights reserved.</p>
          <p>Made with ❤️ for students worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
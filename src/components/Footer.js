import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section-left">
            <div className="footer-brand">
              <h3>Exam Hero</h3>
              <div className="download-buttons">
                <a href="#" className="download-btn play-store">
                  <span className="store-icon">📱</span>
                  <span className="store-name">Play Store</span>
                </a>
                <a href="#" className="download-btn app-store">
                  <span className="store-icon">🍎</span>
                  <span className="store-name">App Store</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-section-middle">
            <div className="footer-office">
              <h4>Office Address</h4>
              <div className="office-info">
                <p>Exam Hero Education Ltd.</p>
                <p>House #123, Road #456</p>
                <p>Dhanmondi, Dhaka-1205</p>
                <p>Bangladesh</p>
                <p>Phone: +880-1234-567890</p>
                <p>Email: info@examhero.com</p>
              </div>
            </div>
          </div>
          
          <div className="footer-section-right">
            <div className="footer-links">
              
              
              <div className="link-group">
                <h4>Support</h4>
                <div className="link-list">
                  <Link to="/help">Help Center</Link>
                  <Link to="/faq">FAQ</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>
              
              <div className="link-group">
                <h4>Legal</h4>
                <div className="link-list">
                  <Link to="/privacy">Privacy Policy</Link>
                  <Link to="/terms">Terms of Service</Link>
                  <Link to="/refund">Refund Policy</Link>
                </div>
              </div>
              <div className="link-group">
                <h4>Programs</h4>
                <div className="link-list">
                  <Link to="/ssc-science">SSC Science</Link>
                  <Link to="/ssc-humanities">SSC Arts</Link>
                  <Link to="/ssc-business">SSC Commerce</Link>
                  <Link to="/hsc-science">HSC Science</Link>
                  <Link to="/hsc-humanities">HSC Arts</Link>
                  <Link to="/hsc-business">HSC Commerce</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
       <div className="footer-bottom">
          <p>&copy; 2025 Exam Hero. All rights reserved.</p>
          <p>Made with ❤️ for students worldwide</p>
        </div>
    </footer>
  );
};

export default Footer;
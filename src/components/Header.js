import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Exam Hero</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="dropdown">
              <span className="dropdown-toggle">Programs</span>
              <div className="dropdown-menu">
                <div className="dropdown-section">
                  <h4>SSC Programs</h4>
                  <Link to="/ssc-science">SSC Science</Link>
                  <Link to="/ssc-humanities">SSC Humanities</Link>
                  <Link to="/ssc-business">SSC Business Studies</Link>
                </div>
                <div className="dropdown-section">
                  <h4>HSC Programs</h4>
                  <Link to="/hsc-science">HSC Science</Link>
                  <Link to="/hsc-humanities">HSC Humanities</Link>
                  <Link to="/hsc-business">HSC Business Studies</Link>
                </div>
              </div>
            </li>
            <li><Link to="/founders-journey">Founder's Journey</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
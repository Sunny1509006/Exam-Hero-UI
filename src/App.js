import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import FAQ from './components/FAQ';
import HelpCenter from './components/HelpCenter';
import ContactUs from './components/ContactUs';
import SSCScience from './components/SSCScience';
import SSCHumanities from './components/SSCHumanities';
import SSCBusiness from './components/SSCBusiness';
import HSCScience from './components/HSCScience';
import HSCHumanities from './components/HSCHumanities';
import HSCBusiness from './components/HSCBusiness';
import FoundersJourney from './components/FoundersJourney';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState('');

  const handlePlayStoreClick = (e) => {
    e.preventDefault();
    setPopupType('playstore');
    setShowPopup(true);
  };

  const handleAppStoreClick = (e) => {
    e.preventDefault();
    setPopupType('appstore');
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupType('');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
              <Route path="/" element={<Body onPlayStoreClick={handlePlayStoreClick} onAppStoreClick={handleAppStoreClick} />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/refund" element={<RefundPolicy />} />
              <Route path="/faq" element={<FAQ />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/ssc-science" element={<SSCScience />} />
            <Route path="/ssc-humanities" element={<SSCHumanities />} />
            <Route path="/ssc-business" element={<SSCBusiness />} />
            <Route path="/hsc-science" element={<HSCScience />} />
            <Route path="/hsc-humanities" element={<HSCHumanities />} />
            <Route path="/hsc-business" element={<HSCBusiness />} />
            <Route path="/founders-journey" element={<FoundersJourney />} />
          </Routes>
        <Footer onPlayStoreClick={handlePlayStoreClick} onAppStoreClick={handleAppStoreClick} />
        
        {/* Popup Modal */}
        {showPopup && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={closePopup}>&times;</button>
              <div className="popup-header">
                <h3>Coming Soon!</h3>
              </div>
              <div className="popup-body">
                <p>Dear Students,</p>
                <p>
                  {popupType === 'playstore' 
                    ? 'We are delighted to inform you that almost all the required documents for Play Store submission have been prepared. The official launch of the Exam Hero App is coming very soon.'
                    : 'We are delighted to inform you that almost all the required documents for App Store submission have been prepared. The official launch of the Exam Hero App is coming very soon.'
                  }
                </p>
                <p className="popup-signature">
                  — Hridoy Hasan, Founder & Owner, Exam Hero
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;

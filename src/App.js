import React from 'react';
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
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
              <Route path="/" element={<Body />} />
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
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

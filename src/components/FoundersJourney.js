import React from 'react';
import { Helmet } from 'react-helmet';
import './FoundersJourney.css';

const FoundersJourney = () => {
  return (
    <div className="founders-journey">
      <Helmet>
        <title>Founder's Journey - Exam Hero</title>
        <meta name="description" content="Learn about Hridoy, the founder of Exam Hero, and his journey to create Bangladesh's leading smart learning platform for SSC & HSC students." />
        <meta name="keywords" content="hridoy founder exam hero, founders journey, education entrepreneur bangladesh, exam hero story" />
        <meta property="og:title" content="Founder's Journey - Exam Hero" />
        <meta property="og:description" content="Discover the inspiring story behind Exam Hero and how it became Bangladesh's premier educational platform." />
      </Helmet>
      
      <div className="founders-journey-container">
        <div className="founders-journey-header">
          <h1>Founder's Journey – Exam Hero</h1>
        </div>
        
        <div className="founders-journey-content">
          <div className="founder-intro">
            <div className="founder-image">
              <img src="/Images/hridoy.jpeg" alt="Hridoy - Founder of Exam Hero" />
              <div className="founder-name">Hridoy Hasan</div>
              <div className="founder-title">Founder & CEO, Exam Hero</div>
            </div>
            
            <div className="founder-story">
              <p className="intro-text">
                I am <strong>Hridoy Hasan</strong>, the founder of Exam Hero App. The journey of Exam Hero began with a simple realization: 
                students in Bangladesh struggle to access past exam questions, mock tests, and proper video solutions. 
                Many cannot afford expensive test papers or coaching centers, which creates a huge gap in preparation.
              </p>
            </div>
          </div>
          
          <div className="vision-section">
            <h2>The Vision</h2>
            <p>
              To solve this, I envisioned a government-approved, technology-driven education platform that would make 
              exam preparation more accessible and effective. Step by step, we designed a complete learning ecosystem, offering:
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <h3>Massive Question Bank</h3>
                <p>Hundreds of thousands of questions with detailed solutions</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <h3>Online Mock Tests</h3>
                <p>Instant results and performance analytics</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎥</div>
                <h3>Video Learning</h3>
                <p>Classes and solutions by top teachers in the country</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🤖</div>
                <h3>AI-Powered Tools</h3>
                <p>Personalized recommendations for better learning</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🛒</div>
                <h3>Student Shop</h3>
                <p>Integrated platform for essential study resources</p>
              </div>
            </div>
          </div>
          
          <div className="mission-section">
            <h2>Our Mission Today</h2>
            <p>
              Today, <strong>Exam Hero</strong> is more than just an app—it is an all-in-one digital companion for SSC and HSC students, 
              combining past questions, mock tests, video learning, and AI support under one platform.
            </p>
            
            <div className="vision-statement">
              <h3>Our Vision</h3>
              <p>
                To make quality education <strong>affordable</strong>, <strong>accessible</strong>, and <strong>future-ready</strong> 
                for millions of students across Bangladesh.
              </p>
            </div>
          </div>
          
          <div className="impact-section">
            <h2>Making a Difference</h2>
            <p>
              Through Exam Hero, we're bridging the educational gap and empowering students with the tools they need to succeed. 
              Our platform democratizes access to quality education, ensuring that every student, regardless of their economic background, 
              can prepare effectively for their board exams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersJourney;
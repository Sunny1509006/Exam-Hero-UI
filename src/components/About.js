import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="hero-section">
          <h1 className="main-title">
            Exam Hero – Smart Learning App for SSC & HSC Students
          </h1>
          <p className="hero-description">
            Exam Hero is a modern Smart Learning Platform designed for students in Bangladesh. 
            Whether you are preparing for SSC, HSC, or other board exams, Exam Hero provides 
            everything you need in one place. Our mission is to make your academic preparation 
            <span className="highlight"> Smarter, Faster & Easier</span>.
          </p>
        </div>

        <div className="features-section">
          <h2 className="section-title">🔑 Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Board MCQ Filter</h3>
              <p>
                Select book, board, and year to instantly access all MCQ questions from that year, 
                along with video solutions, online tests, and merit lists.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Board CQ Filter</h3>
              <p>
                Get detailed video solutions and PDF answers for every creative (CQ) question in one place.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Chapter-wise Questions</h3>
              <p>
                Practice chapter-based questions and answers for easier revision and focused preparation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Live Exam</h3>
              <p>
                Participate in real-time online exams with timer, instant results, and ranking system 
                for a true exam experience.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Student Community</h3>
              <p>
                A dedicated education-based social network where students can share notes, questions, 
                and experiences—just like Facebook, but built for learning.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Student Shop</h3>
              <p>
                Buy essential educational products with just one click.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>AI Tutor</h3>
              <p>
                Stuck on a problem? Get instant AI-generated answers as if you always have a 
                personal teacher by your side.
              </p>
            </div>
          </div>
        </div>

        <div className="why-choose-section">
          <h2 className="section-title">🚀 Why Choose Exam Hero?</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="bullet">●</span>
              <span><strong>All-in-One:</strong> Study + Practice + Exam + Solution + Community</span>
            </div>
            <div className="benefit-item">
              <span className="bullet">●</span>
              <span><strong>Video + PDF Solutions</strong> = Dual Learning Advantage</span>
            </div>
            <div className="benefit-item">
              <span className="bullet">●</span>
              <span><strong>AI Tutor</strong> = Instant Smart Help</span>
            </div>
            <div className="benefit-item">
              <span className="bullet">●</span>
              <span><strong>Regular Live Exams</strong> = Real Exam Experience</span>
            </div>
            <div className="benefit-item">
              <span className="bullet">●</span>
              <span><strong>Student Community</strong> = Learn & Grow Together</span>
            </div>
          </div>
        </div>

        <div className="perfect-for-section">
          <h2 className="section-title">🎯 Perfect For</h2>
          <div className="target-audience">
            <div className="audience-item">
              <span className="bullet">●</span>
              <span>SSC & HSC Board Exam Students</span>
            </div>
            <div className="audience-item">
              <span className="bullet">●</span>
              <span>Students who want chapter-wise practice</span>
            </div>
            <div className="audience-item">
              <span className="bullet">●</span>
              <span>Students looking for past year questions</span>
            </div>
            <div className="audience-item">
              <span className="bullet">●</span>
              <span>Learners who need instant solutions & smart study tools</span>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">🏆 Exam Hero – Be the Real Hero of Your Exam!</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
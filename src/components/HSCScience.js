import React from 'react';
import './HSCScience.css';

const HSCScience = () => {
  return (
    <div className="hsc-science">
      <div className="hsc-science-container">
        <div className="program-header">
          <h1>HSC Science Program</h1>
          <div className="program-tagline">Study smart and excel in exams with Exam Hero!</div>
          <p className="program-intro">
            The Exam Hero HSC Science Program is specially designed for HSC Science 
            students in Bangladesh. This platform provides all required Science textbooks + common subjects 
            (Bangla, English, ICT), chapter-wise practice, video solutions, AI tutor, and live exams – all in one platform.
          </p>
        </div>

        <div className="program-section">
          <h2>📚 Included Books & Subjects (Science + Common Books)</h2>
          
          <div className="subjects-grid">
            <div className="subject-category">
              <h3>🔬 Science Subjects</h3>
              <ul className="subject-list">
                <li>Physics – HSC Science Textbook (NCTB)</li>
                <li>Chemistry – HSC Science Textbook (NCTB)</li>
                <li>Biology – HSC Science Textbook (NCTB)</li>
                <li>Higher Mathematics – HSC Science Textbook (NCTB)</li>
              </ul>
            </div>
            
            <div className="subject-category">
              <h3>📖 Common Books (All Streams)</h3>
              <ul className="subject-list">
                <li>Bangla 1st & 2nd Paper</li>
                <li>English 1st & 2nd Paper</li>
                <li>Islam & Moral Education</li>
                <li>ICT / Computer Studies</li>
              </ul>
            </div>
          </div>
          
          <div className="program-note">
            <p>
              Exam Hero App provides students with complete, organized, and smart 
              preparation so that they can confidently take exams from all 
              board-approved books.
            </p>
          </div>
        </div>

        <div className="program-section">
          <h2>🎯 Exam Opportunities</h2>
          <p>HSC Science students can take exams for all subjects:</p>
          
          <div className="exam-features">
            <div className="exam-feature">
              <h4>📝 MCQ Tests</h4>
              <p>Chapter-wise MCQ practice for all subjects.</p>
            </div>
            
            <div className="exam-feature">
              <h4>✍️ CQ / Creative Questions</h4>
              <p>Detailed solutions with PDF downloads.</p>
            </div>
            
            <div className="exam-feature">
              <h4>🔴 Live Exams</h4>
              <p>Real HSC exam-style online tests with ranking and results.</p>
            </div>
            
            <div className="exam-feature">
              <h4>🏆 Merit Lists</h4>
              <p>Track your performance with top student rankings.</p>
            </div>
          </div>
        </div>

        <div className="program-section">
          <h2>⭐ Key Features & Benefits</h2>
          
          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-icon">📚</span>
              <span>Chapter-wise Practice: Organized study and revision for each chapter.</span>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">📋</span>
              <span>Past Year Questions: MCQ and CQ solutions from all boards.</span>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">🎥</span>
              <span>Video Solutions: Step-by-step video explanations.</span>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">📄</span>
              <span>PDF Solutions: Full offline PDFs for every question.</span>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">🤖</span>
              <span>AI Tutor: Instant AI-generated answers for any question.</span>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">👥</span>
              <span>Student Community: Share notes, questions, and discussions.</span>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Shortcuts & Smart Learning Tools: Tips for faster problem-solving.</span>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">🏅</span>
              <span>Live Exams & Ranking: Real-time exam experience with performance tracking.</span>
            </div>
          </div>
        </div>

        <div className="program-section perfect-for-section">
          <h2>🎯 Perfect For</h2>
          
          <div className="perfect-for-list">
            <div className="perfect-for-item">
              <span className="check-icon">✅</span>
              <span>All HSC Science students</span>
            </div>
            
            <div className="perfect-for-item">
              <span className="check-icon">✅</span>
              <span>Those who want Science subjects + common books in one platform</span>
            </div>
            
            <div className="perfect-for-item">
              <span className="check-icon">✅</span>
              <span>Students who want video solutions, AI Tutor, and live exam practice</span>
            </div>
          </div>
        </div>

        <div className="program-footer">
          <div className="conclusion">
            <h3>🚀 Start Your HSC Science Journey Today!</h3>
            <p>
              With Exam Hero HSC Science Program, your preparation will be complete, organized, 
              and smart – all books, all features, and all exams in one platform! Join thousands of successful HSC Science students who have achieved excellent results 
              with Exam Hero.
            </p>
            <div className="cta-buttons">
              <a href="#download" className="cta-button primary">Download App Now</a>
              <a href="#learn-more" className="cta-button secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HSCScience;
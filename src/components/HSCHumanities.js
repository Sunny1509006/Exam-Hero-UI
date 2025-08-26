import React from 'react';
import './HSCHumanities.css';

const HSCHumanities = () => {
  return (
    <div className="hsc-humanities">
      <div className="hsc-humanities-container">
        <div className="hsc-humanities-program-header">
          <h1>HSC Humanities Program</h1>
          <p className="hsc-humanities-program-tagline">Study smart and excel in exams with Exam Hero!</p>
          <p className="hsc-humanities-program-intro">
            The Exam Hero HSC Humanities Program is specially designed for HSC Humanities 
            students in Bangladesh. This platform provides all required Humanities textbooks + 
            common subjects (Bangla, English, ICT), chapter-wise practice, video solutions, AI 
            tutor, and live exams – all in one platform.
          </p>
        </div>

        <div className="hsc-humanities-program-section">
          <h2>📚 Included Books & Subjects (Humanities + Common Books)</h2>
          <div className="hsc-humanities-subjects-grid">
            <div className="hsc-humanities-subject-category">
              <h3>Humanities Subjects</h3>
              <ul className="hsc-humanities-subject-list">
                <li>Bangla 1st & 2nd Paper – HSC Humanities Textbook (NCTB)</li>
                <li>English 1st & 2nd Paper – HSC Humanities Textbook (NCTB)</li>
                <li>History – HSC Humanities Textbook (NCTB)</li>
                <li>Geography – HSC Humanities Textbook (NCTB)</li>
                <li>Economics – HSC Humanities Textbook (NCTB)</li>
                <li>Civics / Social Studies – HSC Humanities Textbook (NCTB)</li>
              </ul>
            </div>
            <div className="hsc-humanities-subject-category">
              <h3>Common Books (All Streams)</h3>
              <ul className="hsc-humanities-subject-list">
                <li>Bangla 1st & 2nd Paper</li>
                <li>English 1st & 2nd Paper</li>
                <li>ICT / Computer Studies</li>
              </ul>
            </div>
          </div>
          <div className="hsc-humanities-program-note">
            <p>
              Exam Hero App provides students with complete, organized, and smart 
              preparation so that they can confidently take exams from all 
              board-approved books.
            </p>
          </div>
        </div>

        <div className="hsc-humanities-program-section">
          <h2>🎯 Exam Opportunities</h2>
          <p>HSC Humanities students can take exams for all subjects:</p>
          <div className="hsc-humanities-exam-features">
            <div className="hsc-humanities-exam-feature">
              <h4>MCQ Tests</h4>
              <p>Chapter-wise MCQ practice for all subjects.</p>
            </div>
            <div className="hsc-humanities-exam-feature">
              <h4>CQ / Creative Questions</h4>
              <p>Detailed solutions with PDF downloads.</p>
            </div>
            <div className="hsc-humanities-exam-feature">
              <h4>Live Exams</h4>
              <p>Real HSC exam-style online tests with ranking and results.</p>
            </div>
            <div className="hsc-humanities-exam-feature">
              <h4>Merit Lists</h4>
              <p>Track your performance with top student rankings.</p>
            </div>
          </div>
        </div>

        <div className="hsc-humanities-program-section">
          <h2>⭐ Key Features & Benefits</h2>
          <div className="hsc-humanities-features-grid">
            <div className="hsc-humanities-feature-item">
              <span className="hsc-humanities-feature-icon">📖</span>
              <span>Chapter-wise Practice: Organized study and revision for each chapter.</span>
            </div>
            <div className="hsc-humanities-feature-item">
              <span className="hsc-humanities-feature-icon">📝</span>
              <span>Past Year Questions: MCQ and CQ solutions from all boards.</span>
            </div>
            <div className="hsc-humanities-feature-item">
              <span className="hsc-humanities-feature-icon">🎥</span>
              <span>Video Solutions: Step-by-step video explanations.</span>
            </div>
            <div className="hsc-humanities-feature-item">
              <span className="hsc-humanities-feature-icon">📄</span>
              <span>PDF Solutions: Full offline PDFs for every question.</span>
            </div>
            <div className="hsc-humanities-feature-item">
              <span className="hsc-humanities-feature-icon">🤖</span>
              <span>AI Tutor: Instant AI-generated answers for any question.</span>
            </div>
            <div className="hsc-humanities-feature-item">
              <span className="hsc-humanities-feature-icon">👥</span>
              <span>Student Community: Share notes, questions, and discussions.</span>
            </div>
            <div className="hsc-humanities-feature-item">
              <span className="hsc-humanities-feature-icon">⚡</span>
              <span>Shortcuts & Smart Learning Tools: Tips for faster problem-solving.</span>
            </div>
            <div className="hsc-humanities-feature-item">
              <span className="hsc-humanities-feature-icon">🏆</span>
              <span>Live Exams & Ranking: Real-time exam experience with performance tracking.</span>
            </div>
          </div>
        </div>

        <div className="hsc-humanities-program-section hsc-humanities-perfect-for-section">
          <h2>✅ Perfect For</h2>
          <div className="hsc-humanities-perfect-for-list">
            <div className="hsc-humanities-perfect-for-item">
              <span className="hsc-humanities-check-icon">✅</span>
              <span>All HSC Humanities students</span>
            </div>
            <div className="hsc-humanities-perfect-for-item">
              <span className="hsc-humanities-check-icon">✅</span>
              <span>Those who want Humanities subjects + common books in one platform</span>
            </div>
            <div className="hsc-humanities-perfect-for-item">
              <span className="hsc-humanities-check-icon">✅</span>
              <span>Students who want video solutions, AI Tutor, and live exam practice</span>
            </div>
          </div>
        </div>

        <div className="hsc-humanities-program-footer">
          <div className="hsc-humanities-conclusion">
            <h3>🚀 Start Your HSC Humanities Journey Today!</h3>
            <p>
              With Exam Hero HSC Humanities Program, your preparation will be complete, 
              organized, and smart – all books, all features, and all exams in one platform!
            </p>
            <div className="hsc-humanities-cta-buttons">
              <a href="#download" className="hsc-humanities-cta-button primary">Download App</a>
              <a href="#signup" className="hsc-humanities-cta-button secondary">Start Free Trial</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HSCHumanities;
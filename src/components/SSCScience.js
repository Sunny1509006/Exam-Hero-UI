import React from 'react';
import './SSCScience.css';

const SSCScience = () => {
  return (
    <div className="ssc-science">
      <div className="ssc-science-container">
        <div className="program-header">
          <h1>SSC Science Program – Exam Hero</h1>
          <p className="program-tagline">
            Study smart and achieve top results with Exam Hero!
          </p>
          <p className="program-intro">
            The Exam Hero SSC Science Program is specially designed for SSC Science students in
            Bangladesh. Here you will get all science subjects + common books (Bangla, English,
            Islam & Moral Education, Social Science, Bangladesh & Global Studies, ICT),
            chapter-wise practice, video solutions, AI tutor, and live exams – all in one platform.
          </p>
        </div>

        <div className="program-section">
          <h2>📚 Included Books & Subjects (Science + Common Books)</h2>
          
          <div className="subjects-grid">
            <div className="subject-category">
              <h3>🔬 Science Subjects</h3>
              <ul className="subject-list">
                <li>Physics – SSC Science Textbook (NCTB)</li>
                <li>Chemistry – SSC Science Textbook (NCTB)</li>
                <li>Biology – SSC Science Textbook (NCTB)</li>
                <li>Higher Mathematics – SSC Science Textbook (NCTB)</li>
              </ul>
            </div>

            <div className="subject-category">
              <h3>📖 Common Books (All Streams)</h3>
              <ul className="subject-list">
                <li>Bangla 1st & 2nd Paper</li>
                <li>English 1st & 2nd Paper</li>
                <li>Islam & Moral Education</li>
                <li>ICT / Computer Studies</li>
                <li>Social Science</li>
                <li>Bangladesh & Global Studies</li>
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
          <p>SSC Science students can take exams for all subjects on Exam Hero:</p>
          <div className="exam-features">
            <div className="exam-feature">
              <h4>📝 MCQ Tests</h4>
              <p>Chapter-wise MCQ practice for all subjects.</p>
            </div>
            <div className="exam-feature">
              <h4>💡 CQ / Creative Questions</h4>
              <p>Detailed solutions with PDF downloads.</p>
            </div>
            <div className="exam-feature">
              <h4>🔴 Live Exams</h4>
              <p>Real SSC exam-style online tests with ranking and results.</p>
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
          <h2>👨‍🎓 Perfect For</h2>
          <div className="perfect-for-list">
            <div className="perfect-for-item">
              <span className="check-icon">✅</span>
              <span>All SSC Science students</span>
            </div>
            <div className="perfect-for-item">
              <span className="check-icon">✅</span>
              <span>Those who want science + common books + Social Science + Bangladesh & Global Studies in one platform</span>
            </div>
            <div className="perfect-for-item">
              <span className="check-icon">✅</span>
              <span>Students who want video solutions, AI Tutor, and live exam practice</span>
            </div>
          </div>
        </div>

        <div className="program-footer">
          <div className="conclusion">
            <h3>🎉 Complete, Organized, and Smart Preparation!</h3>
            <p>
              With Exam Hero SSC Science Program, your preparation will be complete, organized,
              and smart – all books, all features, and all exams in one platform!
            </p>
            <div className="cta-buttons">
              <a href="#download" className="cta-button primary">
                📱 Download App
              </a>
              <a href="#upgrade" className="cta-button secondary">
                ⭐ Upgrade to Premium
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSCScience;
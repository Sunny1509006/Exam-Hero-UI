import React from 'react';
import './SSCHumanities.css';

const SSCHumanities = () => {
  return (
    <div className="ssc-humanities">
      <div className="ssc-humanities-container">
        <div className="program-header">
          <h1>SSC Humanities Program</h1>
          <div className="program-tagline">Study smart and excel in exams with Exam Hero!</div>
          <p className="program-intro">
            The Exam Hero SSC Humanities Program is specially designed for SSC Humanities 
            students in Bangladesh. This platform provides all required textbooks + common 
            subjects (Bangla, English, Islam & Moral Education, Social Science, Bangladesh & 
            Global Studies, ICT), chapter-wise practice, video solutions, AI tutor, and live exams – 
            all in one place.
          </p>
        </div>

        <div className="program-section">
          <h2>📚 Included Books & Subjects (Humanities + Common Books)</h2>
          
          <div className="subjects-grid">
            <div className="subject-category">
              <h3>🎓 Humanities Subjects</h3>
              <ul className="subject-list">
                <li>Bangla 1st & 2nd Paper – SSC Humanities Textbook (NCTB)</li>
                <li>English 1st & 2nd Paper – SSC Humanities Textbook (NCTB)</li>
                <li>History – SSC Humanities Textbook (NCTB)</li>
                <li>Geography – SSC Humanities Textbook (NCTB)</li>
                <li>Economics – SSC Humanities Textbook (NCTB)</li>
                <li>Civics / Social Studies – SSC Humanities Textbook (NCTB)</li>
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
          <p>Students can take exams for all subjects:</p>
          
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
          <h2>🎯 Perfect For</h2>
          
          <div className="perfect-for-list">
            <div className="perfect-for-item">
              <span className="check-icon">✅</span>
              <span>All SSC Humanities students</span>
            </div>
            
            <div className="perfect-for-item">
              <span className="check-icon">✅</span>
              <span>Those who want Humanities subjects + common books + Social Science + Bangladesh & Global Studies in one platform</span>
            </div>
            
            <div className="perfect-for-item">
              <span className="check-icon">✅</span>
              <span>Students who want video solutions, AI Tutor, and live exam practice</span>
            </div>
          </div>
        </div>

        <div className="program-footer">
          <div className="conclusion">
            <h3>🚀 Start Your SSC Humanities Journey Today!</h3>
            <p>
              Join thousands of successful SSC Humanities students who have achieved excellent results 
              with Exam Hero. Get access to comprehensive study materials, expert guidance, and 
              cutting-edge learning tools designed specifically for Humanities students.
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

export default SSCHumanities;
import React from 'react';
import { Helmet } from 'react-helmet';
import './HelpCenter.css';

const HelpCenter = () => {
  return (
    <div className="help-center">
      <Helmet>
        <title>Help Center - Exam Hero</title>
        <meta name="description" content="Exam Hero Help Center - Get support, troubleshooting tips, and answers to common questions about our smart learning platform." />
        <meta name="keywords" content="exam hero help center, customer support, troubleshooting, user guide, help documentation" />
        <meta property="og:title" content="Help Center - Exam Hero" />
        <meta property="og:description" content="Find help and support for using Exam Hero smart learning platform effectively." />
      </Helmet>
      <div className="help-center-container">
        <h1>Exam Hero – Help Center</h1>
        <p className="help-center-intro">
          Welcome to the Exam Hero Help Center! Here you can find answers to common questions,
          troubleshooting tips, and ways to contact our support team.
        </p>

        <div className="help-section">
          <h2>1. Getting Started</h2>
          <div className="help-item">
            <h3>Q: How do I create an account?</h3>
            <p>
              A: Open the app and tap "Sign Up." Enter your details, verify your email or phone number,
              and start using Exam Hero.
            </p>
          </div>
          <div className="help-item">
            <h3>Q: I forgot my password. What should I do?</h3>
            <p>
              A: Tap "Forgot Password" on the login screen. Follow the instructions to reset your
              password via email or SMS.
            </p>
          </div>
        </div>

        <div className="help-section">
          <h2>2. Using the App</h2>
          <div className="help-item">
            <h3>Q: How do I access online courses?</h3>
            <p>
              A: Go to the "Courses" section, select the course you want, and start learning instantly.
            </p>
          </div>
          <div className="help-item">
            <h3>Q: How do I join a live exam?</h3>
            <p>
              A: Go to the "Live Exam" tab, select the scheduled exam, and tap "Join Exam" when the
              timer starts.
            </p>
          </div>
          <div className="help-item">
            <h3>Q: Can I access past year questions?</h3>
            <p>
              A: Yes! Use the Board MCQ Filter or Board CQ Filter to find past questions by book,
              board, and year.
            </p>
          </div>
        </div>

        <div className="help-section">
          <h2>3. Payments & Subscriptions</h2>
          <div className="help-item">
            <h3>Q: How do I upgrade to premium?</h3>
            <p>
              A: Go to the "Upgrade / Premium" section, select your plan, and complete payment through
              our secure gateway.
            </p>
          </div>
          <div className="help-item">
            <h3>Q: Can I get a refund for online courses?</h3>
            <p>
              A: No, online courses, subscriptions, and digital content are non-refundable.
            </p>
          </div>
          <div className="help-item">
            <h3>Q: Are refunds available for physical products?</h3>
            <p>
              A: Yes, damaged or defective physical products can be refunded or replaced within 7 days
              of delivery.
            </p>
          </div>
        </div>

        <div className="help-section">
          <h2>4. AI Tutor</h2>
          <div className="help-item">
            <h3>Q: What is the AI Tutor?</h3>
            <p>
              A: The AI Tutor is a personal digital teacher that provides instant answers and explanations
              for any academic question.
            </p>
          </div>
          <div className="help-item">
            <h3>Q: Are AI Tutor answers always correct?</h3>
            <p>
              A: While AI Tutor provides fast solutions, students should verify answers with trusted
              sources or teachers.
            </p>
          </div>
        </div>

        <div className="help-section">
          <h2>5. Student Community</h2>
          <div className="help-item">
            <h3>Q: Can I post in the Student Community?</h3>
            <p>
              A: Yes! Share notes, ask questions, or discuss topics with fellow students. Please follow
              community guidelines.
            </p>
          </div>
          <div className="help-item">
            <h3>Q: What content is prohibited?</h3>
            <p>
              A: Offensive, abusive, or inappropriate content is strictly prohibited and may lead to account
              suspension.
            </p>
          </div>
        </div>

        <div className="help-section contact-section">
          <h2>6. Contact Support</h2>
          <p>For further help, contact our support team:</p>
          <div className="contact-info">
            <a href="mailto:support@examhero.app" className="contact-link">
              📧 support@examhero.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
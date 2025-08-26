import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Exam Hero?",
      answer: "Exam Hero is a smart learning app designed for SSC & HSC students in Bangladesh. It allows students to practice past board questions, take live exams, watch video solutions, and get AI-based instant answers."
    },
    {
      question: "Who can use Exam Hero?",
      answer: "Any student preparing for SSC, HSC, or equivalent board exams can use Exam Hero. It's also suitable for students who want chapter-wise practice or access to past year questions."
    },
    {
      question: "Do I need an internet connection to use Exam Hero?",
      answer: "Yes, an internet connection is required to access live exams, video solutions, AI tutor, and community features."
    },
    {
      question: "Is Exam Hero free?",
      answer: "Some features of Exam Hero are free (basic questions & practice), while premium features (video solutions, AI tutor, full exam system) require subscription or payment."
    },
    {
      question: "How can I access premium features?",
      answer: "Premium features can be purchased directly in the app using secure payment methods like mobile banking, cards, or online payment gateways."
    },
    {
      question: "What is the AI Tutor?",
      answer: "The AI Tutor is a digital teacher within the app. You can ask any academic question and get an instant AI-generated explanation."
    },
    {
      question: "How do Live Exams work?",
      answer: "Live Exams are scheduled online tests with a timer, instant results, rankings, and a merit list—providing a real board exam experience."
    },
    {
      question: "Can I buy study products in the app?",
      answer: "Yes! The Student Shop allows you to buy educational products directly from the app with just a few clicks."
    },
    {
      question: "Is my data safe with Exam Hero?",
      answer: "Yes, your personal and academic data is protected under our Privacy Policy and stored securely."
    },
    {
      question: "How can I contact support?",
      answer: "For any issues, contact us at: support@examhero.app"
    }
  ];

  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQ - Exam Hero</title>
        <meta name="description" content="Frequently Asked Questions about Exam Hero - Smart Learning App for SSC & HSC students. Get answers about features, pricing, AI tutor, and more." />
        <meta name="keywords" content="exam hero faq, frequently asked questions, ssc hsc help, exam preparation questions" />
        <meta property="og:title" content="FAQ - Exam Hero" />
        <meta property="og:description" content="Get answers to frequently asked questions about Exam Hero smart learning platform." />
      </Helmet>
      <div className="faq-content">
        <div className="faq-header">
          <h1 className="faq-title">❓ FAQ</h1>
          <h2 className="faq-subtitle">Exam Hero – Frequently Asked Questions (FAQ)</h2>
          <p className="faq-intro">
            Find answers to the most common questions about Exam Hero. If you can't find what you're looking for, 
            feel free to contact our support team.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{index + 1}. {faq.question}</h3>
                <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
                {index === 9 && (
                  <div className="contact-info">
                    <a href="mailto:support@examhero.app" className="contact-email">
                      📧 support@examhero.app
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <div className="help-section">
            <h3>Still have questions?</h3>
            <p>Our support team is here to help you succeed in your studies.</p>
            <a href="mailto:support@examhero.app" className="help-button">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
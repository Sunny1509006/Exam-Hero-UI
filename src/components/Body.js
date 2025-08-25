import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <main className="body">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Exam Hero - কম সময়েই স্মার্ট প্রস্তুতি</h1>
            <p>বোর্ড প্রশ্ন ( CQ & MCQ ), অধ্যায়ভিত্তিক সমাধান, লাইভ এক্সাম আর সলভিং ভিডিওসহ দুর্দান্ত ফিচারের সমাহার।</p>
            <div className="download-section">
              <h3 className="download-title">Download our App</h3>
              <div className="hero-buttons">
                <a href="#" className="btn-download play-store">
                  <span className="store-icon">📱</span>
                  Play Store
                </a>
                <a href="#" className="btn-download app-store">
                  <span className="store-icon">🍎</span>
                  App Store
                </a>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/exam-hero.png" style={{height: '400px', width: '300px'}}/>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <h3>বোর্ড MCQ</h3>
              <p>প্রতিটি বোর্ড প্রশ্ন থাকছে ব্যাখ্যাসহ পড়ার সুবিধা, পরীক্ষা দেওয়ার সুযোগ এবং সলভিং ভিডিও।</p>
            </div>
            <div className="feature-card">
              <h3>বোর্ড CQ</h3>
              <p>প্রতিটি সৃজনশীল প্রশ্নের জন্য আলাদা ভিডিও ও সমাধানকৃত PDF।</p>
            </div>
            <div className="feature-card">
              <h3>লাইভ এক্সাম</h3>
              <p>প্রতিদিন লাইভ এক্সাম মাধ্যমে নিজেকে যাচাই এর সুযোগ।</p>
            </div>
            <div className="feature-card">
              <h3>লিডারবোর্ড</h3>
              <p>পরীক্ষার পর বিশ্লেষণ, দুর্বলতা চিহ্নিতকরণ এবং স্মার্ট প্রস্তুতির সুযোগ।</p>
            </div>
            <div className="feature-card">
              <h3>বুকমার্ক</h3>
              <p>অতি গুরুত্বপূর্ণ প্রশ্নগুলো একজায়গায় সংরক্ষণ করার সুবিধা।</p>
            </div>
            <div className="feature-card">
              <h3>লাইভ সাপোর্ট</h3>
              <p>সার্বক্ষণিক আমাদের টিচার প্যানেলের সঙ্গে যোগাযোগ করার সুবিধা।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Panel Section */}
      <section className="teacher-panel">
        <div className="container">
          <div className="teacher-content">
            <div className="teacher-info">
              <h2>টিচার প্যানেল</h2>
              <h3>আমাদের অভিজ্ঞ টিচার প্যানেল – আপনার সাফল্যের সঙ্গী</h3>
              <p>ভালো শিক্ষক মানে সঠিক দিকনির্দেশনা, শক্তিশালী প্রস্তুতি।</p>
              <a href="https://www.facebook.com/share/v/1GLwyMy3u7/" target="_blank" rel="noopener noreferrer" className="teacher-link">
                টিচার প্যানেল দেখুন
              </a>
            </div>
            <div className="teacher-video">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <p>টিচার প্যানেল ভিডিও</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
};

export default Body;
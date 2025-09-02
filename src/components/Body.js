import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import './Body.css';

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  
  // Teacher carousel state
  const [currentTeacher, setCurrentTeacher] = useState(0);
  const teachers = [
    {
      id: 1,
      name: "R.I. Rosni",
      designation: "Dakha University",
      image: "/Images/R.I. Rosni.jpeg"
    },
    {
      id: 2,
      name: "Niloy",
      designation: "Jahangirnagar University",
      image: "/Images/Niloy.jpeg"
    },
    {
      id: 3,
      name: "Rabbi",
      designation: "Jahangirnagar University",
      image: "/Images/Rabbi.jpeg"
    },
    {
      id: 4,
      name: "Rahat Islam",
      designation: "DMC",
      image: "/Images/Rahat Islam.jpeg"
    },
    {
      id: 5,
      name: "Imran Hussain",
      designation: "Dakha University",
      image: "/Images/Imran Hussain.jpeg"
    }
  ];
  const totalTeachers = teachers.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Teacher carousel functions
  const nextTeacher = useCallback(() => {
    setCurrentTeacher((prev) => (prev + 1) % totalTeachers);
  }, [totalTeachers]);

  const prevTeacher = () => {
    setCurrentTeacher(currentTeacher === 0 ? totalTeachers - 1 : currentTeacher - 1);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Auto-slide functionality for teacher carousel
  useEffect(() => {
    const teacherInterval = setInterval(() => {
      nextTeacher();
    }, 5000); // Change teacher every 5 seconds

    return () => clearInterval(teacherInterval);
  }, [nextTeacher]);

  return (
    <main className="body">
      <Helmet>
        <title>Exam Hero - কম সময়েই স্মার্ট প্রস্তুতি</title>
        <meta name="description" content="Exam Hero - কম সময়েই স্মার্ট প্রস্তুতি। বোর্ড প্রশ্ন, অধ্যায়ভিত্তিক সমাধান, লাইভ এক্সাম আর সলভিং ভিডিওসহ দুর্দান্ত ফিচারের সমাহার।" />
        <meta name="keywords" content="exam hero, ssc, hsc, board exam, bangladesh education, smart learning, online exam" />
        <meta property="og:title" content="Exam Hero - কম সময়েই স্মার্ট প্রস্তুতি" />
        <meta property="og:description" content="বোর্ড প্রশ্ন, অধ্যায়ভিত্তিক সমাধান, লাইভ এক্সাম আর সলভিং ভিডিওসহ দুর্দান্ত ফিচারের সমাহার।" />
        <meta property="og:type" content="website" />
      </Helmet>
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
            <div className="image-slider">
              <div className="slider-container">
                <div className="slider-track" style={{transform: `translateX(-${currentSlide * 25}%)`}}>
                  <div className="slide">
                    <img src="/Images/1.png" alt="Exam Hero App" />
                  </div>
                  <div className="slide">
                    <img src="/Images/2.png" alt="Features" />
                  </div>
                  <div className="slide">
                    <img src="/Images/3.png" alt="Dashboard" />
                  </div>
                  <div className="slide">
                    <img src="/Images/4.png" alt="Exams" />
                  </div>
                </div>
                <button className="slider-btn prev" onClick={prevSlide}>
                  ❮
                </button>
                <button className="slider-btn next" onClick={nextSlide}>
                  ❯
                </button>
              </div>
              <div className="slider-dots">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
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
            <div className="feature-card community">
              <h3>স্টুডেন্ট কমিউনিটি</h3>
              <p>যেখানে শিক্ষার্থীরা প্রশ্ন, অভিজ্ঞতা ও আইডিয়া শেয়ার করে একসাথে শিখবে ও একে অপরকে সাহায্য করবে।</p>
            </div>
            <div className="feature-card shop">
              <h3>স্টুডেন্ট শপ</h3>
              <p>Exam Hero App-এ থাকছে Student Shop, যেখানে শিক্ষার্থীরা সহজেই প্রয়োজনীয় বই, নোট, মডেল টেস্ট ও স্টেশনারি পাবে। পড়াশোনার প্রতিটি উপকরণ এখন থাকবে এক ক্লিকের দূরত্বে।</p>
            </div>
            <div className="feature-card ai">
              <h3>AI</h3>
              <p>Exam Hero App-এ AI ফিচার শিক্ষার্থীদের দেবে তাৎক্ষণিক সমাধান, পার্সোনাল সাজেশন আর স্মার্ট রিভিশনের সুবিধা।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Panel Section */}
      <section className="teacher-panel">
        <div className="container">
          
          
          <div className="teacher-panel-content">
            
            <div className="teacher-panel-left">
              <h3 className="teacher-panel-heading">আমাদের অভিজ্ঞ টিচার প্যানেল – আপনার সাফল্যের সঙ্গী</h3>
              <p className="teacher-panel-description">ভালো শিক্ষক মানে সঠিক দিকনির্দেশনা, শক্তিশালী প্রস্তুতি।</p>
            </div>
          </div>
          
          <div className="our-team-header ">
            <h2 className="team-title">OUR TEACHER</h2>
            
            <div className="team-carousel">
              <div className="team-carousel-container">
              <button className="team-nav-btn prev" onClick={prevTeacher}>
                ❮
              </button>
              
              <div className="team-showcase">
                <div className="team-images-stack">
                  {teachers.map((teacher, index) => {
                    const isActive = index === currentTeacher;
                    const isPrev = index === (currentTeacher - 1 + totalTeachers) % totalTeachers;
                    const isNext = index === (currentTeacher + 1) % totalTeachers;
                    
                    let position = 'hidden';
                    if (isActive) position = 'center';
                    else if (isPrev) position = 'left';
                    else if (isNext) position = 'right';
                    
                    return (
                      <div 
                        key={teacher.id} 
                        className={`team-image-card ${position}`}
                      >
                        <img src={teacher.image} alt={teacher.name} />
                      </div>
                    );
                  })}
                </div>
                
                <div className="team-member-info">
                  <h3 className="member-name">{teachers[currentTeacher].name}</h3>
                  <div className="member-title-line"></div>
                  <p className="member-designation">{teachers[currentTeacher].designation}</p>
                </div>
              </div>
              
              <button className="team-nav-btn next" onClick={nextTeacher}>
                ❯
              </button>
            </div>
            
            <div className="team-dots">
              {teachers.map((_, index) => (
                <button
                  key={index}
                  className={`team-dot ${currentTeacher === index ? 'active' : ''}`}
                  onClick={() => setCurrentTeacher(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>


    </main>
  );
};

export default Body;
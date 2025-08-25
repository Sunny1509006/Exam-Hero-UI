import React, { useState, useEffect, useCallback } from 'react';
import './Body.css';

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  
  // Teacher carousel state
  const [currentTeacher, setCurrentTeacher] = useState(0);
  const teachers = [
    {
      id: 1,
      name: "Dr. Ahmed Rahman",
      designation: "Physics Expert",
      image: "/images/teacher-1.jpg"
    },
    {
      id: 2,
      name: "Prof. Fatima Khan",
      designation: "Mathematics Specialist",
      image: "/images/teacher-2.jpg"
    },
    {
      id: 3,
      name: "Mr. Karim Hassan",
      designation: "Chemistry Teacher",
      image: "/images/teacher-3.jpg"
    },
    {
      id: 4,
      name: "Ms. Rashida Begum",
      designation: "Biology Expert",
      image: "/images/teacher-4.jpg"
    },
    {
      id: 5,
      name: "Dr. Mahmud Ali",
      designation: "English Literature",
      image: "/images/teacher-5.jpg"
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
                <div className="slider-track" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                  <div className="slide">
                    <img src="/images/exam-hero.png" alt="Exam Hero App" />
                  </div>
                  <div className="slide">
                    <img src="/images/exam-hero-2.png" alt="Features" />
                  </div>
                  <div className="slide">
                    <img src="/images/exam-hero-3.png" alt="Dashboard" />
                  </div>
                  <div className="slide">
                    <img src="/images/exam-hero-4.png" alt="Exams" />
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
          </div>
        </div>
      </section>

      {/* Teacher Panel Section */}
      <section className="teacher-panel">
        <div className="container">
          
          
          <div className="team-carousel">
            <div className="our-team-header">
            <h2 className="team-title">OUR TEACHER</h2>
          </div>
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
      </section>


    </main>
  );
};

export default Body;
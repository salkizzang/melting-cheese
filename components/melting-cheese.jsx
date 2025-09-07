'use client'
import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import './modern-styles.css';
import './product-modal-styles.css';
import { Header } from './header';
import Collection from './Collection';
import BestItems from './BestItems';


  // MainVisual 컴포넌트
const MainVisual = () => {
  const slides = [
    {
      id: 1,
      title: 'We present you a day of a fairytale.',
      description: 'Handmade leather goods for your special moments',
      imageUrl: 'main_2.jpeg'
    },
  ];

    return (
      <section className="main-visual">
        {/* 배경 블롭 애니메이션 */}
        <div className="blob" style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, #FFB3BA, #FFDFBA)',
          zIndex: 0,
          opacity: 0.3
        }}></div>
        <div className="blob" style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, #B3FFE3, #E0B3FF)',
          zIndex: 0,
          animationDelay: '10s',
          opacity: 0.3
        }}></div>
        
        <div className="main-slider">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`slide active`}
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
              }}
            />
          ))}
        </div>
        
        <div className="main-text">
          <h1>{slides[0].title}</h1>
          <p>{slides[0].description}</p>
        </div>
      </section>
    );
  };


  // BrandStory 컴포넌트
  const BrandStory = () => {
    return (
      <section id="brand"  className="section brand-story section-transition" style={{ backgroundImage: `url('new_2.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="section-title fade-in gradient-text" style={{fontSize: '3rem'}}>Brand Story</h2>
        <div className="story-content fade-in glass" style={{padding: '2rem', borderRadius: '20px', maxWidth: '800px', margin: '2rem auto'}}>
          <p className='brand-p animate-fadeInUp' style={{animationDelay: '0.2s'}}>사랑스러운 무드의 패브릭 소품들을 만들어요!🎠🎂</p>
          <p className='brand-p animate-fadeInUp' style={{animationDelay: '0.4s'}}>쳐다만 보는 것만으로도 하루 종일 행복하게 만들어줄 '멜팅 치즈'의 패브릭 아이템들을 제작하고 있어요.</p>
          <p className='brand-p animate-fadeInUp' style={{animationDelay: '0.6s'}}>오로지 당신을 위해! 당신에게 행복한 하루를 선물하기 위해 시작된 브랜드랍니다.💗</p>
        </div>
        <div className="brand-image-wrapper fade-in animate-float">
          <div className="brand-image neo-card" style={{ backgroundImage: `url('home_1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
      </section>
    );
  };

// App 컴포넌트 - 전체 페이지 구성
const MeltingCheese = () => {
    // 페이지 로드 시 스크롤 위치 상단으로 리셋
    useEffect(() => {
      window.scrollTo(0, 0);
      
      // DOM이 완전히 로드된 후에 실행할 초기화 코드
      const initializeComponents = () => {
        // 스크롤 애니메이션 초기화
        initScrollAnimation();
      };
      
      // DOMContentLoaded 이벤트가 이미 발생했다면 바로 초기화 실행
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initializeComponents();
      } else {
        // 아니라면 이벤트 리스너 추가
        document.addEventListener('DOMContentLoaded', initializeComponents);
      }
      
      // 이벤트 리스너 정리
      return () => {
        document.removeEventListener('DOMContentLoaded', initializeComponents);
      };
    }, []);
    
    // 스크롤 애니메이션 초기화 함수
    const initScrollAnimation = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      fadeElements.forEach(element => {
        observer.observe(element);
      });
    };

    return (
      <div className="app">
        <Header />
        <main>
          <MainVisual />
          <Collection />
          <BestItems />
          <BrandStory />
        </main>
      </div>
    );
};

export default MeltingCheese;
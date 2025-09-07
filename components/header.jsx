
'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const prevScrollPosRef = useRef(0);

    // 모바일 여부 체크
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768); // 768px 이하를 모바일로 간주
      };
      
      // 초기 확인
      checkMobile();
      
      // 리사이즈 이벤트 리스너 추가
      window.addEventListener('resize', checkMobile);
      
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }, []);

    // 스크롤 감지
    useEffect(() => {
      if (typeof window !== "undefined") {
        prevScrollPosRef.current = window.scrollY;

        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
          prevScrollPosRef.current = currentScrollPos;

          if (currentScrollPos > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    const moveNoticeMenu = () => {
      console.log('노티스 화면 이동')
    }

    return (
      <>
        <header className={scrolled || isMobile ? 'scrolled' : ''}>
          <div className="logo" onClick={()=>window.scrollTo(0,0)}>MeltingCheese</div>
          
          {!scrolled && !isMobile ? (
            // 스크롤 전 + 데스크탑 화면에서만 메뉴 표시
            <ul className="nav-menu">
              <li><a href="#collection">Products</a></li>
              <li><a href="#brand">About</a></li>
              <li><Link href={'/notice'}>Notice</Link></li> 
              <li><a href="#contact">Contact</a></li>
            </ul>
          ) : (
            // 스크롤 후 또는 모바일 화면에서는 메뉴 버튼 표시
            <div className="mobile-menu-btn" onClick={toggleMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="yellow" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 6H21" stroke="yellow" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18H21" stroke="yellow" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          )}
        </header>

        {/* 모바일 메뉴 */}
        <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-overlay" onClick={closeMenu}></div>
          <div className="mobile-menu-container">
            <div className="mobile-menu-header">
              <div className="logo">MeltingCheese</div>
              <div className="close-btn" onClick={closeMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <ul className="mobile-nav-menu">
              <li><a href="#collection" onClick={closeMenu}>Products</a></li>
              <li><a href="#brand" onClick={closeMenu}>About</a></li>
              <li><Link href={'/notice'}>Notice</Link></li> 
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </div>
        </div>
      </>
    );
  };
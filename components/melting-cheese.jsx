  'use client'
  import React, { useState, useEffect, useRef,
    useLayoutEffect, useCallback, useMemo } from 'react';
  import './style.css';// Header 컴포넌트 수정
  import './modern-styles.css'; // 모던 스타일 추가
  import './product-modal-styles.css'; // 상품 모달 스타일 추가
  // CSS 가져오기
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import Slider from 'react-slick';
import Link from 'next/link';
import { Header } from './header';


  // const Header = () => {
  //   const [scrolled, setScrolled] = useState(false);
  //   const [isMobile, setIsMobile] = useState(false);
  //   const [menuOpen, setMenuOpen] = useState(false);
  //   const prevScrollPosRef = useRef(0);

  //   // 모바일 여부 체크
  //   useEffect(() => {
  //     const checkMobile = () => {
  //       setIsMobile(window.innerWidth <= 768); // 768px 이하를 모바일로 간주
  //     };
      
  //     // 초기 확인
  //     checkMobile();
      
  //     // 리사이즈 이벤트 리스너 추가
  //     window.addEventListener('resize', checkMobile);
      
  //     return () => {
  //       window.removeEventListener('resize', checkMobile);
  //     };
  //   }, []);

  //   // 스크롤 감지
  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       prevScrollPosRef.current = window.scrollY;

  //       const handleScroll = () => {
  //         const currentScrollPos = window.scrollY;
  //         prevScrollPosRef.current = currentScrollPos;

  //         if (currentScrollPos > 50) {
  //           setScrolled(true);
  //         } else {
  //           setScrolled(false);
  //         }
  //       };

  //       window.addEventListener("scroll", handleScroll);
  //       return () => {
  //         window.removeEventListener("scroll", handleScroll);
  //       };
  //     }
  //   }, []);

  //   const toggleMenu = () => setMenuOpen(!menuOpen);
  //   const closeMenu = () => setMenuOpen(false);

  //   const moveNoticeMenu = () => {
  //     console.log('노티스 화면 이동')
  //   }

  //   return (
  //     <>
  //       <header className={scrolled || isMobile ? 'scrolled' : ''}>
  //         <div className="logo" onClick={()=>window.scrollTo(0,0)}>MeltingCheese</div>
          
  //         {!scrolled && !isMobile ? (
  //           // 스크롤 전 + 데스크탑 화면에서만 메뉴 표시
  //           <ul className="nav-menu">
  //             <li><a href="#collection">Collection</a></li>
  //             <li><a href="#brand">Brand</a></li>
  //             <li><a onClick={()=>{console.log('노티스')}}>Notice</a></li> 
  //             <li><a href="#meetme">Meet Me!</a></li>
  //           </ul>
  //         ) : (
  //           // 스크롤 후 또는 모바일 화면에서는 메뉴 버튼 표시
  //           <div className="mobile-menu-btn" onClick={toggleMenu}>
  //             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //               <path d="M3 12H21" stroke="yellow" strokeWidth="2" strokeLinecap="round" />
  //               <path d="M3 6H21" stroke="yellow" strokeWidth="2" strokeLinecap="round" />
  //               <path d="M3 18H21" stroke="yellow" strokeWidth="2" strokeLinecap="round" />
  //             </svg>
  //           </div>
  //         )}
  //       </header>

  //       {/* 모바일 메뉴 */}
  //       <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
  //         <div className="mobile-menu-overlay" onClick={closeMenu}></div>
  //         <div className="mobile-menu-container">
  //           <div className="mobile-menu-header">
  //             <div className="logo">MeltingCheese</div>
  //             <div className="close-btn" onClick={closeMenu}>
  //               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                 <path d="M18 6L6 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  //                 <path d="M6 6L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  //               </svg>
  //             </div>
  //           </div>
  //           <ul className="mobile-nav-menu">
  //             <li><a href="#collection" onClick={closeMenu}>Collection</a></li>
  //             <li><a href="#brand" onClick={closeMenu}>Brand</a></li>
  //             <li><Link href={'/notice'}>Notice</Link></li> 
  //             <li><a href="#meetme" onClick={closeMenu}>Meet Me!</a></li>
  //           </ul>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  // MainVisual 컴포넌트
  const MainVisual = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // 슬라이드 데이터 배열
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
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
              }}
            />
          ))}
        </div>
        
        <div className="main-text">
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].description}</p>
        </div>
      </section>
    );
  };

  const Collection = () => {
    const [visibleItems, setVisibleItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [viewMode, setViewMode] = useState('slider'); // 'grid' 또는 'slider' 모드
    const collectionRef = useRef(null);
    const sliderRef = useRef(null);
    
    // React Slick 설정
    // Enhanced mobile-friendly slider settings
   // 모바일 최적화 슬라이더 설정
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipeToSlide: true, // 사용자가 원하는 만큼 스와이프할 수 있도록
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: false, // 가운데 정렬 비활성화
        adaptiveHeight: true // 슬라이드 높이 자동 조절
      }
    }
  ]
};
    // 스마트스토어에서 가져온 실제 제품 데이터
    const productData = [
      // 다이어리 커버 카테고리
      {
        id: 1,
        title: '📖다이어리',
        description: '소중한 기록을 담는 특별한 공간',
        imageUrl: 'home_2.jpg',
        products: [
          { 
            id: 11412631906, 
            name: '멜팅치즈 핑크 핑크! B6 A5 다이어리커버 북커', 
            price: '18,000원', 
            imageUrl: 'https://shop-phinf.pstatic.net/20250130_203/1738239823622Q14aE_JPEG/47714951635971800_131710026.jpg',
            storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/11412631906'
          },
          { 
            id: 11412740579, 
            name: '멜팅치즈 체리가조아 B6 A5 다이어리커버 북커버', 
            price: '18,000원', 
            imageUrl: 'https://shop-phinf.pstatic.net/20250130_157/1738241615592MaBXn_JPEG/85206870385011873_720663754.jpg',
            storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/11412740579'
          },
          { 
            id: 11412653127, 
            name: '멜팅치즈 메이크러브 B6 A5 다이어리커버 북커버', 
            price: '18,000원', 
            imageUrl: 'https://shop-phinf.pstatic.net/20250130_139/1738241514093h2AhL_JPEG/85389036305500674_2076868710.jpg',
            storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/11412653127'
          },
          { 
            id: 11412598085, 
            name: '멜팅치즈 러브쿼츠 B6 A5 다이어리 커버 북커버', 
            price: '18,000원', 
            imageUrl: 'https://shop-phinf.pstatic.net/20250130_232/1738238890904My6De_JPEG/22512495792368945_529596346.jpg',
            storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/11412598085'
          },

          { 
            id: 10955295512, 
            name: '멜팅치즈 봄봄 B6 다이어리 커버', 
            price: '18,000원', 
            imageUrl: 'https://shop-phinf.pstatic.net/20241005_209/1728097904535W1rL7_JPEG/62230721932034527_373069027.jpg',
            storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/10955295512'
          },
          { 
            id: 10915062408, 
            name: '멜팅치즈 딸기가 조아 B6 다이어리 커버', 
            price: '18,000원', 
            imageUrl: 'https://shop-phinf.pstatic.net/20240925_135/17271903614689ODVp_JPEG/61323212613781591_2049092579.jpg',
            storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/10915062408'
          },
          { 
            id: 10095241745, 
            name: '멜팅치즈 리본통통 B6 다이어리 커버 북커버', 
            price: '18,000원', 
            imageUrl: 'https://shop-phinf.pstatic.net/20240319_78/1710858230095n3Gsd_JPEG/111994057913537578_391143050.jpg',
            storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/10095241745'
          },
          { 
            id: 9556670916, 
            name: '멜팅치즈 베이비베어 포켓 B6 다이어리커버', 
            price: '16,000원', 
            imageUrl: 'https://shop-phinf.pstatic.net/20231203_159/1701591171358Nrbh9_JPEG/7498863218062176_238200941.jpg',
            storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/9556670916'
          },
          { 
            id: 9860192059, 
            name: '멜팅치즈 하트체크 B6 다이어리커버', 
            price: '16,000원', 
            imageUrl: 'https://shop-phinf.pstatic.net/20240121_136/1705843018341746Rw_JPEG/106978907034080053_1679672649.jpg',
            storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/9860192059'
          },
          { 
            id: 9708753991, 
            name: '멜팅치즈 블랙 도트 리본 B6 다이어리 커버', 
            price: '16,000원', 
            imageUrl: 'https://shop-phinf.pstatic.net/20231227_279/1703676376179XmV4c_JPEG/104812159887334743_1590457978.jpg',
            storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/9708753991'
          }
        ]
      },
      // 일상 소품 카테고리 
      {
        id: 2,
        title: '👛Wallet',
        description: '특별한 순간을 더욱 빛내주는 소품',
        imageUrl: 'home_4.jpg',
        products: [
        ]
      },
      // 시즌 컬렉션 카테고리
      {
        id: 3,
        title: '🏠Home',
        description: '계절마다 달라지는 특별한 감성',
        imageUrl: 'home_3.jpg',
        products: [
        ]
      },
    ];


    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      setShowModal(true);
      // 모달 열릴 때 스크롤 방지
      document.body.style.overflow = 'hidden';
    };

    // 모달 닫기 핸들러
    const closeModal = () => {
      setShowModal(false);
      setSelectedCategory(null);
      // 모달 닫힐 때 스크롤 복원
      document.body.style.overflow = 'auto';
    };

    // 스마트 스토어로 이동하는 핸들러
    const goToStore = (storeUrl) => {
      window.open(storeUrl, '_blank');
    };



    // 스크롤에 따른 아이템 표시 애니메이션
    useEffect(() => {
      // 초기에 모든 항목을 보이게 설정 (애니메이션은 유지)
      const itemIds = productData.map(item => item.id);
      setVisibleItems(itemIds);
      
      // IntersectionObserver 설정
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const itemId = parseInt(entry.target.dataset.id);
              if (!visibleItems.includes(itemId)) {
                setVisibleItems((prev) => [...prev, itemId]);
              }
            }
          });
        },
        { 
          threshold: 0.15,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      // 컬렉션 아이템들에 대해 관찰 시작
      const collectionItems = document.querySelectorAll('.collection-item');
      collectionItems.forEach((item) => {
        observer.observe(item);
      });

      return () => {
        collectionItems.forEach((item) => {
          observer.unobserve(item);
        });
      };
    }, []);

   // Collection 컴포넌트의 주요 렌더링 부분 수정
return (
  <section className="section collection" ref={collectionRef} id="collection" 
  // style={{backgroundColor: '#e8bfbfa8'}}
  style={{ backgroundImage: `url('new_3.jpeg')`, backgroundSize : 'cover' }}
    >
    <h2 className="section-title fade-in" style={{color: '#87b27a'}}>Collection</h2>
    
    {/* 컬렉션 그리드 */}
    <div className="collection-grid">
      {productData.map((category) => (
        <div 
          key={category.id}
          className={`collection-item fade-in ${visibleItems.includes(category.id) ? 'visible' : ''}`} 
          data-id={category.id}
          style={{ 
            transitionDelay: `${(category.id - 1) * 0.2}s`,
          }}
          onClick={() => handleCategoryClick(category)}
        >
          <div 
            className="image-container" 
            style={{ 
              backgroundImage: `url(${category.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="collection-overlay">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* 상품 모달 */}
{showModal && selectedCategory && (
  <div className="products-modal">
    <div className="modal-overlay" onClick={closeModal}></div>
    <div className="modal-content">
      <div className="modal-header">
        <h3>{selectedCategory.title}</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="slider-view">
        <Slider ref={sliderRef} {...sliderSettings}>
          {selectedCategory.products.map((product, index) => (
            <div key={product.id} className="slider-item-container">
              <div className="slider-product-item">
                {/* 배지 */}
                <div className="product-badges">
                  {index % 3 === 0 && <span className="badge-new">NEW</span>}
                  {index % 4 === 0 && <span className="badge-sale">SALE</span>}
                </div> 
                
                <div 
                  className="product-image" 
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                >
                  {/* 퀵뷰 오버레이 */}
                  <div className="product-quickview">
                    <div className="quickview-buttons">
                      <button 
                        className="btn-quickview btn-view-detail"
                        onClick={() => goToStore(product.storeUrl)}
                      >
                        상품 상세보기
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p className="price">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
)}
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


  // FooterLinks 컴포넌트
  const FooterLinks = ({ title, links }) => {
    return (
      <div className="footer-links">
        <h3>{title}</h3>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Footer 컴포넌트
  const Footer = () => {
    const shoppingLinks = [
      { text: '주문 조회', url: '#' },
      { text: '배송 정보', url: '#' },
      { text: '교환 및 반품', url: '#' },
      { text: '결제 방법', url: '#' },
    ];

    const supportLinks = [
      { text: '자주 묻는 질문', url: '#' },
      { text: '문의하기', url: '#' },
      { text: '이용약관', url: '#' },
      { text: '개인정보처리방침', url: '#' },
    ];

    const brandLinks = [
      { text: '브랜드 스토리', url: '#' },
      { text: '매장 안내', url: '#' },
      { text: '채용 정보', url: '#' },
      { text: '뉴스 & 이벤트', url: '#' },
    ];

    return (
      <footer>
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">MELTING CHEESE</div>
            <p>(주)멜팅치즈 | 대표이사: 홍길동</p>
            <p>서울특별시 강남구 테헤란로 123</p>
            <p>사업자등록번호: 123-45-67890</p>
            <p>고객센터: 1588-1234 (평일 10:00 - 18:00)</p>
            <p>이메일: info@meltingcheese.kr</p>
            <div className="social-links">
              <a href="#" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47033 10.1584C8.84861 9.40685 9.45416 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 6.5H17.51" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <FooterLinks title="쇼핑 정보" links={shoppingLinks} />
          <FooterLinks title="고객 지원" links={supportLinks} />
          <FooterLinks title="브랜드 소개" links={brandLinks} />
        </div>
        <div className="copyright">
          © 2025 MELTING CHEESE. All Rights Reserved.
        </div>
      </footer>
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
          <BrandStory />
        </main>
        {/* <Footer /> */}
      </div>
    );
  };

  export default MeltingCheese;
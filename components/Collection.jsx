'use client';

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productData } from '../data/smartstore-products';
import './style.css';
import './modern-styles.css';
import './product-modal-styles.css';

const Collection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const collectionRef = useRef(null);
  const sliderRef = useRef(null);
    
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
    swipeToSlide: true,
    arrows: false, // 화살표 버튼 제거
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: false,
          adaptiveHeight: true
        }
      }
    ]
  };

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

  return (
    <section className="section collection" ref={collectionRef} id="collection" 
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

export default Collection;
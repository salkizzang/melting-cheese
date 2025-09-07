'use client';

import React, { useEffect, useRef, useState } from 'react';
import { bestItems } from '../data/smartstore-products';
import './modern-styles.css';
import './best-items-styles.css';

const BestItems = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    const scrollSpeed = 1; // 픽셀 단위 스크롤 속도

    const autoScroll = () => {
      if (!isHovered && container) {
        container.scrollLeft += scrollSpeed;
        
        // 끝에 도달하면 처음으로 돌아가기
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered]);

  const handleItemClick = (item) => {
    window.open(item.storeUrl, '_blank');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < Math.floor(rating) ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="best-items-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Best Items
          </h2>
        </div>

        <div 
          className="best-items-scroll-container"
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="best-items-grid">
            {/* 원본 아이템들 */}
            {bestItems.map((item) => (
              <div
                key={`original-${item.id}`}
                className="best-item-card neo-card"
                onClick={() => handleItemClick(item)}
              >
                {/* 할인 배지 */}
                {item.discount && (
                  <div className="discount-badge">
                    -{item.discount}
                  </div>
                )}

                {/* 베스트 배지 */}
                <div className="best-badge">
                  <span>💖 BEST</span>
                </div>

                {/* 상품 이미지 */}
                <div className="item-image-container">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="image-overlay">
                    <button className="quick-shop-btn">
                      <span>🛒 바로구매</span>
                    </button>
                  </div>
                </div>

                {/* 상품 정보 */}
                <div className="item-info">
                  <div className="item-category">{item.category}</div>
                  <h3 className="item-name">{item.name}</h3>
                  
                  {/* 별점 및 리뷰 */}
                  <div className="item-rating">
                    <div className="stars">
                      {renderStars(item.rating)}
                    </div>
                    <span className="rating-text">
                      {item.rating} ({item.reviewCount})
                    </span>
                  </div>

                  {/* 가격 */}
                  <div className="item-price">
                    {item.originalPrice && (
                      <span className="original-price">₩{item.originalPrice}</span>
                    )}
                    <span className="current-price">₩{item.price}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* 무한 스크롤을 위한 복제 아이템들 */}
            {bestItems.map((item) => (
              <div
                key={`duplicate-${item.id}`}
                className="best-item-card neo-card"
                onClick={() => handleItemClick(item)}
              >
                {/* 할인 배지 */}
                {item.discount && (
                  <div className="discount-badge">
                    -{item.discount}
                  </div>
                )}

                {/* 베스트 배지 */}
                <div className="best-badge">
                  <span>💖 BEST</span>
                </div>

                {/* 상품 이미지 */}
                <div className="item-image-container">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="item-image"
                  />
                  <div className="image-overlay">
                    <button className="quick-shop-btn">
                      <span>🛒 바로구매</span>
                    </button>
                  </div>
                </div>

                {/* 상품 정보 */}
                <div className="item-info">
                  <div className="item-category">{item.category}</div>
                  <h3 className="item-name">{item.name}</h3>
                  
                  {/* 별점 및 리뷰 */}
                  <div className="item-rating">
                    <div className="stars">
                      {renderStars(item.rating)}
                    </div>
                    <span className="rating-text">
                      {item.rating} ({item.reviewCount})
                    </span>
                  </div>

                  {/* 가격 */}
                  <div className="item-price">
                    {item.originalPrice && (
                      <span className="original-price">₩{item.originalPrice}</span>
                    )}
                    <span className="current-price">₩{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default BestItems;
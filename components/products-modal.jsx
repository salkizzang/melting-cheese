'use client';

import { useRef } from 'react';
import Slider from 'react-slick';
import './product-modal-styles.css';

export default function ProductModal({ isOpen, onClose, selectedProduct, products }) {
  const sliderRef = useRef(null);

  if (!isOpen || !selectedProduct) return null;

  // 슬라이더 설정
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

  const handleProductClick = (productUrl) => {
    window.open(productUrl, '_blank');
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="products-modal" onClick={handleOverlayClick}>
      <div className="modal-overlay"></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Related Products</h3>
          <button className="close-modal-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="slider-view">
          <Slider ref={sliderRef} {...sliderSettings}>
            {products.map((product, index) => (
              <div key={product.id} className="slider-item-container">
                <div className="slider-product-item">
                  {/* 배지 */}
                  <div className="product-badges">
                    {product.isNew && <span className="badge-new">NEW</span>}
                    {product.isBest && <span className="badge-sale">BEST</span>}
                  </div> 
                  
                  <div 
                    className="product-image" 
                    style={{ 
                      backgroundImage: `url(${product.image})`,
                      backgroundColor: '#f5f5f5'
                    }}
                  >
                    {/* 퀵뷰 오버레이 */}
                    <div className="product-quickview">
                      <div className="quickview-buttons">
                        <button 
                          className="btn-quickview btn-view-detail"
                          onClick={() => handleProductClick(product.smartstoreUrl)}
                        >
                          상품 보기
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <p className="price">₩{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
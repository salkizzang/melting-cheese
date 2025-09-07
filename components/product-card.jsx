'use client';

import './modern-styles.css';

export default function ProductCard({ product, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(product);
    }
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    // 스마트스토어로 바로 이동
    window.open(product.smartstoreUrl, '_blank');
  };

  return (
    <div className="product-card neo-card" onClick={handleClick}>
      {/* 배지 */}
      {(product.isNew || product.isBest) && (
        <div className="product-badges">
          {product.isNew && <span className="badge-new">NEW</span>}
          {product.isBest && <span className="badge-sale">BEST</span>}
        </div>
      )}
      
      {/* 이미지 */}
      <div 
        className="product-image"
        style={{ 
          backgroundImage: `url(${product.image})`,
          backgroundColor: '#f5f5f5'
        }}
      >
        {/* 호버 시 나타나는 퀵뷰 버튼 */}
        <div className="product-quickview">
          <div className="quickview-buttons">
            <button className="btn-quickview btn-view-detail" onClick={handleClick}>
              상세보기
            </button>
            <button className="btn-quickview btn-add-cart" onClick={handleBuyNow}>
              바로구매
            </button>
          </div>
        </div>
      </div>
      
      {/* 상품 정보 */}
      <div className="product-info">
        <h4>{product.name}</h4>
        <p className="product-description">{product.description}</p>
        <p className="price">₩{product.price}</p>
      </div>
    </div>
  );
}
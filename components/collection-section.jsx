'use client';

import { useState } from 'react';
import ProductCard from './product-card';
import ProductModal from './products-modal';
import { products, categories } from '../data/products';
import './modern-styles.css';

export default function CollectionSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 카테고리별 상품 필터링
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="collection" className="collection-section">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">Sweet Collection</h2>
          <p>빈티지 멜팅치즈의 특별한 컬렉션</p>
        </div>

        {/* 카테고리 탭 */}
        <div className="category-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* 상품 그리드 */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>

        {/* 스마트스토어 바로가기 버튼 */}
        <div className="store-link-container">
          <a 
            href="https://smartstore.naver.com/vintagemeltingcheese" 
            target="_blank" 
            rel="noopener noreferrer"
            className="store-link-btn gradient-bg"
          >
            <span>스마트스토어에서 더 많은 상품 보기</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7H17V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* 상품 상세 모달 */}
      {isModalOpen && (
        <ProductModal 
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          selectedProduct={selectedProduct}
          products={filteredProducts}
        />
      )}
    </section>
  );
}
// 스마트스토어 상품 데이터
export const products = [
  {
    id: 1,
    name: "빈티지 체다 치즈 케이크",
    category: "cheese-cake",
    price: "32,000",
    image: "/images/product1.jpg",
    description: "진한 체다치즈의 풍미",
    isNew: true,
    isBest: false,
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/상품번호1"
  },
  {
    id: 2,
    name: "클래식 모짜렐라 타르트",
    category: "cheese-tart",
    price: "28,000",
    image: "/images/product2.jpg",
    description: "부드러운 모짜렐라 타르트",
    isNew: false,
    isBest: true,
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/상품번호2"
  },
  {
    id: 3,
    name: "트리플 치즈 쿠키",
    category: "cheese-cookie",
    price: "18,000",
    image: "/images/product3.jpg",
    description: "세가지 치즈의 조화",
    isNew: false,
    isBest: true,
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/상품번호3"
  },
  {
    id: 4,
    name: "빈티지 치즈 브라우니",
    category: "cheese-brownie",
    price: "25,000",
    image: "/images/product4.jpg",
    description: "진한 초콜릿과 치즈의 만남",
    isNew: true,
    isBest: false,
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/상품번호4"
  },
  {
    id: 5,
    name: "리코타 치즈 마들렌",
    category: "cheese-madeleine",
    price: "22,000",
    image: "/images/product5.jpg",
    description: "부드러운 리코타 치즈 마들렌",
    isNew: false,
    isBest: false,
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/상품번호5"
  },
  {
    id: 6,
    name: "고르곤졸라 치즈 파이",
    category: "cheese-pie",
    price: "35,000",
    image: "/images/product6.jpg",
    description: "특별한 고르곤졸라 치즈 파이",
    isNew: false,
    isBest: true,
    smartstoreUrl: "https://smartstore.naver.com/vintagemeltingcheese/products/상품번호6"
  }
];

export const categories = [
  { id: 'all', name: '전체', icon: '🧀' },
  { id: 'cheese-cake', name: '치즈케이크', icon: '🍰' },
  { id: 'cheese-tart', name: '치즈타르트', icon: '🥧' },
  { id: 'cheese-cookie', name: '치즈쿠키', icon: '🍪' },
  { id: 'cheese-brownie', name: '치즈브라우니', icon: '🍫' },
  { id: 'cheese-pie', name: '치즈파이', icon: '🥐' }
];
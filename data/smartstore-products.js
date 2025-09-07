// 스마트스토어에서 가져온 실제 제품 데이터
export const productData = [
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
  // 가방 카테고리 
  {
    id: 2,
    title: '👜Bag',
    description: '일상을 더욱 특별하게 만드는 백',
    imageUrl: 'home_4.jpg',
    products: [
      // 추가 데이터를 여기에 넣을 수 있습니다
    ]
  },
  // 지갑 카테고리
  {
    id: 3,
    title: '👛Wallet',
    description: '특별한 순간을 더욱 빛내주는 소품',
    imageUrl: 'home_3.jpg',
    products: [
      // 추가 데이터를 여기에 넣을 수 있습니다
    ]
  },
  // 홈 데코 카테고리
  {
    id: 4,
    title: '🏠Home',
    description: '계절마다 달라지는 특별한 감성',
    imageUrl: 'home_1.jpg',
    products: [
      // 추가 데이터를 여기에 넣을 수 있습니다
    ]
  },
];

// 베스트 아이템 데이터
export const bestItems = [
  {
    id: 11412631906,
    name: '멜팅치즈 핑크 핑크! B6 A5 다이어리커버',
    price: '18,000',
    originalPrice: '20,000',
    discount: '10%',
    imageUrl: 'https://shop-phinf.pstatic.net/20250130_203/1738239823622Q14aE_JPEG/47714951635971800_131710026.jpg',
    storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/11412631906',
    category: '다이어리',
    isBest: true,
    rating: 4.8,
    reviewCount: 127
  },
  {
    id: 11412740579,
    name: '멜팅치즈 체리가조아 B6 A5 다이어리커버',
    price: '18,000',
    originalPrice: null,
    discount: null,
    imageUrl: 'https://shop-phinf.pstatic.net/20250130_157/1738241615592MaBXn_JPEG/85206870385011873_720663754.jpg',
    storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/11412740579',
    category: '다이어리',
    isBest: true,
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: 11412653127,
    name: '멜팅치즈 메이크러브 B6 A5 다이어리커버',
    price: '18,000',
    originalPrice: '19,000',
    discount: '5%',
    imageUrl: 'https://shop-phinf.pstatic.net/20250130_139/1738241514093h2AhL_JPEG/85389036305500674_2076868710.jpg',
    storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/11412653127',
    category: '다이어리',
    isBest: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: 11412598085,
    name: '멜팅치즈 러브쿼츠 B6 A5 다이어리 커버',
    price: '18,000',
    originalPrice: null,
    discount: null,
    imageUrl: 'https://shop-phinf.pstatic.net/20250130_232/1738238890904My6De_JPEG/22512495792368945_529596346.jpg',
    storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/11412598085',
    category: '다이어리',
    isBest: true,
    rating: 4.6,
    reviewCount: 203
  },
  {
    id: 10955295512,
    name: '멜팅치즈 봄봄 B6 다이어리 커버',
    price: '18,000',
    originalPrice: '22,000',
    discount: '18%',
    imageUrl: 'https://shop-phinf.pstatic.net/20241005_209/1728097904535W1rL7_JPEG/62230721932034527_373069027.jpg',
    storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/10955295512',
    category: '다이어리',
    isBest: true,
    rating: 4.8,
    reviewCount: 94
  },
  {
    id: 10915062408,
    name: '멜팅치즈 딸기가 조아 B6 다이어리 커버',
    price: '18,000',
    originalPrice: null,
    discount: null,
    imageUrl: 'https://shop-phinf.pstatic.net/20240925_135/17271903614689ODVp_JPEG/61323212613781591_2049092579.jpg',
    storeUrl: 'https://smartstore.naver.com/vintagemeltingcheese/products/10915062408',
    category: '다이어리',
    isBest: true,
    rating: 4.9,
    reviewCount: 178
  }
];
// Define product interface
export interface Product {
  id: string;
  thumbnail: string;
  productCode: string;
  name: string;
  category: string;
  color: string;
  season: string;
  price: number;
  status: 'draft' | 'listed' | 'unlisted' | 'abnormal';
  selected?: boolean;
}

// Mock product data
export const mockProducts: Product[] = [
  {
    id: '1',
    thumbnail: 'https://via.placeholder.com/100/99f499',
    productCode: 'AAYV126-4',
    name: '荧光浅灰绿 女 比赛上衣',
    category: '服装 - 专业比赛服装 - 比赛上衣',
    color: '荧光浅灰绿',
    season: '春季',
    price: 199.00,
    status: 'draft',
    selected: false
  },
  {
    id: '2',
    thumbnail: 'https://via.placeholder.com/100/333333',
    productCode: 'ATSV681-1',
    name: '黑色/微晶灰 男 短袖T恤',
    category: '服装 - T恤类 - 短袖T恤',
    color: '黑色/微晶灰',
    season: '春季',
    price: 249.00,
    status: 'listed',
    selected: false
  },
  {
    id: '3',
    thumbnail: 'https://via.placeholder.com/100/abd3e5',
    productCode: 'AAYV123-5',
    name: '浅靓蓝 男 比赛上衣',
    category: '服装 - 专业比赛服装 - 比赛上衣',
    color: '浅靓蓝',
    season: '春季',
    price: 199.00,
    status: 'listed',
    selected: false
  },
  {
    id: '4',
    thumbnail: 'https://via.placeholder.com/100/000000',
    productCode: 'AXTV003-1',
    name: '黑色跑步空顶帽',
    category: '配件 - 帽类 - 跑步空顶帽',
    color: '黑色',
    season: '夏季',
    price: 99.00,
    status: 'unlisted',
    selected: false
  },
  {
    id: '5',
    thumbnail: 'https://via.placeholder.com/100/ffffff',
    productCode: 'AXTV003-2',
    name: '白色跑步空顶帽',
    category: '配件 - 帽类 - 跑步空顶帽',
    color: '白色',
    season: '春季',
    price: 99.00,
    status: 'abnormal',
    selected: false
  }
];

// Function to get paginated products
export const getPaginatedProducts = (
  page: number, 
  perPage: number, 
  filters?: { productCode?: string; status?: string }
): { products: Product[]; total: number } => {
  // Apply filters if provided
  let filteredProducts = [...mockProducts];
  
  if (filters) {
    if (filters.productCode) {
      filteredProducts = filteredProducts.filter(
        product => product.productCode.toLowerCase().includes(filters.productCode.toLowerCase())
      );
    }
    
    if (filters.status && filters.status !== '请选择') {
      const statusMap = {
        '草稿': 'draft',
        '已上架': 'listed',
        '已下架': 'unlisted',
        '异常': 'abnormal'
      };
      
      const statusValue = statusMap[filters.status as keyof typeof statusMap];
      if (statusValue) {
        filteredProducts = filteredProducts.filter(
          product => product.status === statusValue
        );
      }
    }
  }
  
  // Calculate pagination
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  
  return {
    products: paginatedProducts,
    total: filteredProducts.length
  };
};
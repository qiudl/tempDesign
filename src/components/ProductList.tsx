import React from 'react';

// Define product interface
interface Product {
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

// Define props interface
interface ProductListProps {
  products: Product[];
  onSelect: (id: string, selected: boolean) => void;
  onSelectAll: (selected: boolean) => void;
  selectedAll: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  onSelect, 
  onSelectAll,
  selectedAll
}) => {
  // Function to render status badge
  const renderStatusBadge = (status: Product['status']) => {
    switch(status) {
      case 'draft':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            • 草稿
          </span>
        );
      case 'listed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            • 上架
          </span>
        );
      case 'unlisted':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            • 下架
          </span>
        );
      case 'abnormal':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            • 异常
          </span>
        );
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3 text-left">
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded border-gray-300"
                checked={selectedAll}
                onChange={(e) => onSelectAll(e.target.checked)}
              />
            </th>
            <th scope="col" className="px-4 py-3 text-left">缩略图</th>
            <th scope="col" className="px-4 py-3 text-left">商品款号</th>
            <th scope="col" className="px-4 py-3 text-left">商品名称</th>
            <th scope="col" className="px-4 py-3 text-left">商品分类</th>
            <th scope="col" className="px-4 py-3 text-left">颜色</th>
            <th scope="col" className="px-4 py-3 text-left">季节描述</th>
            <th scope="col" className="px-4 py-3 text-left">吊牌价</th>
            <th scope="col" className="px-4 py-3 text-left flex items-center">
              状态
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </th>
            <th scope="col" className="px-4 py-3 text-left">操作</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-4">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-gray-300"
                  checked={product.selected}
                  onChange={(e) => onSelect(product.id, e.target.checked)}
                />
              </td>
              <td className="px-4 py-4">
                <div className="h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.thumbnail} 
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </td>
              <td className="px-4 py-4">{product.productCode}</td>
              <td className="px-4 py-4">{product.name}</td>
              <td className="px-4 py-4">{product.category}</td>
              <td className="px-4 py-4">{product.color}</td>
              <td className="px-4 py-4">{product.season}</td>
              <td className="px-4 py-4">¥{product.price.toFixed(2)}</td>
              <td className="px-4 py-4">
                {renderStatusBadge(product.status)}
              </td>
              <td className="px-4 py-4 text-blue-500 space-x-2">
                <button className="hover:underline">修改</button>
                <button className="hover:underline">查看</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
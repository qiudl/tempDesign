import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import { Product, getPaginatedProducts } from '../data/mockProducts';

const ProductManagement = () => {
  // State for manage status filter dropdown
  const [statusFilter, setStatusFilter] = useState<string>('请选择');
  const [productCode, setProductCode] = useState<string>('');
  
  // State for products and pagination
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [selectedAll, setSelectedAll] = useState<boolean>(false);

  // Calculate total pages based on total items and items per page
  const totalPages = Math.ceil(totalItems / perPage);

  // Fetch products when page, perPage, or filters change
  useEffect(() => {
    // Fetch products from mock service
    const { products: fetchedProducts, total } = getPaginatedProducts(
      currentPage,
      perPage,
      { productCode, status: statusFilter }
    );
    
    setProducts(fetchedProducts);
    setTotalItems(total);
    setSelectedAll(false);
  }, [currentPage, perPage, productCode, statusFilter]);

  // Handle search button click
  const handleSearch = () => {
    setCurrentPage(1);
    // The effect will handle fetching the products
  };

  // Handle reset button click
  const handleReset = () => {
    setProductCode('');
    setStatusFilter('请选择');
    setCurrentPage(1);
  };

  // Handle product selection
  const handleProductSelect = (id: string, selected: boolean) => {
    setProducts(prevProducts => {
      const updated = prevProducts.map(product => 
        product.id === id ? { ...product, selected } : product
      );
      setSelectedAll(updated.every(product => product.selected));
      return updated;
    });
  };

  // Handle select all products
  const handleSelectAll = (selected: boolean) => {
    setProducts(prevProducts => {
      setSelectedAll(selected);
      return prevProducts.map(product => ({ ...product, selected }));
    });
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // The effect will handle fetching the products
  };

  // Handle per page change
  const handlePerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
    setCurrentPage(1);
    // The effect will handle fetching the products
  };

  return (
    <div className="flex flex-col h-full">
      {/* Main content area */}
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow">
          {/* Filter and search section */}
          <div className="p-4 flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2">商品款号：</span>
              <input 
                type="text" 
                placeholder="请输入" 
                className="border border-gray-300 rounded px-3 py-2 w-64"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
              />
            </div>
            
            <div className="flex items-center">
              <span className="mr-2">状态：</span>
              <div className="relative w-32">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none border border-gray-300 rounded px-3 py-2 w-full"
                >
                  <option>请选择</option>
                  <option>草稿</option>
                  <option>已上架</option>
                  <option>已下架</option>
                  <option>异常</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleSearch}
            >
              查 询
            </button>
            
            <button 
              className="border border-gray-300 px-4 py-2 rounded"
              onClick={handleReset}
            >
              重 置
            </button>
            
            <button className="flex items-center border border-gray-300 px-4 py-2 rounded ml-auto">
              展 开
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* Action buttons */}
          <div className="px-4 pb-4 flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
              <span className="mr-1">+</span>
              添加
            </button>
            
            <button className="border border-gray-300 px-4 py-2 rounded">
              批量操作
            </button>
            
            <button className="border border-gray-300 px-4 py-2 rounded w-10 text-center">
              ...
            </button>
          </div>
          
          {/* Product table */}
          <ProductList 
            products={products}
            onSelect={handleProductSelect}
            onSelectAll={handleSelectAll}
            selectedAll={selectedAll}
          />
          
          {/* Pagination */}
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            onPageChange={handlePageChange}
            perPage={perPage}
            onPerPageChange={handlePerPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
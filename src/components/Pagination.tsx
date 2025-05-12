import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  perPage: number;
  onPerPageChange?: (perPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  onPageChange,
  perPage,
  onPerPageChange
}) => {
  // Generate page numbers for rendering
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 7; // Show at most 7 page numbers
    
    // Always show first page
    pages.push(1);
    
    // Calculate range of pages to show
    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(totalPages - 1, currentPage + 2);
    
    // Adjust if we're close to the beginning or end
    if (currentPage <= 3) {
      endPage = Math.min(maxPagesToShow - 1, totalPages - 1);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - (maxPagesToShow - 2));
    }
    
    // Add ellipsis before middle pages if needed
    if (startPage > 2) {
      pages.push('...');
    }
    
    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    // Add ellipsis after middle pages if needed
    if (endPage < totalPages - 1) {
      pages.push('...');
    }
    
    // Always show last page, unless there's only one page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex items-center justify-between p-4 border-t">
      {/* Page info */}
      <div className="text-sm text-gray-500">
        共 {totalItems} 条记录 第 {currentPage} / {totalPages} 页
      </div>
      
      {/* Pagination */}
      <div className="flex items-center">
        {/* Previous page button */}
        <button 
          className="px-2 py-1 border rounded-l focus:outline-none"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Page numbers */}
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="px-3 py-1 border-t border-b">
              {page}
            </span>
          ) : (
            <button
              key={`page-${page}`}
              className={`px-3 py-1 border-t border-b ${
                page === currentPage 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => onPageChange(Number(page))}
            >
              {page}
            </button>
          )
        ))}
        
        {/* Next page button */}
        <button 
          className="px-2 py-1 border rounded-r focus:outline-none"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Jump to page */}
        <div className="ml-4 flex items-center">
          <span className="text-sm text-gray-500 mr-2">跳至</span>
          <input 
            type="number" 
            className="w-16 h-8 border rounded px-2 text-center"
            min={1}
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value);
              if (page >= 1 && page <= totalPages) {
                onPageChange(page);
              }
            }}
          />
          <span className="text-sm text-gray-500 ml-2">页</span>
        </div>
        
        {/* Per page selector */}
        {onPerPageChange && (
          <div className="ml-4 flex items-center">
            <select
              className="border rounded h-8 px-2"
              value={perPage}
              onChange={(e) => onPerPageChange(parseInt(e.target.value))}
            >
              <option value={10}>10条/页</option>
              <option value={20}>20条/页</option>
              <option value={50}>50条/页</option>
              <option value={100}>100条/页</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
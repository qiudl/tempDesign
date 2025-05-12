import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-900">产品管理系统</h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-4 flex items-center md:ml-6">
              <span className="text-gray-500">用户名</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
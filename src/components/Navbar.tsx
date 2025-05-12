import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Left side - Logo and title */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/src/assets/logo.svg" 
                alt="Logo" 
                className="h-8 w-8 mr-2" 
              />
              <h1 className="text-xl font-bold text-gray-900">团购业务管理平台</h1>
            </div>
            
            {/* Navigation menu */}
            <div className="ml-10 flex items-center space-x-4">
              <div className="relative group">
                <button className="flex items-center px-3 py-2">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
              {/* Menu items */}
              <div className="flex items-center space-x-1 text-gray-600">
                <span>一级菜单</span>
                <span>/</span>
                <span>二级菜单</span>
                <span>/</span>
                <span className="text-blue-500">三级菜单</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Search and user */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-1">
              <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Notifications */}
            <button className="p-1 relative">
              <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            
            {/* User */}
            <div className="flex items-center">
              <img 
                src="https://ui-avatars.com/api/?name=Tuan+Lining&background=0D8ABC&color=fff" 
                alt="Profile" 
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-2 text-sm text-gray-600">tuan.lining</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
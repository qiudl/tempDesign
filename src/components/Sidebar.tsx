import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen fixed">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">菜单导航</h2>
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/project" 
              className={({ isActive }) => 
                `block px-4 py-2 rounded transition-colors duration-200 ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`
              }
            >
              项目管理
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/product" 
              className={({ isActive }) => 
                `block px-4 py-2 rounded transition-colors duration-200 ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`
              }
            >
              商品管理
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/order" 
              className={({ isActive }) => 
                `block px-4 py-2 rounded transition-colors duration-200 ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`
              }
            >
              订单管理
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/customer" 
              className={({ isActive }) => 
                `block px-4 py-2 rounded transition-colors duration-200 ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`
              }
            >
              客户管理
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/settings" 
              className={({ isActive }) => 
                `block px-4 py-2 rounded transition-colors duration-200 ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`
              }
            >
              系统设置
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
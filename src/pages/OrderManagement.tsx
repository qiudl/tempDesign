import React from 'react';

const OrderManagement = () => {
  return (
    <div className="flex flex-col h-full">
      {/* 顶部导航栏 */}
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center">
          <img src="images/index/u4.png" className="w-8 h-8 mr-2" alt="logo" />
          <span className="text-xl font-bold">团购业务管理平台</span>
        </div>
        <div className="flex items-center">
          <img src="images/index/u6.jpg" className="w-6 h-6 rounded-full mr-2" alt="avatar" />
          <img src="images/index/u8.png" className="w-6 h-6 ml-4" alt="notification" />
          <img src="images/index/u9.png" className="w-6 h-6 ml-4" alt="settings" />
        </div>
      </div>
      
      {/* 内容区域 */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-6">订单管理</h1>
          
          {/* 这里将添加更多内容 */}
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
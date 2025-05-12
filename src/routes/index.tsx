import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import ProjectManagement from '../pages/ProjectManagement';
import ProductManagement from '../pages/ProductManagement';
import OrderManagement from '../pages/OrderManagement';
import CustomerManagement from '../pages/CustomerManagement';
import Settings from '../pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Navigate to="/product" replace /> },
      { path: 'project', element: <ProjectManagement /> },
      { path: 'product', element: <ProductManagement /> },
      { path: 'order', element: <OrderManagement /> },
      { path: 'customer', element: <CustomerManagement /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
]);

export default router;
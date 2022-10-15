import { createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { Orders } from './pages/Orders';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/orders',
    element: <Orders />,
  },
]);

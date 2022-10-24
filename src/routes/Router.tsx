import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Login } from '../pages/Login';
import { Orders } from '../pages/Orders';
import { Reports } from '../pages/Reports';

export function Router() {
  const { isLoggedIn } = useAuth();

  const guestRoute = (element: JSX.Element) =>
    !isLoggedIn ? element : <Navigate to="/pedidos" />;

  const authRoute = (element: JSX.Element) =>
    isLoggedIn ? element : <Navigate to="/login" />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={guestRoute(<Login />)} />
        <Route path="/pedidos" element={authRoute(<Orders />)} />
        <Route path="/relatorios" element={authRoute(<Reports />)} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

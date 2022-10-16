import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth } from './config/firebase';
import { Login } from './pages/Login';
import { Orders } from './pages/Orders';
import { Loading } from './pages/Loading';

export function App() {
  const [user, setUser] = useState<FirebaseUser | null | undefined>(undefined);

  useEffect(() => {
    const sub = onAuthStateChanged(auth, setUser);
    return sub;
  }, []);

  if (user === undefined) {
    return <Loading />;
  }

  const isLoggedIn = user !== null;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? '/pedidos' : '/login'} />}
        />
        <Route
          path="/login"
          element={!isLoggedIn ? <Login /> : <Navigate to="/pedidos" />}
        />
        <Route
          path="/pedidos"
          element={isLoggedIn ? <Orders /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

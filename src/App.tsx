import { AuthProvider } from './contexts/auth';
import { Router } from './routes/Router';

export function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

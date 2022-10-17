import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { auth } from '../config/firebase';
import { Loading } from '../pages/Loading';

interface AuthContextData {
  user: User | null;
  isLoggedIn: boolean;
  login(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const sub = onAuthStateChanged(auth, setUser);
    return sub;
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password);
  }, []);

  const logout = useCallback(async () => {
    signOut(auth);
  }, []);

  const providerValue = useMemo(
    () => ({
      user: user ?? null,
      isLoggedIn: !!user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  if (user === undefined) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}

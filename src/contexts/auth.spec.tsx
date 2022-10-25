import '@testing-library/jest-dom';
import { useContext } from 'react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { AuthContext, AuthProvider } from './auth';

interface TestingComponentProps {
  email?: string;
  password?: string;
}

function TestingComponent({
  email = '',
  password = '',
}: TestingComponentProps) {
  const { user, isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div data-testid="children">
      <div data-testid="isLoggedIn">{isLoggedIn}</div>
      <div data-testid="user.email">{user?.email}</div>
      <button
        type="button"
        data-testid="login"
        onClick={() => login(email, password)}
      >
        Login
      </button>
      <button type="button" data-testid="logout" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}

function MockLoading() {
  return <div data-testid="loading" />;
}

describe('AuthProvider', () => {
  beforeAll(() => {
    vi.mock('firebase/auth', () => {
      const authInstance: any = {
        currentUser: null,
      };

      const mockedUserInfo = Object.freeze({
        email: 'example@example.com',
      });

      const authChangeCallbacks: any[] = [];
      let authCurrentUserInfo: any = mockedUserInfo;
      let authTimer: any = null;
      let authTimerCompleted = false;

      const fireOnChangeCallbacks = () => {
        authInstance.currentUser = authCurrentUserInfo;
        authChangeCallbacks.forEach((cb) => {
          try {
            cb(mockedUserInfo); // invoke any active listeners
          } catch (err) {
            console.error('Error invoking callback', err);
          }
        });
        authTimerCompleted = true;
      };

      authInstance.signOut = () => {
        authCurrentUserInfo = null;
        fireOnChangeCallbacks();
      };

      return {
        getAuth: vi.fn(() => authInstance),
        onAuthStateChanged: vi.fn((authMock, onChangeCallback) => {
          if (!authTimer) {
            authTimer = setTimeout(fireOnChangeCallbacks, 1);
          }

          authChangeCallbacks.push(onChangeCallback);
          const unsubscriber = () => {
            const foundIndex = authChangeCallbacks.indexOf(onChangeCallback);
            if (foundIndex > -1) authChangeCallbacks.splice(foundIndex, 1);
          };

          if (authTimerCompleted) {
            onChangeCallback(mockedUserInfo);
          }

          return unsubscriber;
        }),
      };
    });
    vi.mock('../pages/Loading', () => ({
      Loading: MockLoading,
    }));
  });

  it('should display a Loading component at startup', () => {
    const { queryByTestId } = render(
      <AuthProvider>
        <TestingComponent />
      </AuthProvider>
    );

    expect(queryByTestId('loading')).toBeInTheDocument();
    expect(queryByTestId('children')).not.toBeInTheDocument();
  });

  it('should display a children component after startup', async () => {
    const { queryByTestId } = render(
      <AuthProvider>
        <TestingComponent />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(queryByTestId('children')).toBeInTheDocument();
      expect(queryByTestId('loading')).not.toBeInTheDocument();
    });
  });

  it.todo('should isLoggedIn return false when user is NOT logged in');

  it.todo('should isLoggedIn return true when user is logged in');

  it.todo('should change user and isLoggedIn when successful login');

  it.todo('should keep user as null and isLoggedIn as false when failed login');

  it.todo('should change user and isLoggedIn when successful logout');
});

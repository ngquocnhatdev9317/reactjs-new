import { Navigate } from "@tanstack/react-router";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useCallback, useContext, useState, type JSX, type ReactNode } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

type AuthUser = {
  email: string | null;
  displayName: string | null;
  idToken: string;
}

type AuthContextType = {
  user: AuthUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  setIsLoading: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = useCallback(async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (userCredential && userCredential.user) {
      setUser({
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
        idToken: await userCredential.user.getIdToken()
      });
    }
  }, []);

  const logout = useCallback(() => {
    signOut(auth)
  }, []);

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
    setIsLoading
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function withAuth<P extends JSX.IntrinsicAttributes>(Component: React.ComponentType<P>): React.FC<P> {
  const AuthenticatedComponent = (props: P): JSX.Element => {
    const context = useAuth();

    if (context && context?.isLoading) {
      return (<div>Loading...</div>);
    }

    if (!context || !context?.user) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
}

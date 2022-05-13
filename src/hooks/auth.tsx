import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { usePost } from '../services';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  token: string;
  name: string;
  email: string;
}
interface IAuthContextData {
  user: User;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  token: string;
}

interface CreateUserRequest {
  email: string;
  password: string;
}
interface TResponse {
  token: string;
  type: string;
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(false);

  const {
    data: dataPost,
    loading: loadingPost,
    error: errorPost,
    handlerPost,
  } = usePost<CreateUserRequest, TResponse>('/auth', {
    email: 'exemplo@email.com',
    password: '123456',
  });

  useEffect(() => {
    setLoading(loadingPost);
  }, [loadingPost]);

  const user = {
    token: '123',
    name: 'Gustavo Sobbrero',
    email: 'gustavo.sobbrero@develcode.com.br',
  };

  async function signIn(email: string, password: string) {
    await handlerPost({
      title: 'Erro de autenticação',
      message: 'E-mail e/ou senha inválidos', 
    });
    
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        token: dataPost.token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

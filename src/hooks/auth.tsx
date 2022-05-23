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
  signUp(): Promise<void>;
  mergeUserSignUpData(currentUserData: any): Promise<void>;
  token: string;
  error: boolean;
}

interface CreateUserRequest {
  email: string;
  password: string;
}
interface TResponse {
  token: string;
  type: string;
}

interface RequestProps {
  endpoint: string;
  body: {};
  error: {
    title: string;
    message: string;
  }
}

export const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState({} as RequestProps);
  const [signUpUserData, setSignUpUserData] = useState({} as any);
  const [error, setError] = useState(false);

  const {
    data: dataPost,
    loading: loadingPost,
    error: errorPost,
    handlerPost,
  } = usePost<any, any>(request.endpoint, request.body);

  useEffect(() => {
    setLoading(loadingPost);
  }, [loadingPost]);

  useEffect(()=>{
    !!request.endpoint &&
    handlerPost(request.error.title, request.error.message)
    !errorPost ? setError(true) : setError(false) 
  }, [request])

  const user = {
    token: '123',
    name: 'Gustavo Sobbrero',
    email: 'gustavo.sobbrero@develcode.com.br',
  };

  async function signIn(email: string, password: string) {
    setRequest({
      endpoint: '/auth',
      body: {
        email,
        password
      },
      error: {title: 'Erro de autenticação', message: 'E-mail e/ou senha inválidos'}
    })
    }

    async function signUp() {
      setRequest({
        endpoint: '/user',
        body: {...mergeUserSignUpData},
        error: {title: 'Erro de cadastro', message: 'Dados inválidos'}
      })
      }

      async function mergeUserSignUpData(currentUserData: any) {
        setSignUpUserData({
          ...signUpUserData,
          ...currentUserData
        })
console.log(signUpUserData, currentUserData)
      }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        mergeUserSignUpData,
        token: dataPost.token,
        error
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

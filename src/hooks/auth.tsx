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
  // const [signUpRequest, setSignUpRequest] = useState({} as RequestProps);

  const {
    data: dataPost,
    loading: loadingPost,
    error: errorPost,
    handlerPost,
  } = usePost<any, any>(request.endpoint, request.body);

  // const {
  //   data: dataPostSignUp,
  //   loading: loadingPostSignUp,
  //   error: errorPostSignUp,
  //   handlerPost: handlerPostSignUp,
  // } = usePost<any, any>(signUpRequest.endpoint, signUpRequest.body);

  useEffect(() => {
    setLoading(loadingPost);
  }, [loadingPost]);

  useEffect(()=>{
    !!request.endpoint &&
    handlerPost(request.error.title, request.error.message)
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

    // async function signUp(email: string, password: string) {
    //   setSignUpRequest({
    //     endpoint: '/user',
    //     body: {
    //       email,
    //       password,
    //     },
    //     error: {title: 'Erro de autenticação', message: 'E-mail e/ou senha inválidos'}
    //   })
    //   }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        token: dataPost.token,
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

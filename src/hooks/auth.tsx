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

interface SignUpProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cpf: string;
  phone: string;
  photo: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  zipcode: string;
  state: string;
  nickname: string;
}
interface IAuthContextData {
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signUp({
    email,
    password,
    firstName,
    lastName,
    cpf,
    phone,
    photo,
    street,
    number,
    neighborhood,
    city,
    zipcode,
    state,
    nickname,
  }: SignUpProps): void;
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
  };
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
  }, [loadingPost, signUpUserData]);

  useEffect(() => {
    !!request.endpoint &&
      handlerPost(request.error.title, request.error.message);
    !errorPost ? setError(true) : setError(false);
  }, [request]);

  async function signIn(email: string, password: string) {
    setRequest({
      endpoint: '/auth',
      body: {
        email,
        password,
      },
      error: {
        title: 'Erro de autenticação',
        message: 'E-mail e/ou senha inválidos',
      },
    });
  }

  function signUp({
    email,
    password,
    firstName,
    lastName,
    cpf,
    phone,
    photo,
    street,
    number,
    neighborhood,
    city,
    zipcode,
    state,
    nickname,
  }: SignUpProps) {

    const signUpData = {
      email,
      password,
      creationDate: new Date(),
      role: {
        id: 2,
      },
      costumer: {
        firstName,
        lastName,
        cpf,
        phone,
        photo,
        address: [
          {
            street,
            number,
            neighborhood,
            city,
            zipCode: zipcode,
            state,
            nickname,
          },
        ],
      },
    };
    console.log(signUpData.costumer.address)

    setRequest({
      endpoint: '/user',
      body: signUpData, 
      error: { title: 'Erro de cadastro', message: 'Dados inválidos' },
    });
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        signIn,
        signUp,
        token: dataPost.token,
        error,
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

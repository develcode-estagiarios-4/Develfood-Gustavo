import { useNavigation } from '@react-navigation/native';
import { AxiosError } from 'axios';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Alert } from 'react-native';
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
  photo: Object;
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
const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState({} as RequestProps);

  const {
    data: dataPost,
    loading: loadingPost,
    handlerPost,
  } = usePost<any, any>(request.endpoint, request.body);

  useEffect(() => {
    setLoading(loadingPost);
  }, [loadingPost, signUp]);

function createUserSuccess(data: any) {
  data.password && navigation.navigate('SignUpSuccess' as never)
}

function createUserError(error: AxiosError<any, any> | any) {
  error && 
  Alert.alert(request.error.title, request.error.message);

}

  useEffect(() => {
    !!request.endpoint &&
      handlerPost(request.error.title, request.error.message, createUserError, createUserSuccess);
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
        message: 'E-mail e/ou senha inválidos, ou problemas de conexão',
      },
    });
  }

  async function signUp({
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
        photo: {code: ''},
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
      error: { title: 'Erro', message: 'Possível e-mail já cadastrado ou problemas de conexão' },
    });
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        signIn,
        signUp,
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

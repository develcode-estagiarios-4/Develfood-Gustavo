import React, { useContext, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';

import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import brandsalada from '../../assets/brandsalada.png';
import pizza from '../../assets/pizza.png';
import povermelho from '../../assets/povermelho.png';
import develfood from '../../assets/DEVELFOOD.png';
import logodevel from '../../assets/image.png';

import { Input } from '../../components/Input';
import { ErrorMessage } from '../../components/Input/styles';

import { ButtonTouchable } from '../../components/ButtonTouchable';

import {
  Container,
  Content,
  Salad,
  Pizza,
  Logo,
  LabelLogo,
  Brands,
  LogoWrapper,
  ForgotPasswordButton,
  ForgotPasswordLabel,
  RegisterWrapper,
  NoRegisterLabel,
  RegisterButton,
  RegisterButtonLabel,
  FooterImage,
  
} from './styles';

import { usePost } from '../../services';
import theme from '../../theme';

// interface CreateUserRequest {
//   email: string;
//   password: string;
// }
// interface TResponse {
//   token: string;
//   type: string;
// }

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Email é obrigatório.'),
  password: Yup.string().required('Informe sua senha.'),
});

export default function SignIn() {
  const { user, signIn, loading, token } = useAuth();
  console.log(user);

  // const {
  //   data: dataPost,
  //   loading: loadingPost,
  //   error: errorPost,
  //   handlerPost,
  // } = usePost<CreateUserRequest, TResponse>('/auth', {
  //   email: 'exemplo@email.com',
  //   password: '123456',
  // });

  function handleLogin() {
    // handlerPost({
    //   title: 'Erro de autenticação',
    //   message: 'E-mail e/ou senha inválidos',
    // });
    const values = getValues() 
    signIn(values.email, values.password)

  }
  useEffect(() => {
    console.log('==>', token);

  })

  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <Brands>
            <Salad source={brandsalada} />
            <Pizza source={pizza} />
          </Brands>

          <Content>
            <LogoWrapper>
              <Logo source={logodevel} />
              <LabelLogo source={develfood} />
            </LogoWrapper>

            <Input
              name="email"
              placeholder="exemplo@email.com"
              placeholderTextColor={theme.COLORS.SECONDARY_400}
              keyboardType="email-address"
              control={control}
              error={errors.email && errors.email.message}
              editable={!loading}
              src={theme.ICONS.EMAIL}
            />

            <Input
              name="password"
              placeholder="********"
              placeholderTextColor={theme.COLORS.SECONDARY_400}
              control={control}
              error={errors.password && errors.password.message}
              editable={!loading}
              src={theme.ICONS.PASSWORD}
            />

            <ForgotPasswordButton disabled={loading}>
              <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
            </ForgotPasswordButton>

            <ButtonTouchable
              onPressed={handleSubmit(handleLogin)}
              title="Entrar"
              isLoading={loading}
            />

            <RegisterWrapper>
              <NoRegisterLabel>Não possui cadastro? </NoRegisterLabel>
              <RegisterButton disabled={loading}>
                <RegisterButtonLabel>Cadastre-se aqui!</RegisterButtonLabel>
              </RegisterButton>
            </RegisterWrapper>

            <FooterImage source={povermelho} />
          </Content>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}

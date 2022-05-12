import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text,
  View,
} from 'react-native';

import brandsalada from '../../assets/brandsalada.png';
import pizza from '../../assets/pizza.png';
import povermelho from '../../assets/povermelho.png';
import develfood from '../../assets/DEVELFOOD.png';
import logodevel from '../../assets/image.png';

import { Input } from '../../components/Input';
import { ButtonTouchable } from '../../components/ButtonTouchable';

import {
  Container,
  Content,
  Brand,
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

interface CreateUserRequest {
  email: string;
  password: string;
}
interface TResponse {
  token: string;
  type: string;
}

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    data: dataPost,
    loading: loadingPost,
    error: errorPost,
    handlerPost,
  } = usePost<CreateUserRequest, TResponse>('/auth', {
    email: 'exempalo@email.com',
    password: '123456',
  });

  return (
    <Container>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >

          <Brands>
            <Brand source={brandsalada} />
            <Brand source={pizza} />
          </Brands>

          <Content>

            <LogoWrapper>
              <Logo source={logodevel} />
              <LabelLogo source={develfood} />
            </LogoWrapper>

              <Input 
              name='email' 
              placeholder='exemplo@email.com' 
              placeholderTextColor={theme.COLORS.SECONDARY_400} 
              keyboardType='email-address'
               />

              <Input 
              name='password' 
              placeholder='********' 
              placeholderTextColor={theme.COLORS.SECONDARY_400} 
              />

            <ForgotPasswordButton>
              <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
            </ForgotPasswordButton>

            <ButtonTouchable 
            onPressed={() => handlerPost()} 
            title='Entrar'
            loadingPost={loadingPost}  
            />
            
            <RegisterWrapper>
              <NoRegisterLabel>Não possui cadastro? </NoRegisterLabel>
              <RegisterButton>
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

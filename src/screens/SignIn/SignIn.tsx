import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import brandsalada from '../../assets/brandsalada.png';
import pizza from '../../assets/pizza.png';
import povermelho from '../../assets/povermelho.png';
import develfood from '../../assets/DEVELFOOD.png';
import logodevel from '../../assets/image.png';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  Container,
  Content,
  Brand,
  Brands,
  LogoWrapper,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from './styles';
import theme from '../../theme';

export default function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Brands>
          <Brand source={brandsalada} />
          <Brand source={pizza} />
        </Brands>

        <Content>
          <LogoWrapper>
            <Brand source={logodevel} />
            <Brand source={develfood} />
          </LogoWrapper>
          <Input
            placeholder="exemplo@email.com"
            type="primary"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input
            placeholder="**********"
            placeholderTextColor= {'blue'}
            type="primary"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button title="Entrar" type="primary" />
          <Brand source={povermelho} />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}

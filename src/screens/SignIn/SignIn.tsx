import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Content } from './styles';

export default function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Input
            placeholder="E-mail"
            type="primary"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input
            placeholder="Senha"
            type="primary"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
          <Button title="Entrar" type="primary" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}

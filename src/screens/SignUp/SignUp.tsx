import React from 'react';
import { Text } from 'react-native-svg';
import { Header } from '../../components/Header';
import {
  Container,
  Content,
  Ball1,
  Ball2,
  Ball3,
  Balls,
  BorderBall1,
  BorderBall2,
  BorderBall3,
  Person,
} from './styles';

import { InputForm } from '../../components/InputForm';
import theme from '../../theme';

import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { ButtonTouchable } from '../../components/ButtonTouchable';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Email é obrigatório.'),
  password: Yup.string().required('Informe sua senha.'),
});

export default function SignUp() {

  function handleSignUp() {
    
    const values = getValues() 
    signUp(values.email, values.password)

  }
  
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
      <Header title="Cadastro" />
      <Content>
        <Balls>
          <BorderBall1 source={require('../../assets/bordabola.png')} />
          <Ball1 source={require('../../assets/bola.png')} />

          <BorderBall2 source={require('../../assets/bordabola.png')} />
          <Ball2 source={require('../../assets/bola.png')} />

          <BorderBall3 source={require('../../assets/bordabola.png')} />
          <Ball3 source={require('../../assets/bola.png')} />
        </Balls>

        <Person source={require('../../assets/pessoa1.png')} />

        <InputForm
          name="email"
          placeholder="exemplo@email.com"
          placeholderTextColor={theme.COLORS.SECONDARY_400}
          keyboardType="email-address"
          control={control}
          error={errors.email && errors.email.message}
          editable={true}
          src={theme.ICONS.EMAIL}
        />

        <InputForm
          name="password"
          placeholder="senha"
          placeholderTextColor={theme.COLORS.SECONDARY_400}
          control={control}
          error={errors.password && errors.password.message}
          editable={true}
          src={theme.ICONS.PASSWORD}
        />

        <InputForm
          name="password"
          placeholder="confirmar senha"
          placeholderTextColor={theme.COLORS.SECONDARY_400}
          control={control}
          error={errors.password && errors.password.message}
          editable={true}
          src={theme.ICONS.PASSWORD}
        />

        <ButtonTouchable
          onPressed={() => {}}
          title="Continuar"
          isLoading={false}
        />
      </Content>
    </Container>
  );
}

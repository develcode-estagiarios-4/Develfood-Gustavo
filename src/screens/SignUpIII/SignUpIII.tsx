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
import { NavigationBar } from '../../components/NavigationBar';
import { useNavigation } from '@react-navigation/native';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Email é obrigatório.'),
  password: Yup.string().required('Informe sua senha.'),
});

export default function SignUpIII() {
  const navigation = useNavigation();

  function handleSignUp() {
    const values = getValues();
    // signUp(values.email, values.password)
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
      <Header title="Cadastro" onPressBackButton={() => {navigation.goBack()}}/>
      <Content>
        <Balls>
          <BorderBall1 source={require('../../assets/bordabola.png')} />
          <Ball1 source={require('../../assets/bolaverde.png')} />

          <BorderBall2 source={require('../../assets/bordabola.png')} />
          <Ball2 source={require('../../assets/bolaverde.png')} />

          <BorderBall3 source={require('../../assets/bordabola.png')} />
          <Ball3 source={require('../../assets/bola.png')} />
        </Balls>

        <Person source={require('../../assets/pessoa3.png')} />

        <InputForm
          name="rua"
          placeholder="Rua"
          placeholderTextColor={theme.COLORS.SECONDARY_400}
          keyboardType="default"
          control={control}
          error={errors.email && errors.email.message}
          editable={true}
          src={require('../../assets/local2.png')}
        />

        <InputForm
          name="cidade"
          placeholder="Cidade"
          placeholderTextColor={theme.COLORS.SECONDARY_400}
          control={control}
          error={errors.password && errors.password.message}
          editable={true}
          src={require('../../assets/local2.png')}
        />

        <InputForm
          name="bairro"
          placeholder="Bairro"
          placeholderTextColor={theme.COLORS.SECONDARY_400}
          control={control}
          error={errors.password && errors.password.message}
          editable={true}
          src={require('../../assets/local2.png')}
        />

        <InputForm
          name="numero"
          placeholder="Número"
          placeholderTextColor={theme.COLORS.SECONDARY_400}
          control={control}
          error={errors.password && errors.password.message}
          editable={true}
          src={require('../../assets/local2.png')}
        />

        <InputForm
          name="cep"
          placeholder="CEP"
          placeholderTextColor={theme.COLORS.SECONDARY_400}
          control={control}
          error={errors.password && errors.password.message}
          editable={true}
          src={require('../../assets/local2.png')}
        />

        <ButtonTouchable
          onPressed={() => {navigation.navigate('SignUpSuccess' as never)}}
          title="Continuar"
          isLoading={false}
        />
      </Content>
    </Container>
  );
}

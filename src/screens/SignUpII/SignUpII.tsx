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
  Alert,
} from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { ButtonTouchable } from '../../components/ButtonTouchable';
import { NavigationBar } from '../../components/NavigationBar';
import { useNavigation } from '@react-navigation/native';
import { BtnView } from '../SignUpI/styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório.'),
  cpf: Yup.number().typeError('CPF deve ser um número')
  .min(11, 'CPF deve ter 11 dígitos').required('Informe seu CPF.')
  .max(11, 'CPF deve ter no máximo 11 dígitos'),
  telefone: Yup.number().typeError('Telefone deve ser um número').required('Informe seu telefone.')
});

export default function SignUpII() {
  const navigation = useNavigation();

//   function handleSignUp() {
//     const values = getValues();
//     // signUp(values.email, values.password)
//   }

  const {
    control,
    // getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => navigation.navigate('SignUpIII' as never);

  return (
    <Container>
      <Header title="Cadastro" onPressBackButton={() => {navigation.goBack()}}/>
      <Content>
        <Balls>
          <BorderBall1 source={require('../../assets/bordabola.png')} />
          <Ball1 source={require('../../assets/bolaverde.png')} />

          <BorderBall2 source={require('../../assets/bordabola.png')} />
          <Ball2 source={require('../../assets/bola.png')} />

          <BorderBall3 source={require('../../assets/bordabola.png')} />
          <Ball3 source={require('../../assets/bola.png')} />
        </Balls>

        <Person source={require('../../assets/pessoa2.png')} />

        <InputForm
          name="nome"
          placeholder="Nome"
          placeholderTextColor={theme.COLORS.SECONDARY_400}
          keyboardType="email-address"
          control={control}
          error={errors.name && errors.name.message}
          editable={true}
          src={require('../../assets/usuario2.png')}
        />

        <InputForm
          name="cpf"
          placeholder="CPF"
          placeholderTextColor={theme.COLORS.SECONDARY_400}
          keyboardType="number-pad"
          control={control}
          error={errors.cpf && errors.cpf.message}
          editable={true}
          src={require('../../assets/cpf24.png')}
        />

        <InputForm
          name="telefone"
          placeholder="Telefone"
          placeholderTextColor={theme.COLORS.SECONDARY_400}
          keyboardType="number-pad"
          control={control}
          error={errors.telefone && errors.telefone.message}
          editable={true}
          src={require('../../assets/telefone.png')}
        />
      </Content>
      <BtnView>
        <ButtonTouchable
          onPressed={handleSubmit(onSubmit)}
          title="Continuar"
          isLoading={false}
        />
      </BtnView>
    </Container>
  );
}

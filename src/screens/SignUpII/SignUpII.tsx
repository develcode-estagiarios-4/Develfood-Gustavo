import React from 'react';
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

import personup from '../../assets/pessoa2.png';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { ButtonTouchable } from '../../components/ButtonTouchable';
import { NavigationBar } from '../../components/NavigationBar';
import { useNavigation } from '@react-navigation/native';
import { BtnView } from '../SignUpI/styles';
import { ThemeConsumer } from 'styled-components';

const schema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório.'),
  cpf: Yup.number()
    .required('Informe seu CPF.')
    .typeError('CPF deve ser um número'),
  telefone: Yup.number()
    .typeError('Telefone deve ser um número')
    .required('Informe seu telefone.'),
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header
          title="Cadastro"
          onPressLeftButton={() => {
            navigation.goBack();
          }}
        />
        <Content>
          <Balls>
            <BorderBall1 source={theme.IMAGES.BORDERBALL} />
            <Ball1 source={theme.IMAGES.GREENBALL} />

            <BorderBall2 source={theme.IMAGES.BORDERBALL} />
            <Ball2 source={theme.IMAGES.BALL} />

            <BorderBall3 source={theme.IMAGES.BORDERBALL} />
            <Ball3 source={theme.IMAGES.BALL} />
          </Balls>

          <Person source={personup} />

          <InputForm
            name="nome"
            placeholder="Nome"
            placeholderTextColor={theme.COLORS.SECONDARY_400}
            keyboardType="email-address"
            control={control}
            error={errors.nome && errors.nome.message}
            editable={true}
            src={theme.ICONS.NAME}
          />

          <InputForm
            name="cpf"
            placeholder="CPF"
            placeholderTextColor={theme.COLORS.SECONDARY_400}
            keyboardType="number-pad"
            control={control}
            error={errors.cpf && errors.cpf.message}
            editable={true}
            src={theme.ICONS.CPF}
          />

          <InputForm
            name="telefone"
            placeholder="Telefone"
            placeholderTextColor={theme.COLORS.SECONDARY_400}
            keyboardType="number-pad"
            control={control}
            error={errors.telefone && errors.telefone.message}
            editable={true}
            src={theme.ICONS.PHONE}
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
    </TouchableWithoutFeedback>
  );
}

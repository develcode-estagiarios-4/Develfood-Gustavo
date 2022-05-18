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
  BtnView,
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

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Email é obrigatório.'),
  password: Yup.string().required('Informe sua senha.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Informe senhas idénticas.')
    .required('Confirme sua senha'),
});

export default function SignUpI() {
  const navigation = useNavigation();

  // function handleSignUp() {
  // const values = getValues();
  // values.email, values.password, values.confirmPassword
  // }

  const {
    control,
    // getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => navigation.navigate('SignUpII' as never);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header
          title="Cadastro"
          onPressBackButton={() => {
            navigation.goBack();
          }}
        />
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
            keyboardType="default"
            control={control}
            error={errors.password && errors.password.message}
            editable={true}
            src={theme.ICONS.PASSWORD}
          />

          <InputForm
            name="confirmPassword"
            placeholder="confirmar senha"
            placeholderTextColor={theme.COLORS.SECONDARY_400}
            keyboardType="default"
            control={control}
            error={errors.confirmPassword && errors.confirmPassword.message}
            editable={true}
            src={theme.ICONS.PASSWORD}
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

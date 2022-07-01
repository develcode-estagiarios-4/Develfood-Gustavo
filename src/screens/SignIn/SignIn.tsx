import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/auth';

import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import brandsalada from '../../assets/brandsalada.png';
import pizza from '../../assets/pizza.png';
import povermelho from '../../assets/povermelho.png';
import develfood from '../../assets/DEVELFOOD.png';
import logodevel from '../../assets/image.png';

import { InputForm } from '../../components/InputForm';

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

import theme from '../../theme';
import { useNavigation } from '@react-navigation/native';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Email é obrigatório.'),
  password: Yup.string().required('Informe sua senha.'),
});

export default function SignIn() {
  const navigation = useNavigation();

  const { signIn, loading, token } = useAuth();

  function handleLogin() {
    const values = getValues();
    signIn(values.email, values.password);
  }
  useEffect(() => {
    console.log('==>', token);
  });

  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <StatusBar hidden />
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

              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <InputForm
                    name="email"
                    placeholder="exemplo@email.com"
                    placeholderTextColor={theme.COLORS.SECONDARY_100}
                    keyboardType="email-address"
                    onChangeText={onChange}
                    value={value}
                    control={control}
                    error={errors.email && errors.email.message}
                    editable={!loading}
                    src={theme.ICONS.EMAIL}
                  />
                )}
                name="email"
              />

              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <InputForm
                    name="password"
                    placeholder="********"
                    placeholderTextColor={theme.COLORS.SECONDARY_100}
                    keyboardType="default"
                    onChangeText={onChange}
                    value={value}
                    control={control}
                    error={errors.password && errors.password.message}
                    editable={!loading}
                    src={theme.ICONS.PASSWORD}
                  />
                )}
                name="password"
              />

              <ForgotPasswordButton disabled={loading}>
                <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
              </ForgotPasswordButton>

              <ButtonTouchable
                onPressed={handleSubmit(handleLogin)}
                title="Entrar"
                isLoading={loading}
                disabled={loading}
              />

              <RegisterWrapper>
                <NoRegisterLabel>Não possui cadastro? </NoRegisterLabel>
                <RegisterButton
                  activeOpacity={0.9}
                  disabled={loading}
                  onPress={() => navigation.navigate('SignUpI' as never)}
                >
                  <RegisterButtonLabel>Cadastre-se aqui!</RegisterButtonLabel>
                </RegisterButton>
              </RegisterWrapper>
              <FooterImage source={povermelho} />
            </Content>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Container>
    </>
  );
}

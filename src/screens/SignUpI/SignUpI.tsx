import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import {
  Container,
  Content,
  Ball,
  Balls,
  BallWrapper,
  BorderBall,
  Person,
  BtnView,
} from './styles';

import { Header } from '../../components/Header';
import { InputForm } from '../../components/InputForm';
import { ButtonTouchable } from '../../components/ButtonTouchable';
import personleft from '../../assets/pessoa1.png';

import theme from '../../theme';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface DataStepOneProp {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Email é obrigatório.'),
  password: Yup.string().required('Informe sua senha.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Informe senhas idénticas.')
    .required('Confirme sua senha'),
});

export default function SignUpI() {
  const navigation = useNavigation();

  function handleNextStep() {
    const values = getValues();

    const data: DataStepOneProp = {
      email: values.email,
      password: values.password,
    };

    navigation.navigate(
      'SignUpII' as never,
      {
        email: values.email,
        password: values.password,
      } as never,
    );
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <Header
        name='Cadastro'
          bgColor="#FFFFFF"
          title='Cadastro'
          fontColor="#000000"
          fontWeight={'500'}
          srcLeftIcon={theme.ICONS.BACK}
          onPressLeftButton={() => {
            navigation.goBack();
          }}
        />
        <Container>
          <Content>
            <Balls>
              <BallWrapper>
                <BorderBall source={theme.IMAGES.BORDERBALL} />
                <Ball source={theme.IMAGES.BALL} />
              </BallWrapper>
              <BallWrapper>
                <BorderBall source={theme.IMAGES.BORDERBALL} />
                <Ball source={theme.IMAGES.BALL} />
              </BallWrapper>
              <BallWrapper>
                <BorderBall source={theme.IMAGES.BORDERBALL} />
                <Ball source={theme.IMAGES.BALL} />
              </BallWrapper>
            </Balls>

            <Person source={personleft} />

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <InputForm
                  name="email"
                  placeholder="exemplo@email.com"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="email-address"
                  onChangeText={onChange}
                  value={value}
                  control={control}
                  error={errors.email && errors.email.message}
                  editable={true}
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
                  placeholder="senha"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="default"
                  onChangeText={onChange}
                  value={value}
                  control={control}
                  error={errors.password && errors.password.message}
                  editable={true}
                  src={theme.ICONS.PASSWORD}
                />
              )}
              name="password"
            />

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <InputForm
                  name="confirmPassword"
                  placeholder="confirmar senha"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="default"
                  onChangeText={onChange}
                  value={value}
                  control={control}
                  error={
                    errors.confirmPassword && errors.confirmPassword.message
                  }
                  editable={true}
                  src={theme.ICONS.PASSWORD}
                />
              )}
              name="confirmPassword"
            />
          </Content>

          <BtnView>
            <ButtonTouchable
              onPressed={handleSubmit(handleNextStep)}
              title="Continuar"
              isLoading={false}
            />
          </BtnView>
        </Container>
      </>
    </TouchableWithoutFeedback>
  );
}

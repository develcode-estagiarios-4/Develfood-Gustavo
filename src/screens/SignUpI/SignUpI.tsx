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
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Email é obrigatório.'),
  password: Yup.string().required('Informe sua senha.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Informe senhas idénticas.')
    .required('Confirme sua senha'),
});

export default function SignUpI() {
  const navigation = useNavigation();

  const { mergeUserSignUpData } = useAuth();

  function handleSignUp() {
    const values = getValues();
    mergeUserSignUpData({
      email: values.email,
      password: values.password,
      creationDate: '2022-05-20',
      role: {
        id: 2,
      },
    });

    navigation.navigate('SignUpII' as never);
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
      <View>
        <Header
          title="Cadastro"
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
              onPressed={handleSubmit(handleSignUp)}
              title="Continuar"
              isLoading={false}
            />
          </BtnView>
        </Container>
      </View>
    </TouchableWithoutFeedback>
  );
}

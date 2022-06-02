import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Container, Content, BtnView } from './styles';

import {
  Ball,
  Balls,
  BallWrapper,
  BorderBall,
  Person,
} from '../SignUpI/styles';

import { Header } from '../../components/Header';
import { InputForm } from '../../components/InputForm';
import { ButtonTouchable } from '../../components/ButtonTouchable';
import personup from '../../assets/pessoa2.png';

import theme from '../../theme';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputMask } from '../../components/InputMask';
import { cpf } from 'cpf-cnpj-validator';

const schema = Yup.object().shape({
  firstName: Yup.string().required('Nome é obrigatório.'),
  lastName: Yup.string().required('Sobrenome é obrigatório.'),
  cpf: Yup.string().test('is-cpf', 'CPF inválido', (value: any) =>
    cpf.isValid(value),
  ),
  phone: Yup.string().required('Informe seu telefone.'),
});

export default function SignUpII({ route }: any) {
  const navigation = useNavigation();

  function handleSignUp() {
    const { email, password } = route.params;
    const values = getValues();

    navigation.navigate(
      'SignUpIII' as never,
      {
        email,
        password,
        firstName: values.firstName,
        lastName: values.lastName,
        cpf: values.cpf,
        phone: values.phone,
        photo: '',
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
        leftSpaceWidth='19%'
        name='Cadastro'
          bgColor="#FFFFFF"
          title='Cadastro'
          fontColor="#000000"
          fontWeight={'500'}
          iconHeight={1}
          iconWidth={1}
          srcLeftIcon={theme.ICONS.BACK}
          onPressLeftButton={() => {
            navigation.goBack();
          }}
        />
        <Container showsVerticalScrollIndicator={false}>
          <Content>
            <Balls>
              <BallWrapper>
                <BorderBall source={theme.IMAGES.BORDERBALL} />
                <Ball source={theme.IMAGES.GREENBALL} />
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

            <Person source={personup} />

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <InputForm
                  name="firstName"
                  placeholder="Nome"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="default"
                  onChangeText={onChange}
                  value={value}
                  control={control}
                  error={errors.firstName && errors.firstName.message}
                  editable={true}
                  src={theme.ICONS.NAME}
                />
              )}
              name="firstName"
            />

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <InputForm
                  name="lastName"
                  placeholder="Sobrenome"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="default"
                  onChangeText={onChange}
                  value={value}
                  control={control}
                  error={errors.lastName && errors.lastName.message}
                  editable={true}
                  src={theme.ICONS.NAME}
                />
              )}
              name="lastName"
            />

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <InputForm
                  name="cpf"
                  placeholder="CPF"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="number-pad"
                  onChangeText={onChange}
                  value={cpf.format(value)}
                  control={control}
                  error={errors.cpf && errors.cpf.message}
                  editable={true}
                  src={theme.ICONS.CPF}
                />
              )}
              name="cpf"
            />

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <InputMask
                  placeholder="Telefone"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="number-pad"
                  onChangeText={onChange}
                  value={value}
                  error={errors.phone && errors.phone.message}
                  editable={true}
                  src={theme.ICONS.PHONE}
                />
              )}
              name="phone"
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
      </>
    </TouchableWithoutFeedback>
  );
}

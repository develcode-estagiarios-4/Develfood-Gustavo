import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  Container,
  Content,
  TwoInputsView,
  BtnView,
  HalfInput,
  HalfInputTwo,
  TwoInputsViewTwo,
  HalfInputThree,
} from './styles';

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
import personright from '../../assets/pessoa3.png';

import theme from '../../theme';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  nickname: Yup.string().required('Apelido do endereço é obrigatório.'),
  cep: Yup.number().required('CEP é obrigatório.').typeError('Somente números'),
  street: Yup.string().required('Rua é obrigatória.'),
  city: Yup.string().required('Cidade é obrigatória.'),
  neighborhood: Yup.string().required('Bairro é obrigatório.'),
  state: Yup.string().required('Estado é obrigatório.'),
  number: Yup.number()
    .required('Número é obrigatório.')
    .typeError('Somente números'),
});

export default function SignUpIII({ route }: any) {
  const navigation = useNavigation();

  const { signUp, loading } = useAuth();

  async function handleSignUp() {
    const { email, password, firstName, lastName, cpf, phone, photo } =
      route.params;

    const values = getValues();

    signUp({
      email,
      password,
      firstName,
      lastName,
      cpf,
      phone,
      photo,
      street: values.street,
      number: values.number,
      neighborhood: values.neighborhood,
      city: values.city,
      zipcode: values.cep,
      state: values.state,
      nickname: values.nickname,
    });

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
          title="Cadastro"
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
                <Ball source={theme.IMAGES.GREENBALL} />
              </BallWrapper>
              <BallWrapper>
                <BorderBall source={theme.IMAGES.BORDERBALL} />
                <Ball source={theme.IMAGES.BALL} />
              </BallWrapper>
            </Balls>

            <Person source={personright} />

            <TwoInputsView>
              <HalfInput>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <InputForm
                      name="nickname"
                      placeholder="Apelido do End."
                      placeholderTextColor={theme.COLORS.SECONDARY_400}
                      keyboardType="default"
                      onChangeText={onChange}
                      value={value}
                      control={control}
                      error={errors.nickname && errors.nickname.message}
                      editable={true}
                      src={theme.ICONS.LOCAL}
                    />
                  )}
                  name="nickname"
                />
              </HalfInput>

              <HalfInputTwo>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <InputForm
                      name="cep"
                      placeholder="CEP"
                      placeholderTextColor={theme.COLORS.SECONDARY_400}
                      keyboardType="number-pad"
                      onChangeText={onChange}
                      value={value}
                      control={control}
                      error={errors.cep && errors.cep.message}
                      editable={true}
                      src={theme.ICONS.LOCAL}
                    />
                  )}
                  name="cep"
                />
              </HalfInputTwo>
            </TwoInputsView>

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <InputForm
                  name="street"
                  placeholder="Rua"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="default"
                  onChangeText={onChange}
                  value={value}
                  control={control}
                  error={errors.street && errors.street.message}
                  editable={true}
                  src={theme.ICONS.LOCAL}
                />
              )}
              name="street"
            />

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <InputForm
                  name="city"
                  placeholder="Cidade"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="default"
                  onChangeText={onChange}
                  value={value}
                  control={control}
                  error={errors.city && errors.city.message}
                  editable={true}
                  src={theme.ICONS.LOCAL}
                />
              )}
              name="city"
            />

            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <InputForm
                  name="neighborhood"
                  placeholder="Bairro"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="default"
                  onChangeText={onChange}
                  value={value}
                  control={control}
                  error={errors.neighborhood && errors.neighborhood.message}
                  editable={true}
                  src={theme.ICONS.LOCAL}
                />
              )}
              name="neighborhood"
            />

            <TwoInputsViewTwo>
              <HalfInputThree>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <InputForm
                      name="state"
                      placeholder="Estado"
                      placeholderTextColor={theme.COLORS.SECONDARY_400}
                      keyboardType="default"
                      onChangeText={onChange}
                      value={value}
                      control={control}
                      error={errors.state && errors.state.message}
                      editable={true}
                      src={theme.ICONS.LOCAL}
                    />
                  )}
                  name="state"
                />
              </HalfInputThree>

              <HalfInputThree>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <InputForm
                      name="number"
                      placeholder="Número"
                      placeholderTextColor={theme.COLORS.SECONDARY_400}
                      keyboardType="default"
                      onChangeText={onChange}
                      value={value}
                      control={control}
                      error={errors.number && errors.number.message}
                      editable={true}
                      src={theme.ICONS.LOCAL}
                    />
                  )}
                  name="number"
                />
              </HalfInputThree>
            </TwoInputsViewTwo>
          </Content>
          <BtnView>
            <ButtonTouchable
              onPressed={handleSubmit(handleSignUp)}
              title="Continuar"
              isLoading={loading}
            />
          </BtnView>
        </Container>
      </>
    </TouchableWithoutFeedback>
  );
}

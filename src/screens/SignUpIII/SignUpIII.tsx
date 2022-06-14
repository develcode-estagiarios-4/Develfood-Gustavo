import React, { useEffect, useState } from 'react';
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
import { useCep } from '../../services/viaCep';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputZipcodeMask } from '../../components/InputMask/zipcode';

interface RequestProps {
  endpoint: string;
}

export default function SignUpIII({ route }: any) {
  const navigation = useNavigation();
  const [cep, setCep] = useState('');
  const [request, setRequest] = useState({} as RequestProps);
  const [isError, setIsError] = useState(false);
  const { data, handleCep } = useCep(request.endpoint);

  const { signUp, loading } = useAuth();

  function onSuccess(data: any) {
    data.localidade
      ? (setIsError(false))
      : (setIsError(true));
  }

  const schema = Yup.object().shape({
    nickname: Yup.string().required('Apelido do endereço é obrigatório.'),
    cep: Yup.string()
      .min(9, 'Cep inválido')
      .test('is-cep', 'Cep inválido', () => !isError),
    street: Yup.string().required('Rua é obrigatória.'),
    city: Yup.string().required('Cidade é obrigatória.'),
    neighborhood: Yup.string().required('Bairro é obrigatório.'),
    state: Yup.string().required('Estado é obrigatório.'),
    number: Yup.number()
      .required('Número é obrigatório.')
      .typeError('Somente números'),
  });

  const {
    control,
    getValues,
    handleSubmit,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    !!request.endpoint && handleCep(onSuccess);
  }, [request]);

  useEffect(() => {
    setValue('street', data.logradouro);
    setValue('city', data.localidade);
    setValue('neighborhood', data.bairro);
    setValue('state', data.uf);
    setValue('cep', cep);
  }, [data]);

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

  function handleCepWriter() {
    setRequest({ endpoint: `/${cep}/json/` });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <Header
          name="Cadastro"
          bgColor="#FFFFFF"
          title="Cadastro"
          fontColor="#000000"
          fontWeight={'500'}
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
                      placeholderTextColor={theme.COLORS.SECONDARY_100}
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
                    <InputZipcodeMask
                      name={'cep'}
                      placeholder="CEP"
                      placeholderTextColor={theme.COLORS.SECONDARY_100}
                      keyboardType="number-pad"
                      onChangeText={(text) => {
                        onChange;
                        setCep(text);
                      }}
                      value={value}
                      error={errors.cep && errors.cep.message}
                      editable={true}
                      src={theme.ICONS.LOCAL}
                      onEndEditing={() => {
                        handleCepWriter();
                      }}
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
                  placeholderTextColor={theme.COLORS.SECONDARY_100}
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
                  placeholderTextColor={theme.COLORS.SECONDARY_100}
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
                  placeholderTextColor={theme.COLORS.SECONDARY_100}
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
                      placeholderTextColor={theme.COLORS.SECONDARY_100}
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
                      placeholderTextColor={theme.COLORS.SECONDARY_100}
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

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
  HalfInputFour,
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
import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  nickname: Yup.string().required('Apelido de endereço é obrigatório.'),
  cep: Yup.number().required('CEP é obrigatório.').typeError('Somente números'),
  street: Yup.string().required('Rua é obrigatória.'),
  town: Yup.string().required('Cidade é obrigatória.'),
  district: Yup.string().required('Bairro é obrigatório.'),
  state: Yup.string().required('Estado é obrigatório.'),
  number: Yup.number()
    .required('Número é obrigatório.')
    .typeError('Somente números'),
});

export default function SignUpIII({ route }: any) {
  const navigation = useNavigation();

  const { signUp, loading, error } = useAuth();

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
      neighborhood: values.district,
      city: values.town,
      zipcode: values.cep,
      state: values.state,
      nickname: values.nickname,
    });

    // if (error === false) {
      navigation.navigate('SignUpSuccess' as never);
    // }
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
                <InputForm
                  name="nickname"
                  placeholder="Apelido do End."
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="default"
                  control={control}
                  error={errors.nickname && errors.nickname.message}
                  editable={true}
                  src={theme.ICONS.LOCAL}
                />
              </HalfInput>
              <HalfInputTwo>
                <InputForm
                  name="cep"
                  placeholder="CEP"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="number-pad"
                  control={control}
                  error={errors.cep && errors.cep.message}
                  editable={true}
                  src={theme.ICONS.LOCAL}
                />
              </HalfInputTwo>
            </TwoInputsView>
            <InputForm
              name="street"
              placeholder="Rua"
              placeholderTextColor={theme.COLORS.SECONDARY_400}
              keyboardType="default"
              control={control}
              error={errors.street && errors.street.message}
              editable={true}
              src={theme.ICONS.LOCAL}
            />

            <InputForm
              name="town"
              placeholder="Cidade"
              placeholderTextColor={theme.COLORS.SECONDARY_400}
              keyboardType="default"
              control={control}
              error={errors.town && errors.town.message}
              editable={true}
              src={theme.ICONS.LOCAL}
            />

            <InputForm
              name="district"
              placeholder="Bairro"
              placeholderTextColor={theme.COLORS.SECONDARY_400}
              keyboardType="default"
              control={control}
              error={errors.district && errors.district.message}
              editable={true}
              src={theme.ICONS.LOCAL}
            />

            <TwoInputsViewTwo>
              <HalfInputThree>
                <InputForm
                  name="state"
                  placeholder="Estado"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="number-pad"
                  control={control}
                  error={errors.state && errors.state.message}
                  editable={true}
                  src={theme.ICONS.LOCAL}
                />
              </HalfInputThree>

              <HalfInputFour>
                <InputForm
                  name="number"
                  placeholder="Número"
                  placeholderTextColor={theme.COLORS.SECONDARY_400}
                  keyboardType="number-pad"
                  control={control}
                  error={errors.number && errors.number.message}
                  editable={true}
                  src={theme.ICONS.LOCAL}
                />
              </HalfInputFour>
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

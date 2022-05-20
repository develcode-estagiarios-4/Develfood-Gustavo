import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
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
import { BtnView } from '../SignUpI/styles';

import { Header } from '../../components/Header';
import { InputForm } from '../../components/InputForm';
import { ButtonTouchable } from '../../components/ButtonTouchable';
import personup from '../../assets/pessoa2.png';

import theme from '../../theme';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';


import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  firstName: Yup.string().required('Nome é obrigatório.'),
  lastName: Yup.string().required('Sobrenome é obrigatório.'),
  cpf: Yup.number()
    .required('Informe seu CPF.')
    .typeError('CPF deve ser um número'),
  phone: Yup.number()
    .typeError('Telefone deve ser um número')
    .required('Informe seu telefone.'),
});

export default function SignUpII() {
  const navigation = useNavigation();

  const { mergeUserSignUpData } = useAuth();

  function handleSignUp() {
    const values = getValues();
    mergeUserSignUpData({
      costumer: {
        firstName: values.firstName,
        lastName: values.lastName,
        cpf: values.cpf,
        phone: values.phone,
        photo: '',
      },
    });

    navigation.navigate('SignUpIII' as never);
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
              <BorderBall1 source={theme.IMAGES.BORDERBALL} />
              <Ball1 source={theme.IMAGES.GREENBALL} />

              <BorderBall2 source={theme.IMAGES.BORDERBALL} />
              <Ball2 source={theme.IMAGES.BALL} />

              <BorderBall3 source={theme.IMAGES.BORDERBALL} />
              <Ball3 source={theme.IMAGES.BALL} />
            </Balls>

            <Person source={personup} />

            <InputForm
              name="firstName"
              placeholder="Nome"
              placeholderTextColor={theme.COLORS.SECONDARY_400}
              keyboardType="email-address"
              control={control}
              error={errors.firstName && errors.firstName.message}
              editable={true}
              src={theme.ICONS.NAME}
            />

            <InputForm
              name="lastName"
              placeholder="Sobrenome"
              placeholderTextColor={theme.COLORS.SECONDARY_400}
              keyboardType="email-address"
              control={control}
              error={errors.lastName && errors.lastName.message}
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
              name="phone"
              placeholder="Telefone"
              placeholderTextColor={theme.COLORS.SECONDARY_400}
              keyboardType="number-pad"
              control={control}
              error={errors.phone && errors.phone.message}
              editable={true}
              src={theme.ICONS.PHONE}
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

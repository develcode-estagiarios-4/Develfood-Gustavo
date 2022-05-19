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
} from 'react-native';

import personright from '../../assets/pessoa3.png';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { ButtonTouchable } from '../../components/ButtonTouchable';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

const schema = Yup.object().shape({
  street: Yup.string().required('Rua é obrigatória.'),
  town: Yup.string().required('Cidade é obrigatória.'),
  district: Yup.string().required('Bairro é obrigatório.'),
  number: Yup.number()
    .required('Número é obrigatório.')
    .typeError('Somente números'),
  cep: Yup.number()
    .required('Número é obrigatório.')
    .typeError('Somente números'),
});

export default function SignUpIII() {
  const navigation = useNavigation();

  const { user, signUp, mergeUserSignUpData, loading, token, error } = useAuth();

    async function handleSignUp() {
      const values = getValues();
      mergeUserSignUpData({
        street: values.street, 
        city: values.town, 
        neighborhood: values.district, 
        number: values.number,
        zipcode: values.cep 
      });
      await signUp()
      if (error === false) {
        navigation.navigate('SignUpSuccess' as never)
      } 

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
            <Ball2 source={theme.IMAGES.GREENBALL} />

            <BorderBall3 source={theme.IMAGES.BORDERBALL} />
            <Ball3 source={theme.IMAGES.BALL} />
          </Balls>

          <Person source={personright} />

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

          <ButtonTouchable
            onPressed={handleSubmit(handleSignUp)}
            title="Continuar"
            isLoading={loading}
          />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}

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

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { ButtonTouchable } from '../../components/ButtonTouchable';
import { NavigationBar } from '../../components/NavigationBar';
import { useNavigation } from '@react-navigation/native';

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

  function handleSignUp() {
    const values = getValues();
    // signUp(values.email, values.password)
  }

  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => navigation.navigate('SignUpSuccess' as never);

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
            <Ball1 source={require('../../assets/bolaverde.png')} />

            <BorderBall2 source={require('../../assets/bordabola.png')} />
            <Ball2 source={require('../../assets/bolaverde.png')} />

            <BorderBall3 source={require('../../assets/bordabola.png')} />
            <Ball3 source={require('../../assets/bola.png')} />
          </Balls>

          <Person source={require('../../assets/pessoa3.png')} />

          <InputForm
            name="street"
            placeholder="Rua"
            placeholderTextColor={theme.COLORS.SECONDARY_400}
            keyboardType="default"
            control={control}
            error={errors.street && errors.street.message}
            editable={true}
            src={require('../../assets/local2.png')}
          />

          <InputForm
            name="town"
            placeholder="Cidade"
            placeholderTextColor={theme.COLORS.SECONDARY_400}
            keyboardType="default"
            control={control}
            error={errors.town && errors.town.message}
            editable={true}
            src={require('../../assets/local2.png')}
          />

          <InputForm
            name="district"
            placeholder="Bairro"
            placeholderTextColor={theme.COLORS.SECONDARY_400}
            keyboardType="default"
            control={control}
            error={errors.district && errors.district.message}
            editable={true}
            src={require('../../assets/local2.png')}
          />

          <InputForm
            name="number"
            placeholder="Número"
            placeholderTextColor={theme.COLORS.SECONDARY_400}
            keyboardType="number-pad"
            control={control}
            error={errors.number && errors.number.message}
            editable={true}
            src={require('../../assets/local2.png')}
          />

          <InputForm
            name="cep"
            placeholder="CEP"
            placeholderTextColor={theme.COLORS.SECONDARY_400}
            keyboardType="number-pad"
            control={control}
            error={errors.cep && errors.cep.message}
            editable={true}
            src={require('../../assets/local2.png')}
          />

          <ButtonTouchable
            onPressed={handleSubmit(onSubmit)}
            title="Continuar"
            isLoading={false}
          />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}

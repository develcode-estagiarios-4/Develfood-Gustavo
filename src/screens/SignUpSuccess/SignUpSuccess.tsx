import React from 'react';
import { Header } from '../../components/Header';
import { Container, Content, Person, InfoWrapper, Title, Description } from './styles';


import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import successperson from '../../assets/successperson.png';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { ButtonTouchable } from '../../components/ButtonTouchable';
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
    <Container>
      <Header
        name="close"
        title="Cadastro"
        onPressLeftButton={() => {
          navigation.goBack();
        }}
      />
      <Content>
        <Person source={successperson} />
        <InfoWrapper>
        <Title>Cadastro finalizado!</Title>
        <Description>
          Parabéns! Agora você pode aproveitar nossas ofertas e serviços e economizar com super cupons Develfood.
        </Description>
        </InfoWrapper>
        <ButtonTouchable
          onPressed={handleSubmit(onSubmit)}
          title="Concluir"
          isLoading={false}
        />
      </Content>
    </Container>
  );
}

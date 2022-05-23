import React from 'react';
import {
  Container,
  Content,
  Person,
  InfoWrapper,
  Title,
  Description,
} from './styles';

import { Header } from '../../components/Header';
import { ButtonTouchable } from '../../components/ButtonTouchable';
import successperson from '../../assets/successperson.png';

import { useNavigation } from '@react-navigation/native';


export default function SignUpIII() {
  const navigation = useNavigation();

  return (
    <>
      <Header
        name="close"
        title="Cadastro"
        onPressLeftButton={() => {
          navigation.goBack();
        }}
      />
      <Container>
        <Content>
          <Person source={successperson} />
          <InfoWrapper>
            <Title>Cadastro finalizado!</Title>
            <Description>
              Parabéns! Agora você pode aproveitar nossas ofertas e serviços e
              economizar com super cupons Develfood.
            </Description>
          </InfoWrapper>
        </Content>
        <ButtonTouchable
          onPressed={() => {}}
          title="Concluir"
          isLoading={false}
        />
      </Container>
    </>
  );
}

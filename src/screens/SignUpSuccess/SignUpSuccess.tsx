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
import theme from '../../theme';


export default function SignUpIII() {
  const navigation = useNavigation();

  return (
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
          srcLeftIcon={theme.ICONS.CLOSE}
          onPressLeftButton={() => {
            navigation.navigate('SignIn' as never);
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
          onPressed={() => {navigation.navigate('SignIn' as never)}}
          title="Concluir"
          isLoading={false}
        />
      </Container>
    </>
  );
}

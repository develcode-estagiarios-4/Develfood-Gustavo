import React from 'react';
import { StatusBar } from 'react-native';
import { Header } from '../../components/Header';
import { OrderCard } from '../../components/OrderCard';
import theme from '../../theme';
import { Container, Title } from './styles';

export const History: React.FC<undefined> = () => {
  return (
    <>
      <StatusBar
        backgroundColor={theme.COLORS.BACKGROUND}
        barStyle="light-content"
      />
      <Header
        bgColor={theme.COLORS.BACKGROUND}
        fontColor={theme.COLORS.BACKGROUND_LIGHT}
        title="Meus pedidos"
        fontWeight={'500'}
        name={'Order'}
        onPressLeftButton={() => {}}
      />
      <Container>
        <Title>Histórico</Title>

        <OrderCard />
      </Container>
    </>
  );
};

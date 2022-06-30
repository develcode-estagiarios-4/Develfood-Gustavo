import React from 'react';
import { Image, View } from 'react-native';
import { Container, Title, Description, BtnView } from './styles';
import { Header } from '../../components/Header';
import { ButtonTouchable } from '../../components/ButtonTouchable';
import theme from '../../theme';
import { useNavigation } from '@react-navigation/native';

export function OrderSuccess() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND_LIGHT }}>
      <Header
        bgColor={theme.COLORS.BACKGROUND}
        onPressLeftButton={() => {
          navigation.navigate('Início' as never);
        }}
        fontColor={theme.COLORS.BACKGROUND_LIGHT}
        srcLeftIcon={theme.ICONS.CLOSE}
        tint={theme.COLORS.BACKGROUND_LIGHT}
        name={'Order'}
        title={'Checkout'}
        fontWeight={'500'}
      />
      <Container>
        <Title>Pedido realizado!</Title>
        <Image source={require('../../assets/orderSuccess.png')} />
        <Description>
          Agradecemos a preferência! Em breve você receberá atualizações sobre o
          status do seu pedido!
        </Description>
      </Container>
      <BtnView>
        <ButtonTouchable
          isLoading={false}
          title="Ver o pedido"
          disabled={false}
          onPressed={() => {
            navigation.navigate('Pedidos' as never);
          }}
        />
      </BtnView>
    </View>
  );
}

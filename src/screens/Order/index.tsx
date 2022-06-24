import React from 'react';
import { StatusBar, View } from 'react-native';
import { Header } from '../../components/Header';
import { ShoppingBar } from '../../components/ShoppingBar';
import { useShopping } from '../../hooks/shopping';
import theme from '../../theme';
import { Category, RestaurantInfo, RestaurantPhoto, Title, Wrapper } from '../RestaurantProfile/styles';
import { Address, Complement, Container, DeliveryLabel, LabelWrapper, LocalizationWrapper, Map, RightButton } from './styles';

export function Order() {
    const { restaurantPhoto, restaurantName, restaurantFoodType } =
  useShopping();

  return (
    <>
      <StatusBar
        backgroundColor={theme.COLORS.BACKGROUND}
        barStyle="light-content"
      />
      <Header
        name={'Order'}
        bgColor={theme.COLORS.BACKGROUND}
        fontColor={theme.COLORS.BACKGROUND_LIGHT}
        onPressLeftButton={() => {}}
        srcLeftIcon={theme.ICONS.CLOSE}
        title={'Compras'}
        tint={theme.COLORS.BACKGROUND_LIGHT}
      />
      <Container>
        <LocalizationWrapper>
            <Map source={require('../../assets/map.png')} />
            <LabelWrapper>
                <DeliveryLabel>Entregar em</DeliveryLabel>
                <Address>Rua Arcy da Nobrega 667</Address>
                <Complement>Panazollo - Apto: 107</Complement>
            </LabelWrapper>
            <RightButton source={require('../../assets/seta.png')}/>
        </LocalizationWrapper>
        <Wrapper>
                <RestaurantInfo>
                  <LabelWrapper>
                    <Title>{restaurantName}</Title>
                    <Category>
                      {restaurantFoodType.charAt(0).toUpperCase() +
                        restaurantFoodType.slice(1).toLowerCase()}
                    </Category>
                  </LabelWrapper>
                  <RestaurantPhoto
                    source={theme.IMAGES.BANNER
                      // dataGetPhoto.code
                      //   ? { uri: `${dataGetPhoto.code}` }
                      //   : theme.IMAGES.NOIMAGE
                    }
                  />
                </RestaurantInfo>
              </Wrapper>
      </Container>
      <ShoppingBar
        hasBottomBar={false}
        src={require('../../assets/dollar.png')}
        onPressed={() => {}}
        hasQuantity={false}
        title="Finalizar pedido"
      />
    </>
  );
}

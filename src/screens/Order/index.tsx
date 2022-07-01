import React, { useEffect } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import {
  Address,
  Complement,
  Container,
  DeliveryLabel,
  RestaurantInfo,
  LabelWrapper,
  RestaurantWrapper,
  LocalizationWrapper,
  RestaurantPhoto,
  Map,
  RightButton,
  PlatesListContainer,
  PlatesListTitle,
  PlatesList,
} from './styles';
import { Category, Title, Wrapper } from '../RestaurantProfile/styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { PlateCard } from '../../components/PlateCard';
import { Header } from '../../components/Header';
import { ShoppingBar } from '../../components/ShoppingBar';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import { useShopping } from '../../hooks/shopping';
import { useGet } from '../../services';
import theme from '../../theme';

interface Photo {
  id: number;
  code: string;
}

export function Order() {
  const {
    restaurantPhoto,
    restaurantName,
    restaurantFoodType,
    shopping,
    totalItems,
    platePhoto,
    restaurantId,
    foodRequest,
  } = useShopping();
  const { token } = useAuth();

  const navigation = useNavigation();

  const { data: dataGetPhoto, fetchData: fetchDataPhoto } = useGet<Photo>(
    restaurantPhoto,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const { data: dataGetPlatePhoto, fetchData: fetchDataPlatePhoto } =
    useGet<Photo>(platePhoto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  useEffect(() => {
    (async () => await fetchDataPhoto())();
  }, []);

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
        onPressLeftButton={() => {
          navigation.goBack();
        }}
        srcLeftIcon={theme.ICONS.CLOSE}
        title={'Compras'}
        tint={theme.COLORS.BACKGROUND_LIGHT}
      />

      <PlatesList
        showsVerticalScrollIndicator={false}
        data={shopping}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <View
            style={{
              backgroundColor: theme.COLORS.SECONDARY_300,
              paddingBottom: RFValue(13),
              marginLeft: RFValue(30),
              paddingLeft: RFValue(23),
              paddingRight: RFValue(16),
            }}
          >
            <PlateCard
              price={item.unityPrice}
              name={item.name}
              src={item.src ? item.src : theme.IMAGES.NOIMAGE}
              description={item.description}
              restaurantId={restaurantId}
              id={item.id}
              restaurantName={restaurantName}
              restaurantFoodType={restaurantFoodType}
              restaurantPhoto={restaurantPhoto}
              isSwipeable
            />
          </View>
        )}
        ListHeaderComponent={
          <Container>
            {totalItems > 0 && (
              <LocalizationWrapper>
                <Map source={require('../../assets/map.png')} />
                <Image
                  source={require('../../assets/pin.png')}
                  style={{
                    right: RFValue(30),
                  }}
                />
                <LabelWrapper>
                  <DeliveryLabel>Entregar em</DeliveryLabel>
                  <Address>Rua Arcy da Nobrega 667</Address>
                  <Complement>Panazollo - Apto: 107</Complement>
                </LabelWrapper>
                <RightButton source={require('../../assets/seta.png')} />
              </LocalizationWrapper>
            )}
            <Wrapper>
              {totalItems != 0 && (
                <RestaurantInfo>
                  <RestaurantWrapper>
                    <Title>{restaurantName}</Title>
                    <Category>
                      {restaurantFoodType?.charAt(0).toUpperCase() +
                        restaurantFoodType?.slice(1).toLowerCase()}
                    </Category>
                  </RestaurantWrapper>
                  <RestaurantPhoto
                    source={
                      dataGetPhoto.code
                        ? { uri: `${dataGetPhoto.code}` }
                        : theme.IMAGES.NOIMAGE
                    }
                  />
                </RestaurantInfo>
              )}
            </Wrapper>
            {totalItems != 0 && (
              <PlatesListContainer>
                <PlatesListTitle>Meus Itens</PlatesListTitle>
              </PlatesListContainer>
            )}
          </Container>
        }
        ListFooterComponent={() =>
          totalItems > 0 ? (
            <View
              style={{
                backgroundColor: theme.COLORS.SECONDARY_300,
                marginLeft: RFValue(30),
                paddingLeft: RFValue(23),
                paddingRight: RFValue(16),
                height: RFValue(250),
              }}
            ></View>
          ) : null
        }
        ListEmptyComponent={
          <View
            style={{
              alignItems: 'center',
              backgroundColor: theme.COLORS.BACKGROUND_LIGHT,
            }}
          >
            <Image source={require('../../assets/emptyshopping.png')} />
            <Text
              style={{
                fontSize: RFValue(18),
                color: '#2B2B2E',
              }}
            >
              Seu carrinho está vazio
            </Text>
          </View>
        }
      />

      {totalItems != 0 && (
        <ShoppingBar
          hasBottomBar={false}
          src={require('../../assets/dollar.png')}
          onPressed={() => {
            foodRequest();
          }}
          hasQuantity={false}
          title="Finalizar pedido"
        />
      )}
    </>
  );
}

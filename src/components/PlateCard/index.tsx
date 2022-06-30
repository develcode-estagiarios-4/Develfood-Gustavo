import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from 'react-native';
import {
  Container,
  Title,
  ImageView,
  PlateImage,
  PlateWrapper,
  Price,
  AddButton,
  AddLabel,
  AddWord,
  Description,
  Footer,
  RightSideContainer,
  QuantityWrapper,
  ItemQuantity,
  ItemQuantityContainer,
  DeleteView,
} from './styles';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAuth } from '../../hooks/auth';
import { useShopping } from '../../hooks/shopping';
import { useGet } from '../../services';
import theme from '../../theme';
import { ItemProps } from '../../hooks/shopping'

interface Props extends TouchableOpacityProps {
  description: string;
  src: any;
  price: string;
  name: string;
  id: number;
  restaurantId?: number;
  restaurantPhoto?: any;
  restaurantName?: string;
  restaurantFoodType?: string;
  isSwipeable?: boolean;
}

interface Photos {
  id: number;
  code: string;
}

export function PlateCard({
  description,
  src,
  price,
  name,
  restaurantId,
  id,
  restaurantPhoto,
  restaurantName,
  restaurantFoodType,
  isSwipeable,
  ...rest
}: Props) {
  const { token } = useAuth();
  const { addItem, shopping, removeItem, clearShoppingItem } = useShopping();
  const {
    data: dataGet,
    loading,
    setLoading,
    fetchData,
  } = useGet<Photos>(src, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const [photos, setPhotos] = useState<Photos[]>([]);

  function onSuccessLoad(data?: any) {
    setPhotos([...photos, ...(data as Photos[])]);
    setLoading(false);
  }

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
    setLoading(true);
  }, []);

  function priceConverter() {
    const priceWZeros = parseFloat(price).toFixed(2);
    const priceFormatted = priceWZeros.toString().replace('.', ',');
    return priceFormatted;
  }
  const priceFormatted = priceConverter();

  const translateX = useSharedValue(0);
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      translateX.value = withTiming(translateX.value > 0 ? 150 : 0, {
        duration: 1500,
      });
    },
    onStart: () => {
      translateX.value = withTiming(0, {
        duration: 1000,
      });
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    zIndex: 1,
    transform: [
      {
        translateX:
          translateX.value > 0
            ? translateX.value
            : withTiming(0, {
                duration: 1500,
              }),
      },
    ],
  }));

  return (
    <>
      <PanGestureHandler
        onGestureEvent={panGesture}
        failOffsetY={[-5, 5]}
        activeOffsetX={[-5, 5]}
      >
        <Animated.View style={[isSwipeable && rStyle]}>
          <Container>
            <ImageView>
              <PlateImage
                source={
                  dataGet.code
                    ? { uri: `${dataGet.code}` }
                    : theme.IMAGES.NOIMAGE
                }
              />
            </ImageView>

            <PlateWrapper>
              <RightSideContainer height={25}>
                <Title>{name}</Title>
              </RightSideContainer>

              <RightSideContainer height={50}>
                <Description numberOfLines={3}>{description}</Description>
              </RightSideContainer>

              <RightSideContainer height={25} margTop={7}>
                <Footer>
                  <Price>R$ {priceFormatted}</Price>
                  {shopping.find((item: ItemProps) => item?.id === id)?.quantity >
                  0 ? (
                    <QuantityWrapper>
                      <AddButton
                        onPress={() => {
                          removeItem(id, price);
                        }}
                      >
                        <AddLabel>
                          {shopping.find((item: ItemProps) => item?.id == id)
                            ?.quantity == 1 ? (
                            <Image
                              resizeMode="cover"
                              source={theme.ICONS.TRASH}
                            />
                          ) : (
                            '-'
                          )}
                        </AddLabel>
                      </AddButton>
                      <ItemQuantityContainer>
                        <ItemQuantity>
                          {
                            shopping.find((item: ItemProps) => item?.id == id)
                              ?.quantity
                          }
                        </ItemQuantity>
                      </ItemQuantityContainer>
                      <AddButton
                        onPress={() => {
                          addItem(
                            id,
                            price,
                            name,
                            description,
                            src,
                            restaurantId,
                            restaurantPhoto,
                            restaurantName,
                            restaurantFoodType,
                          );
                        }}
                      >
                        <AddLabel>+</AddLabel>
                      </AddButton>
                    </QuantityWrapper>
                  ) : (
                    <AddButton
                      onPress={() => {
                        addItem(
                          id,
                          price,
                          name,
                          description,
                          src,
                          restaurantId,
                          restaurantPhoto,
                          restaurantName,
                          restaurantFoodType,
                        );
                      }}
                    >
                      <AddWord>Adicionar</AddWord>
                    </AddButton>
                  )}
                </Footer>
              </RightSideContainer>
            </PlateWrapper>
          </Container>
        </Animated.View>
      </PanGestureHandler>
      {isSwipeable && (
        <DeleteView>
          <AddButton
            onPress={() => {
              clearShoppingItem(id);
            }}
          >
            <Image
              source={require('../../assets/bigtras.png')}
              style={styles.iconSwipe}
            />
            <Text style={styles.textRemove}>Remover</Text>
          </AddButton>
        </DeleteView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  iconSwipe: {
    height: RFValue(30),
    width: RFValue(30),
    left: '25%',
    tintColor: theme.COLORS.BACKGROUND_LIGHT,
  },
  textRemove: {
    left: '21%',
    color: theme.COLORS.BACKGROUND_LIGHT,
    fontSize: RFValue(12),
    marginTop: RFValue(6),
  },
});

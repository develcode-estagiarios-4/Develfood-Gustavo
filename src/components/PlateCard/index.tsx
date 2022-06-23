import React, { useEffect, useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { useShopping } from '../../hooks/shopping';
import { useGet } from '../../services';
import theme from '../../theme';
import {
  Container,
  Title,
  ImageView,
  PlateImage,
  PlateWrapper,
  Price,
  AddButton,
  AddLabel,
  Description,
  Footer,
  RightSideContainer,
} from './styles';

interface Props extends TouchableOpacityProps {
  description: string;
  src: any;
  price: string;
  name: string;
  id: number;
  restaurantId: number;
}

interface Photos {
  id: number;
  code: string;
}

export function PlateCard({ description, src, price, name, restaurantId, id, ...rest }: Props) {
  const { token } = useAuth();
  const { addItem, shopping, totalValue, totalItems, removeItem  } = useShopping();
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

  return (
    <Container>
      <ImageView>
        <PlateImage
          source={
            dataGet.code ? { uri: `${dataGet.code}` } : theme.IMAGES.NOIMAGE
          }
        />
      </ImageView>

      <PlateWrapper>
        <RightSideContainer height={25}>
          <Title>{name}</Title>
        </RightSideContainer>

        <RightSideContainer height={50}>
          <Description>{description}</Description>
        </RightSideContainer>

        <RightSideContainer height={25} margTop={7}>
          <Footer>
            <Price>R$ {priceFormatted}</Price>
            <AddButton onPress={() => { addItem(id, price, restaurantId)}}>
              <AddLabel>Adicionar</AddLabel>
            </AddButton>
            <AddButton onPress={() => { removeItem(id, price)}}>
              <AddLabel>Tirar</AddLabel>
            </AddButton>
          </Footer>
        </RightSideContainer>
      </PlateWrapper>
    </Container>
  );
}

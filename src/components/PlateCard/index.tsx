import React, { useEffect, useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useAuth } from '../../hooks/auth';
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
}

interface Photos {
  id: number;
  code: string;
}

export function PlateCard({ description, src, price, name, ...rest }: Props) {
  const { token } = useAuth();
  const {
    data: dataGet,
    loading,
    setLoading,
    error,
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
            <AddButton>
              <AddLabel>Adicionar</AddLabel>
            </AddButton>
          </Footer>
        </RightSideContainer>
      </PlateWrapper>
    </Container>
  );
}

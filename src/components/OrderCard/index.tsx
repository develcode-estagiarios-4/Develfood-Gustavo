import React, { useEffect, useState } from 'react';
import {
  Container,
  RestaurantPhoto,
  InfoWrapper,
  CheckImage,
  OrderId,
  OrderStatus,
  OrderWrapper,
  PlatesLabel,
  Title,
  RightSideContainer,
} from './styles';

import { useAuth } from '../../hooks/auth';
import { useGet } from '../../services';
import theme from '../../theme';
import { RFPercentage } from 'react-native-responsive-fontsize';

interface Props {
  src: string;
  name: string;
  id: number;
  date: Date;
  quantityAndName?: string;
}

interface Photos {
  id: number;
  code: string;
}

export function OrderCard({
  name,
  src,
  id,
  date,
  quantityAndName,
  ...rest
}: Props) {
  const { token } = useAuth();

  const { data: dataGet, fetchData } = useGet<Photos>(src, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const [photos, setPhotos] = useState<Photos[]>([]);

  function onSuccessLoad(data?: any) {
    setPhotos([...photos, ...(data as Photos[])]);
  }

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
  }, []);

  return (
    <>
      <Container>
        <RestaurantPhoto
          source={
            dataGet.code ? { uri: `${dataGet.code}` } : theme.IMAGES.NOIMAGE
          }
        />
        <InfoWrapper>
          <RightSideContainer height={25} width={100}>
            <Title>{name}</Title>
          </RightSideContainer>

          <RightSideContainer height={24} width={100}>
            <OrderWrapper>
              <CheckImage source={require('../../assets/checkorder.png')} />
              <OrderStatus>    Pedido finalizado N°</OrderStatus>
              <OrderId> {id}</OrderId>
            </OrderWrapper>
          </RightSideContainer>

          <RightSideContainer height={42} width={RFPercentage(13.718)}>
            <PlatesLabel>{quantityAndName}</PlatesLabel>
          </RightSideContainer>
        </InfoWrapper>
      </Container>
    </>
  );
}

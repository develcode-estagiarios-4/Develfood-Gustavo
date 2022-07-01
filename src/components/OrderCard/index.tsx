import React, { useEffect, useState } from 'react';
import {
  DateText,
  Container,
  RestaurantPhoto,
  InfoWrapper,
  CheckImage,
  OrderId,
  OrderStatus,
  OrderWrapper,
  PlatesLabel,
  Title,
} from './styles';

import { useAuth } from '../../hooks/auth';
import { useGet } from '../../services';
import theme from '../../theme';

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
      {/* <DateText>{date}</DateText> */}
      <Container>
        <RestaurantPhoto
          source={
            dataGet.code ? { uri: `${dataGet.code}` } : theme.IMAGES.NOIMAGE
          }
        />
        <InfoWrapper>
          <Title>{name}</Title>
          <OrderWrapper>
            <CheckImage source={require('../../assets/checkorder.png')} />
            <OrderStatus> Pedido finalizado N°</OrderStatus>
            <OrderId> {id}</OrderId>
          </OrderWrapper>
          <PlatesLabel>
            {quantityAndName}
          </PlatesLabel>
        </InfoWrapper>
      </Container>
    </>
  );
}

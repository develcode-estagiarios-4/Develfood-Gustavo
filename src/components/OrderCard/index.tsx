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
} from './styles';

import { useAuth } from '../../hooks/auth';
import { useGet } from '../../services';
import theme from '../../theme';

interface Props {
  name?: string;
  src?: any;
  foodType?: string;
  id?: number;
  evaluation?: number;
}

interface Photos {
  id: number;
  code: string;
}

export function OrderCard({
  name,
  src,
  foodType,
  id,
  evaluation,
  ...rest
}: Props) {
  const { token } = useAuth();

  const {
    data: dataGet,
    setLoading,
    fetchData,
  } = useGet<Photos>(src, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { data: dataGetEvaluation, fetchData: fetchDataEvaluation } =
    useGet<number>(`/restaurantEvaluation/${id}/grade`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  const [focused, setFocused] = useState(false);
  const [photos, setPhotos] = useState<Photos[]>([]);

  function onSuccessLoad(data?: any) {
    setPhotos([...photos, ...(data as Photos[])]);
    setLoading(false);
  }

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
    setLoading(true);
  }, []);

  useEffect(() => {
    !!id && fetchDataEvaluation();
  }, [id]);

  return (
    <Container>
        <RestaurantPhoto source={theme.IMAGES.BANNER} />
        <InfoWrapper>
        <Title>McDonald's - São Luis Drive</Title>
        <OrderWrapper>
          <CheckImage source={theme.IMAGES.GREENBALL} />
          <OrderStatus>Pedido finalizado</OrderStatus>
          <OrderId>N° 12345</OrderId>
        </OrderWrapper>
        <PlatesLabel>
          Family Box 3 pessoas: 2 Mcofertas médias + MCLanche Feliz
        </PlatesLabel>
        </InfoWrapper>
    </Container>
  );
}

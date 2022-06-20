import React, { useEffect, useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  FavoriteView,
  BtnFavorite,
  Heart,
  IconView,
  Icon,
  Footer,
  Title,
  Wrapper,
  FoodType,
  Evaluation,
  Star,
  Number,
} from './styles';

import { useAuth } from '../../hooks/auth';
import { useGet } from '../../services';
import theme from '../../theme';
interface Props extends TouchableOpacityProps {
  name: string;
  src: any;
  foodType: string;
  id: number;
  evaluation?: number;
}

interface Photos {
  id: number;
  code: string;
}

export function RestaurantCard({
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

  const { 
    data: dataGetEvaluation, 
    fetchData: fetchDataEvaluation 
  } = useGet<number>(`/restaurantEvaluation/${id}/grade`, {
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
    <Container activeOpacity={0.1} {...rest}>
      <FavoriteView>
        <BtnFavorite onPress={() => setFocused(!focused)}>
          <Heart
            source={theme.ICONS.BORDERHEART}
            style={focused ? { tintColor: theme.COLORS.BACKGROUND } : null}
          />
        </BtnFavorite>
      </FavoriteView>

      <IconView>
        <Icon
          source={
            dataGet.code ? { uri: `${dataGet.code}` } : theme.IMAGES.NOIMAGE
          }
        />
      </IconView>

      <Footer>
        <Title numberOfLines={1}>{name}</Title>
        <Wrapper>
          <FoodType>{foodType}</FoodType>
          <Evaluation>
            <Star source={theme.ICONS.STAR} />
            <Number>
              {dataGetEvaluation.toString() === '[object Object]'
                ? '-'
                : dataGetEvaluation.toString()}
            </Number>
          </Evaluation>
        </Wrapper>
      </Footer>
    </Container>
  );
}
import React, { useEffect, useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { useGet } from '../../services';
import theme from '../../theme';
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

interface Props extends TouchableOpacityProps {
  name: string;
  src: any;
  foodType: string;
}

interface Photos {
  id: number;
  code: string;
}

export function RestaurantCard({ name, src, foodType, ...rest }: Props) {
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
  
  const [focused, setFocused] = useState(false);
  const [photos, setPhotos] = useState<Photos[]>([])

  function onSuccessLoad(data?: any) {
    setPhotos([...photos, ...(data as Photos[])]);
    setLoading(false);
  }

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
    setLoading(true);
  }, []);

  return (
    <Container {...rest}>
      <FavoriteView>
        <BtnFavorite onPress={() => setFocused(!focused)}>
          <Heart
            source={theme.ICONS.BORDERHEART}
            style={focused ? { tintColor: theme.COLORS.BACKGROUND } : null}
          />
        </BtnFavorite>
      </FavoriteView>

      <IconView>
        <Icon source= { dataGet.code ? {uri: `${dataGet.code}`} : theme.IMAGES.NOIMAGE} />
      </IconView>

      <Footer>
        <Title numberOfLines={1}>{name}</Title>

        <Wrapper>
          <FoodType>{foodType}</FoodType>
          <Evaluation>
            <Star source={theme.ICONS.STAR} />
            <Number>4.3</Number>
          </Evaluation>
        </Wrapper>
      </Footer>
    </Container>
  );
}
// {Math.ceil(Math.random() * 5)}

import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
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
}

export function RestaurantCard({ name, src, ...rest }: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <Container {...rest}>
      <FavoriteView>
        <BtnFavorite onPress={() => setFocused(!focused)}>
          <Heart
            source={require('../../assets/borderheart.png')}
            style={focused ? { tintColor: theme.COLORS.BACKGROUND } : null}
          />
        </BtnFavorite>
      </FavoriteView>

      <IconView>
        <Icon source={src} />
      </IconView>

      <Footer>
        <Title numberOfLines={1}>{name}</Title>

        <Wrapper>
          <FoodType>Pizza</FoodType>

          <Evaluation>
            <Star source={require('../../assets/star.png')} />

            <Number>4.3</Number>
          </Evaluation>
        </Wrapper>
      </Footer>
    </Container>
  );
}

// {Math.ceil(Math.random() * 5)}

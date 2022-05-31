import React, { useState } from 'react';
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

interface Props {
  name: string;
}

export function RestaurantCard({ name }: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <Container>
      <FavoriteView>
        <BtnFavorite onPress={() => setFocused(!focused)}>
          <Heart
            source={
              focused
                ? require('../../assets/favoriteheart.png')
                : require('../../assets/borderheart.png')
            }
            style={focused ? { tintColor: theme.COLORS.BACKGROUND } : null}
          />
        </BtnFavorite>
      </FavoriteView>

      <IconView>
        <Icon source={require('../../assets/rest.png')} />
      </IconView>

      <Footer>
        <Title>{name}</Title>

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

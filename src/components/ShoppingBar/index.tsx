import React, { useEffect } from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useShopping } from '../../hooks/shopping';
import theme from '../../theme';
import {
  Amount,
  Container,
  Btn,
  LeftImageView,
  LeftImage,
  QuantityBall,
  QuantityLabel,
  Title,
} from './styles';

interface Props extends TouchableOpacityProps {
  src: any;
  hasBottomBar: boolean;
}

export function ShoppingBar({ src, hasBottomBar, ...rest }: Props) {
  const { totalValue, totalItems } = useShopping();

  function priceConverter() {
    const priceWZeros = totalValue.toFixed(2);
    const priceFormatted = priceWZeros.toString().replace('.', ',');
    return priceFormatted;
  }
  const priceFormatted = priceConverter();

  return (
    <Container bottom={hasBottomBar == true ? RFValue(46.75) : RFValue(-3)}>
      <Btn activeOpacity={0.9} onPress={() => console.log('oi')}>
        <LeftImageView>
          <LeftImage
            source={src}
            style={{ tintColor: theme.COLORS.BACKGROUND_LIGHT }}
          />
          <QuantityBall>
            <QuantityLabel>{totalItems > 9 ? '9+' : totalItems}</QuantityLabel>
          </QuantityBall>
        </LeftImageView>
        <Title>Ver carrinho</Title>
        <Amount numberOfLines={1}>R$ {priceFormatted}</Amount>
      </Btn>
    </Container>
  );
}

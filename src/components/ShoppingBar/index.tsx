import React from 'react';
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
  onPressed: Function;
  title: string;
  hasQuantity: boolean;
}

export function ShoppingBar({ src, hasBottomBar, onPressed, title, hasQuantity, ...rest }: Props) {
  const { totalValue, totalItems, clearShopping } = useShopping();

  function priceConverter() {
    const priceWZeros = totalValue.toFixed(2);
    const priceFormatted = priceWZeros.toString().replace('.', ',');
    return priceFormatted;
  }
  const priceFormatted = priceConverter();

  return (
    <Container bottom={hasBottomBar ? RFValue(46.75) : RFValue(-3)}>
      <Btn activeOpacity={0.9} onPress={() => { onPressed() }}>
        <LeftImageView>
          <LeftImage
            source={src}
            style={{ tintColor: theme.COLORS.BACKGROUND_LIGHT }}
          />
          { hasQuantity && <QuantityBall>
            <QuantityLabel>{totalItems > 9 ? '9+' : totalItems}</QuantityLabel>
          </QuantityBall> }
        </LeftImageView>
        <Title>{title}</Title>
        <Amount numberOfLines={1}>R$ {priceFormatted}</Amount>
      </Btn>
    </Container>
  );
}

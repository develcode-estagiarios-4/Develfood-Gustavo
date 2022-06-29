import React from 'react';
import { Text } from 'react-native';
import { Header } from '../../components/Header';
import theme from '../../theme';

export function OrderSuccess() {
  return (
    <>
      <Header
        bgColor={theme.COLORS.BACKGROUND}
        onPressLeftButton={() => {}}
        fontColor={theme.COLORS.BACKGROUND_LIGHT}
        srcLeftIcon={theme.ICONS.CLOSE}
        tint={theme.COLORS.BACKGROUND_LIGHT}
        name={'Order'}
        title={'Checkout'}
      />
      <Text>Sucesso</Text>
    </>
  );
}

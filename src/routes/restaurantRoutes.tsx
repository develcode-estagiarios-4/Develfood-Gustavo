import React, { useEffect, useState } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantProfile from '../screens/RestaurantProfile';
import { StatusBar } from 'react-native';
import theme from '../theme';
import AppRoutes from './routes.routes';
import ShoppingProvider, { useShopping } from '../hooks/shopping';
import { ShoppingBar } from '../components/ShoppingBar';

export default function RestaurantRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  const { totalValue, totalItems, shopping } = useShopping();
// const [hasItems, setHasItems] = useState<boolean>(false)
// if (totalItems > 0) {
//   setHasItems(true)
//   console.log(hasItems)
// }

  return (
    <>
      <StatusBar
        backgroundColor={theme.COLORS.BACKGROUND_LIGHT}
        barStyle={'dark-content'}
      />
      <ShoppingProvider>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Home" component={AppRoutes} />
          <Screen name="RestaurantProfile" component={RestaurantProfile} />
        </Navigator>
      </ShoppingProvider>
    </>
  );
}

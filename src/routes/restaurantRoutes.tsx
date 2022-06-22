import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantProfile from '../screens/RestaurantProfile';
import { StatusBar } from 'react-native';
import theme from '../theme';
import AppRoutes from './routes.routes';
import ShoppingProvider from '../hooks/shopping';

export default function RestaurantRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

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

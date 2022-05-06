import React, { useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RNBootSplash from 'react-native-bootsplash';

import { Home } from '../screens/Home/Home';
import { History } from '../screens/History/History';
import { Favorites } from '../screens/Favorites/Favorites';
import { Profile } from '../screens/Profile/Profile';

import { TabBarWrapper } from '../components/NavigationBar/TabBarWrapper';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../theme';
import { NavigationBar } from '../components/NavigationBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <>
    <Navigator screenOptions={{headerShown: false}}
    >
      <Screen
        name="Início"
        component={Home}
      />

      <Screen
        name="Favoritos"
        component={Favorites}
      />

      <Screen
        name="Histórico"
        component={History}
      />

      <Screen
        name="Perfil"
        component={Profile}
      />

    </Navigator>

    <NavigationBar  />
    </>
  );
}

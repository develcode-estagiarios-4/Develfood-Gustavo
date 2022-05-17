import React, { useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RNBootSplash from 'react-native-bootsplash';

import { Home } from '../screens/Home/Home';
import { History } from '../screens/History/History';
import { Favorites } from '../screens/Favorites/Favorites';
import { Profile } from '../screens/Profile/Profile';

import { NavigationBar } from '../components/NavigationBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpI from '../screens/SignUpI/SignUpI';

export default function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();


  return (
    <>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Início" component={Home} />

        <Screen name="Favoritos" component={Favorites} />

        <Screen name="Histórico" component={History} />

        <Screen name="Perfil" component={Profile} />

      </Navigator>

      <NavigationBar />
    </>
  );
}

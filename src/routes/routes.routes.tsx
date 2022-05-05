import React, { useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RNBootSplash from 'react-native-bootsplash';

import { Home } from '../screens/Home/Home';
import { History } from '../screens/History/History';
import { Favorites } from '../screens/Favorites/Favorites';
import { Profile } from '../screens/Profile/Profile';

import { TabBarIcon } from '../components/TabBarIcon';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../theme';

export default function AppRoutes() {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.COLORS.PRIMARY_900,
        tabBarLabelStyle: {
          fontSize: RFValue(12.5),
          fontWeight: '600',
        }
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name={'home'} />;
          },
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name={'heart'} />;
          },
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={History}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name={'historic'} />;
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name={'werever'} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

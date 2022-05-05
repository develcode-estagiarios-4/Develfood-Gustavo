import React, { useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RNBootSplash from 'react-native-bootsplash';

import { Inicio } from '../screens/Inicio/Inicio';
import { Historico } from '../screens/Historico/Historico';
import { Favoritos } from '../screens/Favoritos/Favoritos';
import { Perfil } from '../screens/Perfil/Perfil';

import { TabBarIcon } from '../components/TabBarIcon';
import { RFValue } from 'react-native-responsive-fontsize';

export default function AppRoutes() {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#C20C18',
        tabBarLabelStyle: {
          fontSize: RFValue(12.5),
          fontWeight: '600',
        }
      }}
    >
      <Tab.Screen
        name="Início"
        component={Inicio}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name={'home'} />;
          },
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name={'heart'} />;
          },
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={Historico}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name={'historic'} />;
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name={'werever'} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

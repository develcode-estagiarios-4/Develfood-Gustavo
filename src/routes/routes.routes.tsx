import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Inicio } from '../screens/Inicio/Inicio';
import { Historico } from '../screens/Historico/Historico';
import { Favoritos } from '../screens/Favoritos/Favoritos';
import { Perfil } from '../screens/Perfil/Perfil';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={Inicio} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
      <Tab.Screen name="Histórico" component={Historico} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  )
};

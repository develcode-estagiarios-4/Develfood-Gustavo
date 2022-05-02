import React, {useEffect} from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RNBootSplash from 'react-native-bootsplash';

import { Inicio } from '../screens/Inicio/Inicio';
import { Historico } from '../screens/Historico/Historico';
import { Favoritos } from '../screens/Favoritos/Favoritos';
import { Perfil } from '../screens/Perfil/Perfil';


export default function AppRoutes() {

const Tab = createBottomTabNavigator();

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={Inicio} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
      <Tab.Screen name="Histórico" component={Historico} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  )
};

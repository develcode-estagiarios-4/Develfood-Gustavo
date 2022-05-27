import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home/Home';
import { History } from '../screens/History/History';
import { Favorites } from '../screens/Favorites/Favorites';
import { Profile } from '../screens/Profile/Profile';

import { TabBarIcon } from '../components/NavigationBar/TabBarIcon';
import theme from '../theme';

export default function AppRoutes() {
  const Tab = createBottomTabNavigator();


  return (

    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.COLORS.PRIMARY_900,
      tabBarStyle: {marginTop: 5},
      tabBarLabelStyle: {
        display: 'none'
      }
    }}
  >
    <Tab.Screen
      name="Início"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => {
          return <TabBarIcon focused={focused} name={'Início'} src={theme.ICONS.HOME} />;
        },
      }}
    />

    <Tab.Screen
      name="Favoritos"
      component={Favorites}
      options={{
        tabBarIcon: ({ focused }) => {
          return <TabBarIcon focused={focused} name={'Favoritos'} src={theme.ICONS.FAVORITES}/>;
        },
      }}
    />

    <Tab.Screen
      name="Pedidos"
      component={History}
      options={{
        tabBarIcon: ({ focused }) => {
          return <TabBarIcon focused={focused} name={'Pedidos'} src={theme.ICONS.HISTORY}/>;
        },
      }}
    />

    <Tab.Screen
      name="Perfil"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) => {
          return <TabBarIcon focused={focused} name={'Perfil'} src={theme.ICONS.PROFILE} />;
        },
      }}
    />
  </Tab.Navigator>
  );
}

import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../screens/Home/Home';
import { History } from '../screens/History/History';
import { Favorites } from '../screens/Favorites/Favorites';
import { Profile } from '../screens/Profile/Profile';

import { TabBarIcon } from '../components/NavigationBar/TabBarIcon';
import { ShoppingBar } from '../components/ShoppingBar';
import { useShopping } from '../hooks/shopping';
import theme from '../theme';

export default function AppRoutes() {
  const Tab = createBottomTabNavigator();
  const { totalItems } = useShopping();

  return (
    <>
      {totalItems > 0 && (
        <ShoppingBar
          hasBottomBar
          src={theme.ICONS.CART}
          onPressed={() => {}}
        />
      )}
      <Tab.Navigator
        screenOptions={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: theme.COLORS.PRIMARY_900,
          tabBarStyle: { marginTop: 5, zIndex: 1 },
          tabBarLabelStyle: {
            display: 'none',
          },
        }}
      >
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarIcon
                  focused={focused}
                  name={'Início'}
                  src={theme.ICONS.HOME}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="Favoritos"
          component={Favorites}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarIcon
                  focused={focused}
                  name={'Favoritos'}
                  src={theme.ICONS.FAVORITES}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="Pedidos"
          component={History}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarIcon
                  focused={focused}
                  name={'Pedidos'}
                  src={theme.ICONS.HISTORY}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarIcon
                  focused={focused}
                  name={'Perfil'}
                  src={theme.ICONS.PROFILE}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}

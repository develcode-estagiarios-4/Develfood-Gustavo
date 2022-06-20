import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn/SignIn';
import SignUpI from '../screens/SignUpI/SignUpI';
import SignUpII from '../screens/SignUpII/SignUpII';
import SignUpIII from '../screens/SignUpIII/SignUpIII';
import SignUpSuccess from '../screens/SignUpSuccess/SignUpSuccess';
import { StatusBar } from 'react-native';
import theme from '../theme';

export default function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUpI" component={SignUpI} />
        <Screen name="SignUpII" component={SignUpII} />
        <Screen name="SignUpIII" component={SignUpIII} />
        <Screen name="SignUpSuccess" component={SignUpSuccess} />
      </Navigator>
    </>
  );
}
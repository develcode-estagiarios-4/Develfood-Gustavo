import React, { useEffect } from 'react';


import RNBootSplash from 'react-native-bootsplash';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn/SignIn';
import SignUpI from '../screens/SignUpI/SignUpI';
import SignUpII from '../screens/SignUpII/SignUpII';
import SignUpIII from '../screens/SignUpIII/SignUpIII';
import SignUpSuccess from '../screens/SignUpSuccess/SignUpSuccess';

export default function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

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
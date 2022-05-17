import React, { useEffect } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RNBootSplash from 'react-native-bootsplash';

import { Home } from '../screens/Home/Home';
import { History } from '../screens/History/History';
import { Favorites } from '../screens/Favorites/Favorites';
import { Profile } from '../screens/Profile/Profile';
import SignUp  from '../screens/SignUp/SignUp';

import { NavigationBar } from '../components/NavigationBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn/SignIn';

export default function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
      </Navigator>
    </>
  );
}
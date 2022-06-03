import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Routes } from './src/routes';

import { AuthProvider } from './src/hooks/auth';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import theme from './src/theme';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

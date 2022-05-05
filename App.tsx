import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/routes.routes';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

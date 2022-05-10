import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';


import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/routes.routes';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import SignIn from './src/screens/SignIn/SignIn';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
      {/* <NavigationContainer>
        <AppRoutes />
      </NavigationContainer> */}
    </ThemeProvider>
  );
}

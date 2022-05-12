import React, { useState } from 'react';
import { TextInputProps, Text, View, KeyboardTypeOptions } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  InputLogin,
  LoginIcon,
  IconPassword,
  HideIcon,
  ErrorMessage
} from './styles';

interface Props extends TextInputProps {
  name: string;
  placeholder: string;
  placeholderTextColor: string;
  keyboardType?: KeyboardTypeOptions;

}

export function Input({ name, placeholder, placeholderTextColor, keyboardType }: Props) {
  const theme = useTheme();

  const [data, setData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidEmail = (val: string) => {
    if ( val.trim().length >= 4 ) {
      setData({
        ...data,
        isValidEmail: true
      });
    } else {
      setData ({
        ...data,
        isValidEmail: false
      })
    }

  }

  const handleValidPassword = (val: string) => {
    if ( val.trim().length >= 3 ) {
      setData({
        ...data,
        isValidPassword: true
      });
    } else {
      setData ({
        ...data,
        isValidPassword: false
      })
    }

  }

  return (
    <View>
      
      <Container>
       
        <LoginIcon
          source={
            name === 'email'
              ? theme.ICONS.EMAIL
              : name === 'password'
              ? theme.ICONS.PASSWORD
              : null
          }
        />

        <InputLogin 
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        secureTextEntry={data.secureTextEntry ? true : false}
        onEndEditing={ name === 'email' ? (e) => handleValidEmail(e.nativeEvent.text) : (e) => handleValidPassword(e.nativeEvent.text) }
       />

        <IconPassword onPress={updateSecureTextEntry}>
          <HideIcon source={name === 'password' ? theme.ICONS.HIDE : null} />
        </IconPassword>
     
      </Container>

      { name === 'email' && data.isValidEmail ? <ErrorMessage></ErrorMessage> : name === 'email' && data.isValidEmail === false ? <ErrorMessage>O campo e-mail está vazio</ErrorMessage> : name === 'password' && data.isValidPassword ? <ErrorMessage></ErrorMessage> : name === 'password' && data.isValidPassword === false ? <ErrorMessage>O campo de senha está vazio</ErrorMessage> : null }
    
    </View>

  );
}

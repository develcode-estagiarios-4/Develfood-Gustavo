import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps, Text, View, KeyboardTypeOptions } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  InputLogin,
  LoginIcon,
  IconPassword,
  HideIcon,
  ErrorMessage,
} from './styles';

interface Props extends TextInputProps {
  name: string;
  placeholder: string;
  placeholderTextColor: string;
  keyboardType?: KeyboardTypeOptions;
  control: Control;
  error: string;
  editable: boolean;
  src: any;
}

export function Input({
  name,
  control,
  error,
  placeholder,
  placeholderTextColor,
  keyboardType,
  editable,
  src
}: Props) {
  const theme = useTheme();

  const [data, setData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View>
      <Container>
        <LoginIcon
          source={src}
        />
        <Controller
          control={control}
          rules={{required: true}}
          render={({ field: { onChange, value } }) => (
            <InputLogin
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              keyboardType={keyboardType}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={onChange}
              value={value}
              editable={editable}
              hasRightIcon={name === 'password'}
            />
          )}
          name={name}
        />

        <IconPassword onPress={() => updateSecureTextEntry()}>
          <HideIcon source={name === 'password' ? theme.ICONS.HIDE : null} />
        </IconPassword>
      </Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </View>
  );
}

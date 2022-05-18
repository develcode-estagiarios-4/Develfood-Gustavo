import React, { useEffect, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps, Text, View, KeyboardTypeOptions, ImageSourcePropType } from 'react-native';
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
  keyboardType: KeyboardTypeOptions;
  control: Control;
  error: string;
  editable: boolean;
  src: any;
}

export function InputForm({
  name,
  control,
  error,
  placeholder,
  placeholderTextColor,
  keyboardType,
  editable,
  src,
}: Props) {
  const theme = useTheme();

  const [iconHidePassword, setIconHidePassword] = useState<ImageSourcePropType>({});

  const [isPressed, setIsPressed] = useState(true);

  const [data, setData] = useState({
    email: '',
    password: '',
    secureTextEntry: false,
    isPressed: true
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
      isPressed: !data.isPressed

    });
  };

  useEffect(() => {
    if (data.isPressed) {
      setIconHidePassword(theme.ICONS.HIDE)
    }  else {
      setIconHidePassword(theme.ICONS.NOHIDE)
    }
  }, [data.isPressed]);

  return (
    <View>
      <Container>
        <LoginIcon source={src} />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <InputLogin
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              keyboardType={keyboardType}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={onChange}
              value={value}
              editable={editable}
              hasRightIcon={name === 'password' || name === 'confirmPassword'}
            />
          )}
          name={name}
        />

        {(name === 'password' || name === 'confirmPassword') && (
          <IconPassword onPress={() => updateSecureTextEntry()}>
            <HideIcon
              source={iconHidePassword}
              style={{ tintColor: theme.COLORS.SECONDARY_100 }}
            />
          </IconPassword> 
        )}
      </Container> 
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </View>
  );
}

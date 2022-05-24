import React from 'react';

import {Container, LoginIcon, MaskedInput, ErrorMessage} from './styles';

import {TextInputProps} from 'react-native';

interface Props extends TextInputProps {
    placeholder: string;
    placeholderTextColor: string;
    onChangeText: (value: string) => void;
    value: string;
    maxLength?: number;
    error: string;
    editable: boolean;
    src: any;
    defaultValue?: string;
  }

export function InputMask({
    error,
    placeholder,
    placeholderTextColor,
    keyboardType,
    onChangeText,
    value,
    maxLength,
    editable,
    src,
    defaultValue
  }: Props) {
  return (
    <>
      <Container>
        <LoginIcon source={src} />

        <MaskedInput
          type="cel-phone"
          options={{maskType: 'BRL', withDDD: true, dddMask: '(99) '}}
          placeholder={placeholder}
          autoCapitalize="none"
          onChangeText={onChangeText}
          value={value}
          editable={editable}
        />
      </Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}
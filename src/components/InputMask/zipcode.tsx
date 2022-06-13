import React from 'react';

import { Container, LoginIcon, MaskedInput, ErrorMessage } from './styles';

import { TextInputProps } from 'react-native';

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
  name: string;
}

export function InputZipcodeMask({
  error,
  placeholder,
  placeholderTextColor,
  keyboardType,
  onChangeText,
  value,
  maxLength,
  editable,
  src,
  defaultValue,
  name,
  ...rest
}: Props) {
  return (
    <>
      <Container>
        <LoginIcon source={src} />

        <MaskedInput
          type="zip-code"
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          autoCapitalize="none"
          onChangeText={onChangeText}
          value={value}
          editable={editable}
          {...rest}
        />
      </Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}

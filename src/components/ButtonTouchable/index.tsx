import React, { ReactNode } from 'react';

import { ActivityIndicator } from 'react-native';

import { Container, Title } from './styles';

import { useTheme } from 'styled-components';

interface ButtonProps {
  onPressed: Function;
  isLoading: boolean;
  title: string;
  disabled?: boolean;
}

export function ButtonTouchable({
  onPressed,
  disabled,
  title,
  isLoading,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      activeOpacity={0.9}
      disabled={disabled}
      onPress={() => onPressed({})}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.COLORS.TITLE} size={25} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}

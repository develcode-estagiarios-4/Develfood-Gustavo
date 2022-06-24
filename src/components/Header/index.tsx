import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import theme from '../../theme';

import {
  Container,
  LeftButton,
  LeftIconButton,
  Title,
  RightSpace,
  RightButton,
  FirstRightIcon,
} from './styles';

interface HeaderProps {
  name?: string;
  title?: string;
  onPressLeftButton: Function;
  srcLeftIcon: any;
  fontColor: string;
  fontWeight?: any;
  bgColor: any;
  tint?: string;
}

export function Header({
  name,
  title,
  onPressLeftButton,
  srcLeftIcon,
  fontColor,
  fontWeight,
  bgColor,
  tint,
}: HeaderProps) {
  const { loading } = useAuth();

  const [focused, setFocused] = useState(false);

  return (
    <Container style={{ backgroundColor: bgColor }}>
      <LeftButton disabled={loading} onPress={() => onPressLeftButton()}>
        <LeftIconButton resizeMode="contain" source={srcLeftIcon} style={{tintColor: tint}} />
      </LeftButton>

      {name === 'Cadastro' || name == 'Order' && (
        <Title style={{ color: fontColor, fontWeight: fontWeight }}>
          {title}
        </Title>
      )}

      <RightSpace>
        {name === 'Restaurant' && (
          <RightButton onPress={() => setFocused(!focused)}>
            <FirstRightIcon
              resizeMode="contain"
              source={theme.ICONS.BORDERHEART}
              style={focused ? { tintColor: theme.COLORS.BACKGROUND } : null}
            />
          </RightButton>
        )}
      </RightSpace>
    </Container>
  );
}

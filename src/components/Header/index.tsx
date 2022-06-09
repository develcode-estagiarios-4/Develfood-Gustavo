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
  fontWeight: any;
  bgColor: any;
}

export function Header({
  name,
  title,
  onPressLeftButton,
  srcLeftIcon,
  fontColor,
  fontWeight,
  bgColor
}: HeaderProps) {
  const { loading } = useAuth();

  return (
    <Container style={{backgroundColor: bgColor}}>
      <LeftButton disabled={loading} onPress={() => onPressLeftButton()}>
        <LeftIconButton resizeMode="contain" source={srcLeftIcon} />
      </LeftButton>

      {name === 'Cadastro' && (
        <Title style={{ color: fontColor, fontWeight: fontWeight }}>
          {title}
        </Title>
      )}

      <RightSpace>
        <RightButton>
         { name === 'Restaurant' &&
          <FirstRightIcon
            resizeMode="contain"
            source={require('../../assets/borderheart.png')}
          /> 
         } 
        </RightButton>
      </RightSpace>
    </Container>
  );
}

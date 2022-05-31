import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import theme from '../../theme';

import {
  Container,
  LeftSpace,
  LeftButton,
  LeftIconButton,
  LeftIconWrapper,
  LeftIcon,
  LeftLabel,
  Title,
  RightSpace,
  FirstRightIcon,
  SecondRightIcon,
  Address,
} from './styles';

interface HeaderProps {
  name?: string;
  title?: string;
  onPressLeftButton: Function;
  srcLeftIcon: any;
  bgColor: string;
  iconHeight: number;
  iconWidth: number;
  fontColor: string;
  fontWeight: any;
  address?: string;
  leftSpaceWidth: string
}

export function Header({
  name,
  title,
  onPressLeftButton,
  srcLeftIcon,
  bgColor,
  iconHeight,
  iconWidth,
  fontColor,
  fontWeight,
  address,
  leftSpaceWidth
}: HeaderProps) {
  const { loading } = useAuth();

  return (
    <Container style={{ backgroundColor: bgColor }}>
      <LeftSpace style={{width: leftSpaceWidth}}>
        <LeftButton disabled={loading} onPress={() => onPressLeftButton()}>
          <LeftIconButton
            source={srcLeftIcon}
            height={iconHeight}
            width={iconWidth}
            />
        </LeftButton>

        <LeftIconWrapper>
          {/* <LeftIcon /> */}
          {/* <LeftLabel /> */}
        </LeftIconWrapper>
      </LeftSpace>

      {name === 'Home' ? <Address>{address}</Address> : null}
      {name === 'Cadastro' ? (
          <Title style={{ color: fontColor, fontWeight: fontWeight }}>
          {title}
        </Title>
      ) : null}

      <RightSpace>
        {/* <FirstRightIcon source={} /> */}
        {/* <SecondRightIcon source={} /> */}
      </RightSpace>
    </Container>
  );
}

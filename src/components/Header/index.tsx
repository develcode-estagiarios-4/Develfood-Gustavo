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
    SecondRightIcon
} from './styles'

interface HeaderProps {
    name?: string;
    title: string;
    onPressLeftButton: Function;
}

export function Header({name, title, onPressLeftButton}: HeaderProps) {

  const { loading } = useAuth();

    return(
        <Container>

            <LeftSpace>

                <LeftButton 
                disabled={loading}
                onPress={() => onPressLeftButton()}>
                    <LeftIconButton source={
                    name === 'close' ? theme.ICONS.CLOSE
                    : theme.ICONS.BACK
                    }
                    />
                </LeftButton>

                <LeftIconWrapper>

                    {/* <LeftIcon /> */}
                    {/* <LeftLabel /> */}

                </LeftIconWrapper>

            </LeftSpace>

            <Title>{title}</Title>

            <RightSpace>

                {/* <FirstRightIcon source={} /> */}
                {/* <SecondRightIcon source={} /> */}

            </RightSpace>


        </Container>

    )
  }
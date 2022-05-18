import React, { useState } from 'react';

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
    name: string;
    title: string;
    onPressBackButton: Function;
}

export function Header({name, title, onPressBackButton}: HeaderProps) {

    return(
        <Container>

            <LeftSpace>

                <LeftButton onPress={() => onPressBackButton()}>
                    <LeftIconButton source={
                    name === 'close' ? require('../../assets/close.png')
                    : require('../../assets/back.png')
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
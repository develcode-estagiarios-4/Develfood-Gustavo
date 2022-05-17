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
    title: string;
}

export function Header({title}: HeaderProps) {

    return(
        <Container>

            <LeftSpace>

                <LeftButton>
                    <LeftIconButton source={require('../../assets/arrow_back_FILL0_wght400_GRAD0_opsz48.png')}/>
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
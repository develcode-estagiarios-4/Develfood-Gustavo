import React, { ReactNode } from "react";

import { ActivityIndicator } from "react-native";

import { Container, Title } from './styles';

import { useTheme } from 'styled-components';


interface ButtonProps {
    onPressed: Function;
    isLoading: boolean;
    title: string;
}


export function ButtonTouchable({onPressed, title, isLoading}: ButtonProps) {
    const theme = useTheme();


    return (
        <Container onPress={() => onPressed({})}>
            {isLoading ? <ActivityIndicator color={theme.COLORS.TITLE} size={25}/> : <Title>{title}</Title>}
        </Container>
    )
}

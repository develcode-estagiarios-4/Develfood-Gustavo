import React from "react";

import { ActivityIndicator } from "react-native";

import { Container, Title } from './styles';

import { useTheme } from 'styled-components';


interface ButtonProps {
    onPressed: Function;
    title: string;
    loadingPost: boolean;
}


export function ButtonTouchable({onPressed, title, loadingPost}: ButtonProps) {
    const theme = useTheme();


    return (
        <Container onPress={() => onPressed({})}>
         { loadingPost ? <ActivityIndicator color={theme.COLORS.TITLE} size={25}/> : <Title>{title}</Title> }
        </Container>
    )
}

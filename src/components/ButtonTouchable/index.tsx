import React from "react";

import { Container, Title } from './styles';

interface ButtonProps {
    onPressed: Function;
}


export function ButtonTouchable({onPressed}: ButtonProps) {
    return (
        <Container onPress={() => onPressed()}>
            <Title>Entrar</Title>
        </Container>
    )
}

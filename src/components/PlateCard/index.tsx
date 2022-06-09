import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Title,
  PlateImage,
  PlateWrapper,
  Price,
  AddButton,
  AddLabel,
  Description,
} from './styles';

interface Props extends TouchableOpacityProps {
  description: string;
  src: any;
  price: string;
}

export function PlateCard({ description, src, price, ...rest }: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <Container>
      <PlateImage source={src} />
      <PlateWrapper>
        <Title>{description}</Title>
        <Description>
          Um prato de camarão com fritas que é uma ótima opção para pedir quando
          se está com a família
        </Description>
        <Price>R$ {price}</Price>
        <AddButton>
          <AddLabel>Adicionar</AddLabel>
        </AddButton>
      </PlateWrapper>
    </Container>
  );
}

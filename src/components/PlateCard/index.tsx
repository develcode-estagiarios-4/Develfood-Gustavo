import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Title,
  ImageView,
  PlateImage,
  PlateWrapper,
  Price,
  AddButton,
  AddLabel,
  Description,
  Footer,
  RightSideContainer,
} from './styles';

interface Props extends TouchableOpacityProps {
  description: string;
  src: any;
  price: string;
}

export function PlateCard({ description, src, price, ...rest }: Props) {
  return (
    <Container>
      <ImageView>
        <PlateImage source={src} />
      </ImageView>

      <PlateWrapper>
        <RightSideContainer height={25}>
          <Title>{description}</Title>
        </RightSideContainer>

        <RightSideContainer height={50}>
          <Description numberOfLines={3}>
            Um prato de camarão com fritas que é uma ótima opção para pedir
            quando se está com a família
          </Description>
        </RightSideContainer>

        <RightSideContainer height={25} margTop={7}>
          <Footer>
            <Price>R$ {price}</Price>
            <AddButton>
              <AddLabel>Adicionar</AddLabel>
            </AddButton>
          </Footer>
        </RightSideContainer>
      </PlateWrapper>
    </Container>
  );
}

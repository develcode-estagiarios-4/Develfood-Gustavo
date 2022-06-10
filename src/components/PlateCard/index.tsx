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
  AlignWrapperI,
  AlignWrapperII,
  AlignWrapperIII,
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
        <AlignWrapperI>
          <Title>{description}</Title>
        </AlignWrapperI>

        <AlignWrapperII>
          <Description numberOfLines={3}>
            Um prato de camarão com fritas que é uma ótima opção para pedir
            quando se está com a família
          </Description>
        </AlignWrapperII>
        <AlignWrapperIII>
          <Footer>
            <Price>R$ {price}</Price>
            <AddButton>
              <AddLabel>Adicionar</AddLabel>
            </AddButton>
          </Footer>
        </AlignWrapperIII>
      </PlateWrapper>
    </Container>
  );
}

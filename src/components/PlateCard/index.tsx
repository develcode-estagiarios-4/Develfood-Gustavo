import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Description } from '../../screens/SignUpSuccess/styles';
import theme from '../../theme';
import {
  Container,
  Title,
  PlateImage,
  PlateWrapper,
  Price,
  AddButton,
  AddLabel,
  PlateImageView,
} from './styles';

interface Props extends TouchableOpacityProps {
  name: string;
  src: any;
}

export function PlateCard({ name, src, ...rest }: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <Container>
      <PlateImageView>
        <PlateImage source={theme.IMAGES.NOIMAGE} />
      </PlateImageView>
      <PlateWrapper>
        <Title>Prato de Camarão & Fritas</Title>
        <Description>
          Um prato de camarão com fritas que é uma ótima opção para pedir quando
          se está com a família
        </Description>
          <Price>R$ 49,90</Price>
          <AddButton>
            <AddLabel>Adicionar</AddLabel>
          </AddButton>
      </PlateWrapper>
    </Container>
  );
}

import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  height: ${RFValue(103)}px;
  width: ${RFValue(341)}px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  background-color: red
`;

export const PlateImageView = styled.View``;

export const PlateImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
`;

export const PlateWrapper = styled.View`
width: 100%
`;

export const Title = styled.Text`
color: ${({ theme }) => theme.COLORS.BACKGROUND};
font-weight: 500;
font-size: 14px;
line-height: 16px;

`;

export const Description = styled.Text``;


export const Footer = styled.View`
flex-direction: row;
justify-content: space-between;
`;


export const Price = styled.Text``;

export const AddButton = styled.TouchableOpacity`
position: absolute;
bottom: 0;
`;

export const AddLabel = styled.Text`
`;

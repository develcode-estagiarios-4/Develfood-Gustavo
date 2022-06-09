import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View.attrs({
})`
  height: ${RFValue(120)}px;
  width: 100%;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const PlateImageView = styled.View`

`;

export const PlateImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
width: ${RFValue(91)}px;
height: ${RFValue(82)}px;
margin-left: ${RFValue(14)}px;
padding-bottom: ${RFValue(11)}px;
padding-top: ${RFValue(10)}px;
border-radius: 8px;
`;

export const PlateWrapper = styled.View`
width: ${RFValue(198)}px;
height: ${RFValue(82)}px;
align-items: flex-start;
margin-left: ${RFValue(15.91)}px;
`;

export const Title = styled.Text`
color: ${({ theme }) => theme.COLORS.BACKGROUND};
font-weight: 500;
font-size: ${RFValue(14)}px;
line-height: ${RFValue(16)}px;
margin-bottom: ${RFValue(4)}px;

`;

export const Description = styled.Text`
font-weight: 400;
font-size: ${RFValue(11)}px;
line-height: ${RFValue(13)}px;
align-items: center;
margin-bottom: ${RFValue(8)}px;
justify-content: flex-start ;
color: #BFBABA;
`;


export const Footer = styled.View`
flex-direction: row;
justify-content: space-between;
`;


export const Price = styled.Text`
color: #2B2B2E;
font-weight: 700;
font-size: ${RFValue(13)}px;
line-height: ${RFValue(15)}px;
`;

export const AddButton = styled.TouchableOpacity`
position: absolute;
bottom: 0;
right: 0;
`;

export const AddLabel = styled.Text`
color: ${({ theme }) => theme.COLORS.BACKGROUND};
font-size: ${RFValue(14)}px;
line-height: ${RFValue(16)}px;
font-weight: 500;
`;

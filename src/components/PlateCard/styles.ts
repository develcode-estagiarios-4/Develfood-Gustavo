import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export interface RightSideProps {
  height?: number;
  margTop?: number;
}

export const Container = styled.View.attrs({
  elevation: 10
})`
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  height: ${RFValue(130)}px;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
`;

export const ImageView = styled.View`
height: ${RFValue(130)}px;
width: 35%;
align-items: center;
justify-content: center;
`;


export const PlateImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
border-radius: 8px;
height: ${RFValue(87)}px;
width: ${RFValue(90)}px;
`;

export const PlateWrapper = styled.View`
width: 65%;
height: ${RFValue(87)}px;
padding-right: ${RFValue(14)}px ;
justify-content: center;  
`;

export const Title = styled.Text`
color: ${({ theme }) => theme.COLORS.BACKGROUND};
font-weight: 500;
font-size: ${RFValue(14)}px;
`;

export const Description = styled.Text`
width: ${RFValue(180)}px;
font-weight: 400;
font-size: ${RFValue(11)}px;
align-items: center;
text-align: justify;
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
`;

export const AddButton = styled.TouchableOpacity`
`;

export const AddLabel = styled.Text`
color: ${({ theme }) => theme.COLORS.BACKGROUND};
font-size: ${RFValue(14)}px;
font-weight: 500;
position: absolute;
right: 0;
bottom: 5px;

`;

export const RightSideContainer = styled.View`
height: ${( props: RightSideProps) => props.height ? props.height : 10 }% ;
margin-top: ${( props: RightSideProps) => props.margTop ? props.margTop : 0}px ;
`;


import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export interface ShoppingBarProps {
    bottom: number;
}

export const Container = styled.View`
height: ${(RFValue(64))}px;
width: 100%;
position: absolute;
bottom: ${( props: ShoppingBarProps) => props.bottom ? props.bottom : 10 }px ;
z-index: 1;
background-color: #FFFFFF;
align-items: center;
justify-content: center;
`;

export const Btn = styled(RectButton)`
height: 65%;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: ${({theme}) => theme.COLORS.BACKGROUND};
width: 95%;
align-self: center;
border-radius: 6px;

`

export const LeftImageView = styled.View`
width: 20%;
flex-direction: row;
height: ${RFValue(24)}px;
`;


export const LeftImage = styled.Image`
margin-left: ${(RFValue(10))}px;
`;

export const QuantityBall = styled.View`
background-color: #FFFFFF;
border-radius: 50px;
width: 14px;
height: 14px;
position: absolute;
left: 25px;
justify-content: center;
`;

export const QuantityLabel = styled.Text`
align-self: center;
font-size: 8px;
color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
color: #FFFFFF;
font-size: ${RFValue(12)}px;

`;

export const Amount = styled.Text`
width: 20%;
font-weight: 700;
color: #FFFFFF;
font-size: ${RFValue(12)}px;
`;
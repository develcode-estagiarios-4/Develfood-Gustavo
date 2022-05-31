import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
height: 173px;
width: 156px;
margin-right: 25px;
margin-left: 21px;
margin-bottom: 18px;

`;

export const FavoriteView = styled.View`
align-self: flex-end;
height: 42px;
width: 42px;
border-width: 1px;
border-color: #DEDCDC;
border-bottom-left-radius: 16px;
border-top-right-radius: 8px;
justify-content: center;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
z-index: 1;
`;

export const BtnFavorite = styled.TouchableOpacity`
`;


export const Heart = styled.Image`
align-self: center;
`;

export const IconView = styled.View`
align-self: center;
margin-top: -40px;

`;

export const Icon = styled.Image`
width: 156px;
height: 127px;
border-top-right-radius:8px ;
border-top-left-radius:8px ;
`;

export const Footer = styled.View`
background-color: #FFFFFF;
height: 69px;
width: 100%;
border-radius: 8px;
margin-top: -20px;
border-color: black;
border-bottom-width: 1px;

`;

export const Title = styled.Text`
margin-top: 19px;
font-weight: 500;
font-size: 14px;
line-height: 16px;
margin-left: 12px;
color: #2B2B2E;

`;

export const Wrapper = styled.View`
align-content: center;
flex-direction: row;
justify-content: space-between;
margin-top: 7px;
`;

export const FoodType = styled.Text`
margin-left: 12px;
color: ${({ theme }) => theme.COLORS.SECONDARY_100}
`;

export const Evaluation = styled.View`
flex-direction: row;
align-items: center;

`; 

export const Star = styled.Image`

`; 

export const Number = styled.Text`
margin-left: 4.82px;
margin-right: 13px;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #C20C18;
`; 


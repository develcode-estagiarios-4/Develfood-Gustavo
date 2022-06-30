import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
align-items: center;
margin-bottom: ${RFValue(31)}px;
`;


export const Title = styled.Text`
margin-top: ${RFValue(62)}px;
color: #2b2b2e;
font-size: ${RFValue(28)}px;
font-weight: 500;
margin-bottom: ${RFValue(28)}px;
`;


export const Description = styled.Text`
padding: 0 ${RFValue(67)}px;
color: ${({ theme }) => theme.COLORS.SECONDARY_100};
font-weight: 700;
margin-top: ${RFValue(28)}px;
`;

export const BtnView = styled.View`
padding: 0 ${RFValue(39)}px
`;
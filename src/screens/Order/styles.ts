import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
flex: 1;
`;

export const LocalizationWrapper = styled.View`
flex-direction: row;
margin-top: 16px;
align-items: center;
border-bottom-width: 2px;
border-bottom-color: #F0F0F5;
padding-bottom: ${RFValue(16)}px;
margin-left: 16px;
margin-right: 16px;
`;

export const Map = styled.Image`
`;

export const LabelWrapper = styled.View`
margin-left: 8px;
`;

export const DeliveryLabel = styled.Text`
color: #BFBABA;
font-size: ${RFValue(10)}px;
font-weight: 400;

`;

export const Address = styled.Text`
font-size: ${RFValue(14)}px;
color: #000000

`;

export const Complement = styled.Text`
font-size: ${RFValue(12)}px;
color: #2B2B2E

`;

export const RightButton = styled.Image`
position: absolute;
right: 16px
`;

// export const Address = styled.View`
// `;
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
padding: 0 ${RFValue(20)}px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
flex: 1
`;

export const Title = styled.Text`
margin-bottom: ${RFValue(1)}px;
margin-top: ${RFValue(22)}px;
font-size: ${RFValue(18)}px;
color: #2b2b2E;
font-weight: 400;

`;

export const OrderList = styled.FlatList`

`;

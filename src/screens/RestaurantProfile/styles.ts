import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
flex: 1
`;

export const Wrapper = styled.View`
padding: 0 ${RFValue(16)}px;

`

export const RestaurantInfo = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
border-bottom-width: 2px;
border-bottom-color: #F0F0F5;
`;

export const LabelWrapper = styled.View`
`;

export const Title = styled.Text`
font-size: ${RFValue(18)}px;
line-height: ${RFValue(21)}px;
font-weight: 400;
color: #2B2B2E;
margin-bottom: ${RFValue(4)}px;
`;

export const Category = styled.Text`
font-size: ${RFValue(12)}px;
line-height: ${RFValue(14)}px;
`;

export const RestaurantPhoto = styled.Image`
background-color: red;
`;

export const PlatesTitle = styled.Text`
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #2B2B2E;
margin-top: ${RFValue(18)}px;
padding: 0 ${RFValue(16)}px;
`;

export const Form = styled.View`
padding: 0 ${RFValue(16)}px;
margin-top: ${RFValue(18)}px;
`;


export const PlateList = styled.FlatList`
flex: 1
`;
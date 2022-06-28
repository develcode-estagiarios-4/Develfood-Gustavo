import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
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

export const RestaurantInfo = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
padding-bottom: 34px;
padding-top: 12px;
`;

export const RestaurantWrapper = styled.View`
margin-left: ${RFValue(20)}px;
`;

export const RestaurantPhoto = styled.Image`
margin-right: ${RFValue(15)}px;
height: ${RFValue(60)}px;
width: ${RFValue(60)}px;
border-radius: 50px;

`;

export const PlatesListContainer = styled.View`
background-color: ${({theme}) => theme.COLORS.SECONDARY_300};
border-top-left-radius: 80px;
margin-left: ${RFValue(30)}px;
height: ${RFValue(60)}px;


`;

export const PlatesListTitle = styled.Text`
align-self: center;
font-size: ${RFValue(18)}px;
margin-top: ${RFValue(10)}px;
color: #2B2B2E

`;

export const PlatesList = styled.FlatList`
background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
`;


import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const DateText = styled.Text`
color: ${({ theme }) => theme.COLORS.SECONDARY_100};     
font-size: ${RFValue(10)}px;


`;

export const Container = styled.View.attrs({
    elevation: 10
})`
flex-direction: row;
width: 100%;
background-color: #F0F0F5;
align-self: center;
border-radius: 8px;
height: ${RFValue(100)}px;
margin-top: ${RFValue(14)}px;

`;

export const RestaurantPhoto = styled.Image`
width: ${RFValue(32)}px;
height: ${RFValue(32)}px;
border-radius: 50px;
margin: 0 ${RFValue(14)}px;
margin-top: ${RFValue(13)}px;
`;

export const InfoWrapper = styled.View`
margin-top: ${RFValue(18)}px ;

`;
export const Title = styled.Text`
color: #2B2B2E;
font-size: ${RFValue(14)}px;
margin-bottom: ${RFValue(5)}px ;


`;

export const OrderWrapper = styled.Text`
flex-direction: row;
width: 100%;
margin-bottom: ${RFValue(3)}px ;

`;


export const CheckImage = styled.Image`
height: ${RFValue(12)}px;
width: ${RFValue(12)}px;

`;


export const OrderStatus = styled.Text`
color: ${({ theme }) => theme.COLORS.SECONDARY_100};
font-weight: 700;

`;

export const OrderId = styled.Text`
padding-left: ${RFValue(50)}px;
color: ${({ theme }) => theme.COLORS.SECONDARY_100};     
font-weight: 700;
`;

export const PlatesLabel = styled.Text`
width: 91.5%;
font-size: ${RFValue(10)}px;
font-weight: 700;
color: ${({ theme }) => theme.COLORS.SECONDARY_100};     

`;

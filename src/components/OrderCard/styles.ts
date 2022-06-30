import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({
    elevation: 10
})`
flex-direction: row;
width: 100%;
background-color: #F0F0F5;
align-self: center;
border-radius: 8px;
height: ${RFValue(100)}px;
`;

export const RestaurantPhoto = styled.Image`
width: 50px;
height: 50px;
border-radius: 50px;
padding: 0 ${RFValue(14)}px
`;

export const Title = styled.Text`
`;

export const InfoWrapper = styled.View`
`;


export const OrderWrapper = styled.Text`
flex-direction: row;
`;


export const CheckImage = styled.Image`
height: 12px;
width: 12px
`;


export const OrderStatus = styled.Text`
`;

export const OrderId = styled.Text`
`;

export const PlatesLabel = styled.Text`
`;

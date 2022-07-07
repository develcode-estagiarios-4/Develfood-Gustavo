import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RightSideProps } from '../../components/PlateCard/styles';

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
margin-bottom: 10px;
`;

export const RestaurantPhoto = styled.Image`
width: ${RFValue(32)}px;
height: ${RFValue(32)}px;
border-radius: 50px;
margin: 0 ${RFValue(14)}px;
margin-top: ${RFValue(15)}px;
`;

export const InfoWrapper = styled.View`
margin-top: ${RFValue(18)}px ;
`;
export const Title = styled.Text`
color: #2B2B2E;
font-size: ${RFPercentage(1.8)}px;
`;

export const OrderWrapper = styled.Text`
flex-direction: row;
margin-bottom: ${RFValue(3)}px ;
font-size: ${RFPercentage(1.5)}px;
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
font-weight: 400;
`;

export const PlatesLabel = styled.Text`
width: ${RFValue(260)}px;
font-size: 10px;
font-weight: 700;
color: ${({ theme }) => theme.COLORS.SECONDARY_100};     
`;

export const RightSideContainer = styled.View`
height: ${( props: RightSideProps) => props.height ? props.height : 10 }% ;
width: ${( props: RightSideProps) => props.width ? props.width : 10 }% ;
`;


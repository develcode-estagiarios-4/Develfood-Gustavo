import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
height: ${RFValue(56)}px;
`;


export const LeftButton = styled.TouchableOpacity`
`;

export const LeftIconButton = styled.Image`
height: ${RFValue(25)}px; 
width: ${RFValue(35)}px; 
`;

export const Title = styled.Text`
font-size: ${RFValue(15)}px;
right: 30%;

`;

export const RightSpace = styled.View`
`;

export const RightButton = styled.TouchableOpacity`
height: ${RFValue(25)}px; 
width: ${RFValue(35)}px;
`;

export const FirstRightIcon = styled.Image`

`;

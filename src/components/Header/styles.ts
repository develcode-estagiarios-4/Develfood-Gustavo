import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
margin-bottom: ${RFValue(15)}px;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: ${RFValue(56)}px;
`;

export const LeftSpace = styled.View`
width: 20%;
/* background-color: yellow; */
`;

export const LeftButton = styled.TouchableOpacity`
`;

export const LeftIconButton = styled.Image`
height: ${RFValue(25)}px;
width: ${RFValue(35)}px;
margin-left: ${RFValue(10)}px;
`;

export const LeftIconWrapper = styled.View`
`;

export const LeftIcon = styled.Image`
`;

export const LeftLabel = styled.Image`
`;

export const Title = styled.Text`
font-size: ${RFValue(15)}px;
font-weight: 500;
color: #000000;
`;

export const RightSpace = styled.View`
width: 20%;
height: 100%;
align-self: flex-end;
/* background-color: blue; */
padding: ${RFValue(10)}px;
`;

export const FirstRightIcon = styled.Image`
`;


export const SecondRightIcon = styled.Image`
`;

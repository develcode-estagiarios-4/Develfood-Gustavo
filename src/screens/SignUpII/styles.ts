import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
`;

export const Content = styled.View`
padding: 0 ${RFValue(36)}px;
`;

export const Balls = styled.View`
flex-direction: row;
justify-content: space-around;
`;

export const BorderBall1 = styled.Image`
height: ${RFValue(47)}px;
width: ${RFValue(47)}px;
`;

export const Ball1 = styled.Image`
position: absolute;
height: ${RFValue(39)}px;
width: ${RFValue(39)}px;
top: ${RFValue(4)}px;
left: ${RFValue(30.3384)}px;

`;

export const BorderBall2 = styled.Image`
height: ${RFValue(47)}px;
width: ${RFValue(47)}px;

`;

export const Ball2 = styled.Image`
position: absolute;
height: ${RFValue(39)}px;
width: ${RFValue(39)}px;
right: ${RFValue(130.65)}px;
top: ${RFValue(4)}px
`;

export const BorderBall3 = styled.Image`
height: ${RFValue(47)}px;
width: ${RFValue(47)}px;
`;

export const Ball3 = styled.Image`
position: absolute;
height: ${RFValue(39)}px;
width: ${RFValue(39)}px;
top: ${RFValue(4)}px;
right: ${RFValue(31.338381)}px;

`;

export const Person = styled.Image`
align-self: center;
margin-top: ${RFValue(6)}px;
margin-bottom: ${RFValue(26)}px;
`;


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

export const BorderBall = styled.Image`
height: ${RFValue(47)}px;
width: ${RFValue(47)}px;
`;

export const Ball = styled.Image`
height: ${RFValue(39)}px;
width: ${RFValue(39)}px;
top: ${RFValue(-42)}px;
`;

export const BallWrapper = styled.View`
align-items: center;
`;

export const Person = styled.Image`
align-self: center;
margin-top: ${RFValue(-27)}px;
margin-bottom: ${RFValue(26)}px;
`;

export const BtnView = styled.View`
margin-top: ${RFValue(18)}px;
padding: 0 ${RFValue(36)}px;
`;



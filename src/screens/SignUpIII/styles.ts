import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonTouchable } from '../../components/ButtonTouchable';

export const Container = styled.ScrollView`
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
`;

export const Content = styled.View`
padding: 0 ${RFValue(36)}px;
`;

export const Person = styled.Image`
align-self: center;
margin-top: ${RFValue(6)}px;
margin-bottom: ${RFValue(26)}px;
`;

export const TwoInputsView = styled.View`
flex-direction: row;
`;

export const HalfInput = styled.View`
margin-right: 20px;
width: ${RFValue(160)}px;
`;

export const HalfInputTwo = styled.View`
margin-right: 20px;
width: ${RFValue(121)}px;
`;

export const TwoInputsViewTwo = styled.View`
flex-direction: row;
margin-left: ${RFValue(2)}px;
`;

export const HalfInputThree = styled.View`
margin-right: ${RFValue(8)}px;
width: ${RFValue(145.5)}px;
`;

export const HalfInputFour = styled.View`
width: ${RFValue(140.5)}px;
`;

export const BtnView = styled.View`
margin-bottom: ${RFValue(10)}px;
padding: 0 ${RFValue(36)}px;
`;
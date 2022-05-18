import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonTouchable } from '../../components/ButtonTouchable';

export const Container = styled.ScrollView`
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
`;

export const Content = styled.View`
padding: 0 ${RFValue(36)}px;
margin-top:  ${RFValue(56)}px;
`;

export const Person = styled.Image`
align-self: center;
margin-top: ${RFValue(6)}px;
margin-bottom: ${RFValue(26)}px;
`;

export const InfoWrapper = styled.View`
width: ${RFValue(255)}px;
margin-bottom: ${RFValue(124)}px;
`;

export const Title = styled.Text`
font-size: ${RFValue(28)}px;
line-height: ${RFValue(32.81)}px;
font-weight: 500;
color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Description = styled.Text`
font-size: ${RFValue(12)}px;
color: ${({ theme }) => theme.COLORS.SECONDARY_100};
font-weight: 700;
line-height: ${RFValue(14.06)}px;
`;
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

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

export const BtnView = styled.View`
margin-bottom: ${RFValue(10)}px;
padding: 0 ${RFValue(36)}px;
`;
import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {TextInputMask} from 'react-native-masked-text';

export const Container = styled.View`
  width: 100%;
  align-self: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${RFValue(12)}px;
  border: ${RFValue(2)}px;
  border-width: ${RFValue(1)}px;
  border-radius: ${RFValue(10)}px;
  border-color: ${({ theme }) => theme.COLORS.SECONDARY_100};
`;

export const LoginIcon = styled.Image`
  margin-left: ${RFValue(11)}px;
  width: ${RFValue(24.5)}px;
  height: ${RFValue(26.5)}px;`;


export const MaskedInput = styled(TextInputMask)`
  padding-left: ${RFValue(8)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  font-size: ${RFValue(14)}px;
  width: 88%;
`;

export const ErrorMessage = styled.Text`
color: ${({ theme }) => theme.COLORS.ERROR};
font-size: ${RFValue(14)}px;
margin-bottom: ${RFValue(8)}px;
align-self: flex-start;
`;
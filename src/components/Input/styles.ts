import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(295)}px;
  height: ${RFValue(50)}px;

  align-self: center;
  align-items: center;
  flex-direction: row;

  margin-top: ${RFValue(10)}px;

  border: 1px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const LoginIcon = styled.Image`
  margin-left: ${RFValue(11)}px;
  width: ${RFValue(22)}px;
  height: ${RFValue(22)}px;`;


export const InputLogin = styled.TextInput`
  margin-left: ${RFValue(7)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  font-size: ${RFValue(14)}px;
`;

export const IconPassword = styled.TouchableOpacity`
  position: absolute;
  right: ${RFValue(10)}px;
`;

export const HideIcon = styled.Image`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
`;

export const ErrorMessage = styled.Text`
color: ${({ theme }) => theme.COLORS.ERROR};
font-size: 16px;
margin-top: 4px;
align-self: flex-start;
`;
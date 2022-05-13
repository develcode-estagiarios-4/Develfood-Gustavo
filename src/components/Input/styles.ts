import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface InputProps {
  hasRightIcon: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(50)}px;
  align-self: center;
  align-items: center;
  flex-direction: row;

  margin-top: ${RFValue(10)}px;

  border: 1px;
  border-radius: ${RFValue(10)}px;
  border-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const LoginIcon = styled.Image`
  margin-left: ${RFValue(11)}px;
  width: ${RFValue(22)}px;
  height: ${RFValue(22)}px;`;


export const InputLogin = styled.TextInput<InputProps>`
  padding-left: ${RFValue(8)}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_500};
  font-size: ${RFValue(14)}px;
  width: 88%;
  ${({ hasRightIcon }) => hasRightIcon && css`
  padding-right: ${RFValue(42)}px;
  `}
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
font-size: ${RFValue(16)}px;
margin-top: ${RFValue(4)}px;
align-self: flex-start;
`;
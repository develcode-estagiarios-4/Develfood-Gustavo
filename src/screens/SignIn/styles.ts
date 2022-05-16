import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
`;

export const Brands = styled.View`
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

export const Salad = styled.Image`
height: ${RFValue(210)}px;
width: ${RFValue(80)}px;
`;


export const Pizza = styled.Image`
height: ${RFValue(235)}px;
width: ${RFValue(150)}px;
`;


export const Content = styled.View`
  top: ${RFValue(-50)}px;
  padding: 0 ${RFValue(36)}px;
  margin-top: ${RFValue(10)}px;
  z-index: 1;

`;

export const LogoWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 60px;
`;

export const Logo = styled.Image``;

export const LabelLogo = styled.Image`
  margin-left: ${RFValue(7)}px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: ${RFValue(22)}px;
  margin-top: ${RFValue(-8)}px;

`;

export const ForgotPasswordLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  margin-top: ${RFValue(20)}px;
`;

export const RegisterWrapper = styled.View`
  margin-top: ${RFValue(15)}px;
  flex-direction: row;
  justify-content: center;
  padding: 0 ${RFValue(20)}px;
  z-index: 1;

`;

export const NoRegisterLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export const RegisterButton = styled.TouchableOpacity`
`;

export const RegisterButtonLabel = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  font-size: ${RFValue(14)}px;
  font-weight: 900;
`;

export const FooterImage = styled.Image`
  margin-top: ${RFValue(-40)}px;
`;


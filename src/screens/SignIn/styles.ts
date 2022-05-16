import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const Brands = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Brand = styled.Image.attrs({
  resizeMode: 'contain',
})``;

export const Content = styled.View`
  top: -85px;
  padding: 0 36px;
`;

export const LogoWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

export const LabelLogo = styled.Image`
  margin-left: 7px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 22px;
  margin-top: -8px;
  z-index: 1;

`;

export const ForgotPasswordLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;
`;

export const RegisterWrapper = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: center;
  padding: 0 20px;
  z-index: 1;

`;

export const NoRegisterLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const RegisterButton = styled.TouchableOpacity`
  z-index: 1;
`;

export const RegisterButtonLabel = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  font-size: 14px;
  font-weight: 900;
`;

export const FooterImage = styled.Image`
  margin-top: -43px;
`;

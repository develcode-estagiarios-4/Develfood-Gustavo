import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

// export const Content = styled.ScrollView.attrs({
//     showsVerticalScrollIndicator: false,
// })`
// width: 100%;
// `

export const Brands = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Brand = styled.Image.attrs({
  resizeMode: 'contain',
})``;

export const Content = styled.View`
top: -75px;
padding: 0 32px;
`;

export const LogoWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
align-self: flex-end;
margin-bottom: 10px;
margin-top: -8px;
`;

export const ForgotPasswordLabel = styled.Text`
font-size: 14px;
font-weight: bold;
`;
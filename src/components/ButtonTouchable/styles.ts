import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  max-height: ${RFValue(56)}px;
  min-height: ${RFValue(56)}px;
  border-radius: ${RFValue(10)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900 };
  z-index: 1;

`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

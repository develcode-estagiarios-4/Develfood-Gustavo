import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  max-height: 56px;
  min-height: 56px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_900 };
  z-index: 1;

`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

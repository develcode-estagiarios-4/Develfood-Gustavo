import styled, { css } from 'styled-components/native';

import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export type TypeProps = 'primary' | 'secondary';

type Props = {
  type: TypeProps;
};

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor:
    type === 'primary' ? theme.COLORS.SECONDARY_900 : theme.COLORS.PRIMARY_50,
}))<Props>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: ${RFValue(14)}px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  margin-top: 10px;

  ${({ theme, type }) => css`
    border: 2px solid ${theme.COLORS.SHAPE};
    color: ${type === 'primary'
      ? theme.COLORS.SHAPE
      : theme.COLORS.SHAPE};
  `}
`;

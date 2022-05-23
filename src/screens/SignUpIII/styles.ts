import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ButtonTouchable } from '../../components/ButtonTouchable';

export const Container = styled.ScrollView`
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
`;

export const Content = styled.View`
padding: 0 ${RFValue(42)}px;
`;

export const TwoInputsView = styled.View`
flex-direction: row;
justify-content: space-between ;
`;

export const HalfInput = styled.View`
width: ${RFValue(160)}px;
`;

export const HalfInputTwo = styled.View`
width: ${RFValue(121)}px;
`;

export const TwoInputsViewTwo = styled.View`
flex-direction: row;
justify-content: space-between ;
`;

export const HalfInputThree = styled.View`
width: ${RFValue(140)}px;
`;

export const HalfInputFour = styled.View`
width: ${RFValue(140)}px;
`;

export const BtnView = styled.View`
margin-bottom: ${RFValue(10)}px;
padding: 0 ${RFValue(36)}px;
`;
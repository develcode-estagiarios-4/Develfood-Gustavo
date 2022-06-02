import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

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
width: 50%;
`;

export const HalfInputTwo = styled.View`
width: 40%;
`;

export const TwoInputsViewTwo = styled.View`
flex-direction: row;
justify-content: space-between ;
`;

export const HalfInputThree = styled.View`
width: 45%;
`;

export const BtnView = styled.View`
margin-bottom: ${RFValue(10)}px;
padding: 0 ${RFValue(36)}px;
`;
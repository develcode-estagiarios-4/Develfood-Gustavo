import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const TabTouchable = styled.TouchableOpacity`
align-items: center;
width: 100%;
justify-content: space-around;
`
export const Texto = styled.Text`
font-size: ${RFValue(12)}px;
font-weight: 600;
color: ${({theme}) => theme.COLORS.SECONDARY_400};
`


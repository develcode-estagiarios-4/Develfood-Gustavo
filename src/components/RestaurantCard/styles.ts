import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  height: ${RFValue(173)}px;
  width: ${RFValue(156)}px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const FavoriteView = styled.View`
  align-self: flex-end;
  height: 40px;
  width: 42px;
  border-width: 1px;
  border-color: #dedcdc;
  border-bottom-left-radius: 16px;
  border-top-right-radius: 8px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
  z-index: 1;
`;

export const BtnFavorite = styled.TouchableOpacity``;

export const Heart = styled.Image`
  align-self: center;
`;

export const IconView = styled.View`
  align-self: center;
  margin-top: -40px;
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  height: undefined;
  border-radius: 8px;
  aspect-ratio: 1;
`;

export const Footer = styled.View.attrs({
  elevation: 10
})`
  background-color: #FFFFFF;
  width: 100%;
  height: ${RFValue(69)}px;
  border-radius: 8px;
  position: absolute;
  bottom: 0;
`;

export const Title = styled.Text`
  margin-top: ${RFValue(15)}px;
  font-weight: 500;
  font-size: ${RFValue(14)}px;
  line-height: 16px;
  margin-left: 12px;
  margin-right: 0.5px;
  color: #2b2b2e;
`;

export const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: ${RFValue(12)}px;
  margin-top: ${RFValue(17)}px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const FoodType = styled.Text`
  margin-left: 12px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_100};
  font-size: ${RFValue(12)}px;
`;

export const Evaluation = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  right: 0;
  align-items: center;
`;

export const Star = styled.Image`
`;

export const Number = styled.Text`
  margin-left: 4.82px;
  margin-right: 13px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #c20c18;
`;

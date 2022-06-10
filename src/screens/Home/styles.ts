import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
`;

export const HeaderHome = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  flex-direction: row;
  align-items: center;
  height: ${RFValue(56)}px;
`;

export const LocalImage = styled.Image`
  margin-left: ${RFValue(11)}px;
`;

export const Address = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
  margin-left: ${RFValue(6)}px;
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(14)}px;
  font-weight: 400;
  width: 100%;
`;

export const Banners = styled.ScrollView`
  margin-top: 12px;
  margin-bottom: 26px;
  flex-direction: row;
`;

export const Banner = styled.Image`
  height: 120px;
  width: 347px;
  margin-left: 12px;
  margin-right: 8px;
`;

export const CategorySelect = styled.ScrollView`
  flex-direction: row;
  margin-bottom: 11px;
`;

export const TitleView = styled.View`
  margin-bottom: 18px;
`;

export const Title = styled.Text`
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 500;
  margin-left: 12px;
`;

export const BtnOption = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  width: 99px;
  height: 28px;
  border-radius: 16px;
  margin: 0 8px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
`;
export const BtnLabel = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
  font-weight: 700;
`;

export const Form = styled.View`
  margin-top: 4.5px;
  padding-left: 21px;
  padding-right: 15px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
`;

export const RestaurantList = styled.FlatList`
  flex: 1;
`;


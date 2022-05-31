import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
background-color: ${({theme}) => theme.COLORS.BACKGROUND_LIGHT};
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
  margin-bottom: 12px;
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
height: ${RFPercentage(47)}px;
width: 100%;
align-items: center;

`;

export const RestaurantList = styled.FlatList`

`;


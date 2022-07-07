import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAuth } from '../../hooks/auth';
import { useGet } from '../../services';
import { Banner } from '../Banner';
import { Container, PhotoIndexes, PhotoIndex, Banners } from './styles';
interface ChangePhotoProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

interface BannersResponse {
  content?: BannerData[];
}

interface BannerData {
  id: number;
  name: string;
  percent: number;
  dateInitial: string;
  dateFinal: string;
  restaurant: Restaurant;
  photo_url: string;
}

interface FoodTypes {
  id: number;
  name: string;
}

interface Restaurant {
  id: number;
  name: string;
  photo_url: string;
  food_types: FoodTypes[];
}

export function PhotoSlider() {
  const [photoIndex, setPhotoIndex] = useState(0);

  const indexChanged = useRef((info: ChangePhotoProps) => {
    const index = info.viewableItems[0].index!;
    setPhotoIndex(index);
  });

  const { token } = useAuth();
  const navigation = useNavigation();

  const { data: dataGetBanners, fetchData: fetchDataBanners } =
    useGet<BannersResponse>('/restaurantPromotion?page=0&quantity=x', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  useEffect(() => {
    (async () => await fetchDataBanners())();
  }, []);

  function handleRestaurant(
    id: number,
    name: string,
    photo_url: any,
    food_types: string,
  ) {
    navigation.navigate(
      'RestaurantProfile' as never,
      {
        id,
        name,
        photo_url,
        food_types,
      } as never,
    );
  }

  return (
    <Container>
      <Banners>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: RFValue(4) }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataGetBanners.content}
          keyExtractor={(item) => item?.id.toString()}
          renderItem={({ item }) => (
            <Banner
              onPressed={() => {
                handleRestaurant(
                  item.restaurant.id,
                  item.restaurant.name,
                  item.restaurant.photo_url,
                  item.restaurant.food_types.length > 0
                    ? item.restaurant.food_types[0].name
                    : '',
                );
              }}
              src={item.photo_url}
            />
          )}
          onViewableItemsChanged={indexChanged.current}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        />
      </Banners>
      <PhotoIndexes>
        {dataGetBanners?.content?.map((item, index) => (
          <PhotoIndex key={String(index)} active={index === photoIndex} />
        ))}
      </PhotoIndexes>
    </Container>
  );
}

import React, { useEffect, useState } from 'react';

import {
  StatusBar,
  ActivityIndicator,
  Dimensions,
  View,
  Text,
} from 'react-native';

import {
  Container,
  Banners,
  Banner,
  CategorySelect,
  TitleView,
  Title,
  Form,
  BtnOption,
  BtnLabel,
  Content,
  RestaurantList,
  HeaderHome,
  LocalImage,
  Address,
} from './styles';

import { InputForm } from '../../components/InputForm';
import { RestaurantCard } from '../../components/RestaurantCard';

import { useGet } from '../../services';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import { useDebouncedCallback } from 'use-debounce';
import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface Restaurant {
  id: number;
  name: string;
  photo: string;
}
interface Restaurants {
  content?: Restaurant[];
  totalPages: number;
}

const CardMargins =
  (Dimensions.get('screen').width - RFValue(312)) / RFValue(3.5);

export const Home: React.FC<undefined> = () => {
  const navigation = useNavigation();

  const { token } = useAuth();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filter, setFilter] = useState({
    text: '',
    page: 0,
  });

  const {
    data: dataGet,
    loading,
    setLoading,
    error,
    fetchData,
  } = useGet<Restaurants>(
    `/restaurant/filter?name=${filter.text}&page=${filter.page}&quantity=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  function onSuccessLoad(data?: any) {
    setRestaurants([...restaurants, ...(data?.content as Restaurant[])]);
    setLoading(false);
  }

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
  }, [filter]);

  const debounced = useDebouncedCallback((text) => {
    searchRestaurants(text);
  }, 1500);

  function searchRestaurants(text: string) {
    if (text.length > 1) {
      setRestaurants([]);
      setFilter({ text: text, page: 0 });
    } else if (text.length <= 1) {
      setRestaurants([]);
      setFilter({ text: '', page: 0 });
    }
  }

  async function handleEndReached() {
    if (dataGet.totalPages !== filter.page && !loading) {
      setLoading(true);
      setFilter({ ...filter, page: filter.page + 1 });
    }
  }

  function handleRestaurant(id: number, name: string, photo: any) {
    navigation.navigate(
      'RestaurantProfile' as never,
      {
        id,
        name,
        photo,
      } as never,
    );
  }

  return (
    <>
      <StatusBar backgroundColor={theme.COLORS.BACKGROUND} />
      <Content>
        <RestaurantList
          columnWrapperStyle={{
            justifyContent: 'space-between',
            paddingHorizontal: RFValue(CardMargins),
            paddingBottom: 10,
          }}
          ListEmptyComponent={
            !loading ? (
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignContent: 'center',
                }}
              >
                {/* <Image source={theme.IMAGES.NOTFOUND} /> */}
              </View>
            ) : null
          }
          ListHeaderComponent={
            <Container>
              <HeaderHome>
                <LocalImage source={require('../../assets/localHeader.png')} />
                <Address> rua Arcy da Rocha Nóbrega 667, Panazollo</Address>
              </HeaderHome>
              <Banners horizontal={true} showsHorizontalScrollIndicator={false}>
                <Banner source={theme.IMAGES.BANNER} />
                <Banner source={theme.IMAGES.BANNER} />
                <Banner source={theme.IMAGES.BANNER} />
              </Banners>

              <TitleView>
                <Title>Categorias</Title>
              </TitleView>

              <CategorySelect
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <BtnOption>
                  <BtnLabel>Pizza</BtnLabel>
                </BtnOption>

                <BtnOption>
                  <BtnLabel>Churrasco</BtnLabel>
                </BtnOption>

                <BtnOption>
                  <BtnLabel>Almoço</BtnLabel>
                </BtnOption>

                <BtnOption>
                  <BtnLabel>Massas</BtnLabel>
                </BtnOption>
              </CategorySelect>

              <Form>
                <InputForm
                  name="search"
                  editable={true}
                  keyboardType={'default'}
                  placeholder="Buscar restaurantes"
                  placeholderTextColor={theme.COLORS.SECONDARY_100}
                  src={theme.ICONS.SEARCH}
                  onChangeText={(text) => debounced(text)}
                />
              </Form>
            </Container>
          }
          ListFooterComponent={() => (
            <View
              style={{
                width: '100%',
                height: RFValue(80),
                justifyContent: 'center',
              }}
            >
              {loading ? (
                <ActivityIndicator size={50} color={theme.COLORS.BACKGROUND} />
              ) : filter.page === dataGet.totalPages ? (
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 17,
                    color: theme.COLORS.SECONDARY_100,
                  }}
                >
                  Não existem mais restaurantes cadastrados...
                </Text>
              ) : null}
            </View>
          )}
          numColumns={2}
          data={restaurants}
          keyExtractor={(item: any) => item?.id}
          renderItem={({ item }: any) => (
            <>
              <RestaurantCard
                onPress={() => handleRestaurant(item.id, item.name, item.photo)}
                name={item.name}
                src={
                  item.photo ? { uri: `${item.photo}` } : theme.IMAGES.NOIMAGE
                }
              />
            </>
          )}
          onEndReachedThreshold={0.3}
          onEndReached={() => handleEndReached()}
        />
      </Content>
    </>
  );
};

import React, { useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator, Dimensions, View, Text, Image } from 'react-native';
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
} from './styles';
import { useGet } from '../../services';
import { useAuth } from '../../hooks/auth';
import theme from '../../theme';
import { Header } from '../../components/Header';
import { InputForm } from '../../components/InputForm';
import { RestaurantCard } from '../../components/RestaurantCard';
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
  const { token } = useAuth();
  const [page, setPage] = useState(0);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [originalList, setOriginalList] = useState<Restaurant[]>([]);
  const [searchRestaurant, setSearchRestaurant] = useState('');
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
  } = useGet<Restaurants>(`/restaurant/filter?name=${filter.text}&page=${filter.page}&quantity=10`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
  }, []);

  function onSuccessLoad(data?: any) {
    setRestaurants([...restaurants, ...(data?.content as Restaurant[])]);
    setLoading(false)
    if (filter.page === 0 && filter.text.length < 2) 
    setOriginalList(data?.content)

  }

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
  }, [filter]);

  function searchRestaurants() {
    
  }

  async function handleEndReached() {
    if (dataGet.totalPages !== filter.page && (!loading)) {
      setLoading(true)
      // setPage(filter.page + 1);
      setFilter({...filter, page: filter.page + 1});

    }
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
            !loading ?
          <View style={{width: '100%', height: '100%', alignContent: 'center'}}>
            <Image source={theme.IMAGES.NOTFOUND} />
          </View> : null
          }
          ListHeaderComponent={
            <Container>
              <Header
                name="Home"
                leftSpaceWidth="7%"
                title=""
                onPressLeftButton={() => {}}
                srcLeftIcon={require('../../assets/localHeader.png')}
                bgColor={theme.COLORS.BACKGROUND}
                iconHeight={1}
                iconWidth={1}
                fontColor={theme.COLORS.BACKGROUND_LIGHT}
                fontWeight={'400'}
                address="rua Arcy da Rocha Nóbrega 667, Panazollo"
              />
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
                  src={theme.ICONS.SEARCH}
                  onChangeText={(text) => { 
                    if (text.length > 1) {
                    setRestaurants([])
                    setFilter({text: text, page: 0 })
                    } 
                    else if (text.length <= 1){
                    setRestaurants([])
                    setFilter({text: '', page: 0 })
                    // setRestaurants(originalList)
                    }
                  }}
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
              { loading ? 
                <ActivityIndicator size={50} color={theme.COLORS.BACKGROUND} />
              : filter.page === dataGet.totalPages ? <Text style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 17,
                color: theme.COLORS.SECONDARY_100
                }}>
                  Não existem mais restaurantes cadastrados...
                  </Text>  : null}
            </View>
          )}
          numColumns={2}
          data={restaurants}
          keyExtractor={(item: any) => item?.id}
          renderItem={({ item }: any) => (
            <>
              <RestaurantCard
                name={item.id + ' ' + item.name}
                src={
                  item.photo
                    ? { uri: `${item.photo}` }
                    : theme.IMAGES.NOIMAGE
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

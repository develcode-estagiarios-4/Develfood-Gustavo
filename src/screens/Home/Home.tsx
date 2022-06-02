import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator, Dimensions, View } from 'react-native';
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
import { Header } from '../../components/Header';
import theme from '../../theme';
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
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const {
    data: dataGet,
    loading,
    error,
    fetchData,
  } = useGet<Restaurants>(`/restaurant?page=${page}&quantity=10`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    () => handleEndReached();
  }, []);

  useEffect(() => {
    !!dataGet.content?.length &&
      setRestaurants([...restaurants, ...(dataGet?.content as Restaurant[])]);
    setIsLoading(false);
    console.log('first ', isLoading);
  }, [dataGet]);

  useEffect(() => {
    (async () => await fetchData())();
  }, [page]);

  async function handleEndReached() {
    if (dataGet.totalPages !== page && (!isLoading || !loading)) {
      setIsLoading(true);
      setPage(page + 1);
      console.log('====================================', isLoading);
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
          contentContainerStyle={{
            width: '100%',
          }}
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
                <Banner source={require('../../assets/banner1.png')} />
                <Banner source={require('../../assets/banner1.png')} />
                <Banner source={require('../../assets/banner1.png')} />
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
                  src={require('../../assets/search.png')}
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
              {loading && (
                <ActivityIndicator size={50} color={theme.COLORS.BACKGROUND} />
              )}
            </View>
          )}
          numColumns={2}
          data={restaurants}
          keyExtractor={(item: any) => item?.id}
          renderItem={({ item }: any) => (
            <>
              <RestaurantCard
                name={item.name}
                src={
                  item.photo
                    ? { uri: `${item.photo}` }
                    : require('../../assets/noimage.png')
                }
              />
            </>
          )}
          onEndReachedThreshold={0.01}
          initialNumToRender={10}
          onEndReached={() => handleEndReached()}
        />
      </Content>
    </>
  );
};

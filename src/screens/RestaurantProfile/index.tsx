import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StatusBar, View, Text } from 'react-native';
import { Header } from '../../components/Header';
import { PlateCard } from '../../components/PlateCard';
import { useGet } from '../../services';
import theme from '../../theme';
import {
  Container,
  Wrapper,
  RestaurantInfo,
  LabelWrapper,
  Category,
  Title,
  RestaurantPhoto,
  PlatesTitle,
  Form,
  PlateList,
} from './styles';
import { useAuth } from '../../hooks/auth';
import { InputForm } from '../../components/InputForm';
import { RFValue } from 'react-native-responsive-fontsize';

interface Plate {
  id: number;
  description: string;
  price: string;
}
interface Restaurants {
  content?: Plate[];
  totalPages: number;
}

export default function RestaurantProfile({ route }: any) {
  const { token } = useAuth();
  const navigation = useNavigation();
  const { id, name, photo } = route.params;

  const [plates, setPlates] = useState<Plate[]>([]);

  const {
    data: dataGet,
    loading,
    setLoading,
    error,
    fetchData,
  } = useGet<Restaurants>(`/plate/restaurant/${id}?page=0&quantity=10`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  function onSuccessLoad(data?: any) {
    setPlates([...plates, ...(data?.content as Plate[])]);
    setLoading(false);
  }

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
    setLoading(true);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={theme.COLORS.BACKGROUND_LIGHT} />
      <Container>
        <PlateList
          ListHeaderComponent={
            <>
              <Header
                name="Restaurant"
                title=""
                onPressLeftButton={() => {}}
                srcLeftIcon={require('../../assets/back.png')}
                bgColor={theme.COLORS.BACKGROUND_LIGHT}
                fontColor={theme.COLORS.BACKGROUND_LIGHT}
                fontWeight={'400'}
              />
              <Wrapper>
                <RestaurantInfo>
                  <LabelWrapper>
                    <Title>{name}</Title>
                    <Category>Lanches</Category>
                  </LabelWrapper>
                  <RestaurantPhoto source={theme.IMAGES.NOIMAGE} />
                </RestaurantInfo>
              </Wrapper>
              <PlatesTitle>Pratos</PlatesTitle>
              <Form>
                <InputForm
                  name="search"
                  editable={true}
                  keyboardType={'default'}
                  placeholder={`Buscar em ${name}`}
                  src={theme.ICONS.SEARCH}
                />
              </Form>
            </>
          }
          ListEmptyComponent={
            !loading ? (
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignContent: 'center',
                }}
              >
                <Image source={theme.IMAGES.NOTFOUND} />
                <Text style={{
                    textAlign: 'center',
                    fontSize: 17,
                    color: 'black',
                  }}>Nenhum prato encontrado</Text>
              </View>
            ) : null
          }
          ListFooterComponent={() => (
            <View
              style={{
                width: '100%',
                height: RFValue(80),
                justifyContent: 'flex-end',
              }}
            >
              {loading && (
                <ActivityIndicator size={50} color={theme.COLORS.BACKGROUND} />
              )}
            </View>
          )}
          data={plates}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <View
              style={{
                paddingHorizontal: 10,
                paddingBottom: 10,
              }}
            >
              <PlateCard
                price={item.price}
                description={item.description}
                src={theme.IMAGES.BANNER}
              />
            </View>
          )}
        />
      </Container>
    </>
  );
}

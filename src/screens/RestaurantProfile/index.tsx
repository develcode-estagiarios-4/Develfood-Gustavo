import React, { useEffect, useState } from 'react';

import { ActivityIndicator, Image, StatusBar, View, Text } from 'react-native';

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

import { Header } from '../../components/Header';
import { PlateCard } from '../../components/PlateCard';
import { InputForm } from '../../components/InputForm';

import { useGet } from '../../services';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import { useDebouncedCallback } from 'use-debounce';

import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface Plate {
  id: number;
  description: string;
  price: string;
  photo_url: string;
}

interface Photo {
  id: number;
  code: string;
}

export default function RestaurantProfile({ route }: any) {
  const navigation = useNavigation();
  const { token } = useAuth();
  const { id, name, photo_url, food_types } = route.params;
  const [plates, setPlates] = useState<Plate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({
    text: '',
  });

  const {
    data: dataGet,
    loading,
    setLoading,
    fetchData,
  } = useGet<Plate[]>(`/plate/search?name=${filter.text}&restaurantid=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { data: dataGetPhoto, fetchData: fetchDataPhoto } = useGet<Photo>(
    photo_url,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  function onSuccessLoad(data?: any) {
    setPlates([...plates, ...(data as Plate[])]);
    setLoading(false);
  }

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
    (async () => await fetchDataPhoto(onSuccessLoad))();
    setLoading(true);
  }, []);

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
  }, [filter]);

  const debounced = useDebouncedCallback((text) => {
    searchPlates(text);
  }, 1500);

  function searchPlates(text: string) {
    setIsLoading(true);
    if (text.length > 1) {
      setPlates([]);
      setFilter({ text: text });
    } else {
      setPlates([]);
      setFilter({ text: '' });
    }
    setIsLoading(false);
  }

  return (
    <>
      <StatusBar backgroundColor={theme.COLORS.BACKGROUND_LIGHT} barStyle='dark-content' />
      <Container>
        <View style={{ paddingLeft: RFValue(6), paddingRight: RFValue(15) }}>
          <Header
            name="Restaurant"
            title=""
            onPressLeftButton={() => {
              navigation.goBack();
            }}
            srcLeftIcon={theme.ICONS.BACK}
            bgColor={theme.COLORS.BACKGROUND_LIGHT}
            fontColor={theme.COLORS.BACKGROUND_LIGHT}
            fontWeight={'400'}
          />
        </View>

        <PlateList showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: RFValue(18),
            paddingRight: RFValue(18),
          }}
          ListHeaderComponent={
            <View>
              <Wrapper>
                <RestaurantInfo>
                  <LabelWrapper>
                    <Title>{name}</Title>
                    <Category>
                      {food_types.charAt(0).toUpperCase() +
                        food_types.slice(1).toLowerCase()}
                    </Category>
                  </LabelWrapper>
                  <RestaurantPhoto
                    source={
                      dataGetPhoto.code
                        ? { uri: `${dataGetPhoto.code}` }
                        : theme.IMAGES.NOIMAGE
                    }
                  />
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
                  onChangeText={(text) => debounced(text)}
                />
              </Form>
            </View>
          }
          ListEmptyComponent={
           dataGet.length == 0 && !loading ? (
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignContent: 'center',
                }}
              >
                <Image source={theme.IMAGES.NOTFOUND} />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 17,
                    color: '#2B2B2E',
                  }}
                >
                  Nenhum prato encontrado
                </Text>
              </View>
            ) : null
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
          data={plates}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <View
              style={{ paddingBottom: RFValue(13), marginTop: RFValue(10) }}
            >
              <PlateCard
                price={item.price}
                name={item.name}
                src={item.photo_url ? item.photo_url : theme.IMAGES.NOIMAGE}
                description={item.description}
              />
            </View>
          )}
        />
      </Container>
    </>
  );
}

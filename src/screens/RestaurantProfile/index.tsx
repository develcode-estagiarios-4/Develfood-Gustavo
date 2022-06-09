import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
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

interface Restaurant {
  id: number;
  name: string;
  photo: string;
}
interface Restaurants {
  content?: Restaurant[];
  totalPages: number;
}

export default function RestaurantProfile({ route }: any) {
  const navigation = useNavigation();
  const { id, name, photo } = route.params;
  console.log(id, name, photo);

  const [test, setTest] = useState<Restaurant[]>([]);
  const { token } = useAuth();

  const {
    data: dataGet,
    loading,
    setLoading,
    error,
    fetchData,
  } = useGet<Restaurants>(`/restaurant/filter?name=&page=0&quantity=10`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <>
      <StatusBar backgroundColor={theme.COLORS.BACKGROUND} />
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
                  placeholder= {`Buscar em ${name}`}
                  src={theme.ICONS.SEARCH}
                />
              </Form>
              <PlateCard name='Prato' src={theme.ICONS.BACK}/>
            </>
          }
          data={test}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => (
            <>
            </>
          )}
        />
      </Container>
    </>
  );
}

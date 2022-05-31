import React, { useEffect, useState } from 'react';
import { FlatList, View, Button, StatusBar, Alert } from 'react-native';
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
import { useGet, usePost, usePut, useDelete } from '../../services';
import { useAuth } from '../../hooks/auth';
import { Header } from '../../components/Header';
import theme from '../../theme';
import { InputForm } from '../../components/InputForm';
import { RestaurantCard } from '../../components/RestaurantCard';

interface ContentData {
  id: number;
  name: string;
  photo: string;
}

interface DataProps {
  content?: ContentData[];
}

interface CreateUserRequest {
  name: string;
  email: string;
  gender: string;
  status: string;
}

export const Home: React.FC<undefined> = () => {
  const { token } = useAuth();
  const {
    data: dataGet,
    loading,
    error,
  } = useGet<DataProps>('/restaurant?page=0&quantity=10', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(dataGet);
  const data = [
    {
      name: 'joao',
    },
    { name: 'maria' },
  ];

function handleEndReached(){
  Alert.alert('oi ne')
}

  // const { data, loading, error } = useGet<IData[]>('/public/v2/users');

  // const {
  //   data: dataPut,
  //   loading: loadingPut,
  //   error: errorPut,
  //   handlerPut,
  // } = usePut<TResponse, CreateUserRequest>(
  //   '/public/v2/users/5773',
  //   {
  //     email: 'atualizando@develcode.com.br',
  //     name: 'Gustavo L Sobbrero',
  //     gender: 'male',
  //     status: 'active',
  //   },
  //   {
  //     headers: {
  //       'Content-type': 'application/json',
  //       Authorization:
  //         'Bearer b98e88558e5e5cb87c1a8a654c835d8ea70986ce2294a7285e58850b59d77887',
  //     },
  //   },
  // );

  // const {
  //   data: dataDelete,
  //   loading: loadingDelete,
  //   error: errorDelete,
  //   handlerDelete,
  // } = useDelete<TResponse, CreateUserRequest>('/public/v2/users/5773', {
  //   headers: {
  //     'Content-type': 'application/json',
  //     Authorization:
  //       'Bearer b98e88558e5e5cb87c1a8a654c835d8ea70986ce2294a7285e58850b59d77887',
  //   },
  // });
  // const { token } = useAuth();

  // useEffect(() => {
  //   console.log('teste de acesso ao token: ', token)

  // })

  return (
    <>
      <StatusBar backgroundColor={theme.COLORS.BACKGROUND} />
      <Header
        name="Home"
        leftSpaceWidth="1%"
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

      <Container>
        <Banners horizontal={true} showsHorizontalScrollIndicator={false}>
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
        <Content>
          <RestaurantList
            numColumns={2}
            data={dataGet.content}
            onEndReached={() => handleEndReached()}
            renderItem={({ item }: any) => (
              <>
                <RestaurantCard name={item.name} />
              </>
            )}
          />
        </Content>
      </Container>
    </>
  );
};

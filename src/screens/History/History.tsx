import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StatusBar, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header } from '../../components/Header';
import { OrderCard } from '../../components/OrderCard';
import { useAuth } from '../../hooks/auth';
import { useGet } from '../../services';
import theme from '../../theme';
import { Title, OrderList } from './styles';

interface UserOrders {
  content?: Order[];
  totalPages: number;
  totalElements: number;
}
interface Order {
  id: number;
  restaurant: Restaurant;
  date: Date;
  requestItems: Plate[];
}

interface Restaurant {
  name: string;
  photo_url: string;
}

interface Plate {
  plateDTO: PlateInfo;
  quantity: number;
}

interface PlateInfo {
  name: string;
}

export const History: React.FC<undefined> = () => {
  const { token } = useAuth();

  const [orders, setOrders] = useState<Order[]>([]);
  const [page, setPage] = useState(0);

  const {
    data: dataGet,
    loading,
    setLoading,
    error,
    fetchData,
  } = useGet<UserOrders>(`/request/costumer?&page=${page}&quantity=10`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  function onSuccessLoad(data?: any) {
    setOrders([...orders, ...(data?.content as Order[])]);
  }

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
    // console.log(dataGet.content[5].requestItems[0].quantity)
  }, [page]);

  async function handleEndReached() {
    if (dataGet.totalPages !== page && !loading) {
      setLoading(true);
      setPage(page + 1);
    }
  }

  return (
    <>
      <StatusBar
        backgroundColor={theme.COLORS.BACKGROUND}
        barStyle="light-content"
      />
      <Header
        bgColor={theme.COLORS.BACKGROUND}
        fontColor={theme.COLORS.BACKGROUND_LIGHT}
        title="Meus pedidos"
        fontWeight={'500'}
        name={'Order'}
        onPressLeftButton={() => {}}
      />

      <OrderList
        ListHeaderComponent={
          dataGet.totalElements > 0 ? <Title>Histórico</Title> : null
        }
        ListEmptyComponent={
          !loading && dataGet.totalElements == 0 ? (
            <View
              style={{
                height: '100%',
                alignItems: 'center',
              }}
            >
              <Image source={require('../../assets/noorders.png')} />
              <Text
                style={{
                  fontSize: RFValue(18),
                  color: '#2B2B2E',
                }}
              >
                Você ainda não fez nenhum pedido
              </Text>
            </View>
          ) : null
        }
        contentContainerStyle={{ paddingHorizontal: RFValue(20) }}
        data={orders}
        keyExtractor={(item: any) => item?.id}
        renderItem={({ item }: any) => (
          <>
            <OrderCard
              name={item.restaurant.name}
              src={item.restaurant.photo_url}
              id={item.id}
              date={item.date}
              quantity={item.requestItems[0].quantity}
              plateName={item.requestItems[0].plateDTO.name}
            />
          </>
        )}
        onEndReached={() => handleEndReached()}
        ListFooterComponent={() => (
          <View
            style={{
              height: RFValue(200),
              justifyContent: 'center',
            }}
          >
            {loading ? (
              <ActivityIndicator size={50} color={theme.COLORS.BACKGROUND} />
            ) : null}
          </View>
        )}
      />
    </>
  );
};

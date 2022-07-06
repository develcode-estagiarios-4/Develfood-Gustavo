import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StatusBar, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Header } from '../../components/Header';
import { OrderCard } from '../../components/OrderCard';
import { useAuth } from '../../hooks/auth';
import { useGet } from '../../services';
import theme from '../../theme';
import { Title, OrderList } from './styles';
import moment from 'moment';
import 'moment/locale/pt-br';
interface SectionListData {
  title: string;
  data: Order[];
}
interface UserOrders {
  content?: Order[];
  totalPages: number;
  totalElements: number;
}
interface Order {
  id: number;
  restaurant: Restaurant;
  date: string;
  requestItems: Plate[];
  status: string;
}

interface Restaurant {
  name: string;
  photo_url: string;
}

interface Plate {
  id: number;
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
  const [historicSections, setHistoricSections] = useState<SectionListData[]>(
    [],
  );

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

  function onSuccessLoad(data?: UserOrders) {
    setOrders([...orders, ...(data?.content as Order[])]);
  }

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
  }, [page]);

  async function handleEndReached() {
    if (dataGet.totalPages !== page && !loading) {
      setPage(page + 1);
    }
  }

  function sectionDataFormatter(data: Order[]) {
    const historicFormatted: SectionListData[] = [];
    data.forEach((order: Order) => {
      const sectionFound = historicFormatted.find(
        (historicSections: SectionListData) =>
          historicSections.title === order.date,
      );
      if (sectionFound) {
        sectionFound.data.push(order);
      } else {
        historicFormatted.push({
          title: order.date,
          data: [order],
        });
      }
    });
    setHistoricSections(historicFormatted);
  }

  const listItems = (item: Order) => {
    let quantityVisible = item.requestItems.map((requestItem: Plate, index) => {
      if (requestItem.quantity > 1) {
        return index != 0
          ? ' + ' + requestItem.quantity + ' ' + requestItem.plateDTO.name
          : requestItem.quantity + ' ' + requestItem.plateDTO.name;
      } else {
        return index != 0
          ? ' + ' + requestItem?.plateDTO.name
          : requestItem?.plateDTO.name;
      }
    });

    return quantityVisible;
  };

  useEffect(() => {
    dataGet?.content && sectionDataFormatter([...orders, ...dataGet?.content]);
  }, [dataGet]);
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
        showsVerticalScrollIndicator={false}
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
        sections={historicSections}
        renderSectionHeader={({ section: { title } }: any) => (
          <Text>{moment(title).format('llll').slice(0, -9)}</Text>
        )}
        keyExtractor={(item: any) => item?.id}
        initialNumToRender={dataGet.totalElements}
        renderItem={({ item }: any) => (
          <>
            <OrderCard
              name={item.restaurant.name}
              status={item.status}
              src={item.restaurant.photo_url}
              id={item.id}
              date={item.date}
              quantityAndName={listItems(item)}
            />
          </>
        )}
        onEndReached={() => handleEndReached()}
        ListFooterComponent={
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
        }
      />
    </>
  );
};

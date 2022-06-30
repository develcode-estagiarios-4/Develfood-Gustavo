import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { Alert } from 'react-native';
import { AxiosError } from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useGet, usePost } from '../services';
import { RequestProps, useAuth } from './auth';

interface AuthProviderProps {
  children: ReactNode;
}

interface Props {
  addItem: Function;
  removeItem: Function;
  clearShopping: Function;
  clearShoppingItem: Function;
  shopping: any;
  totalValue: number;
  totalItems: number;
  name: string;
  description: string;
  platePhoto: any;
  restaurantId: number;
  restaurantPhoto: string;
  restaurantName: string;
  restaurantFoodType: string;
  foodRequest: Function;
}

interface ItemProps {
  id: number;
  quantity: number;
  unityPrice: number;
  price: number;
  restaurantId: number;
}

interface Costumer {
  id: number;
}

const ShoppingContext = createContext({} as Props);

export default function ShoppingProvider({ children }: AuthProviderProps) {
  const { token } = useAuth();
  const navigation = useNavigation();

  const [shopping, setShopping] = useState<any[]>([]);
  const [totalValue, setTotalValue] = useState(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [platePhoto, setPlatePhoto] = useState<any>('');
  const [plateId, setPlateId] = useState<number>(0);
  const [restaurantId, setRestaurantId] = useState<number>(0);
  const [restaurantPhoto, setRestaurantPhoto] = useState<string>('');
  const [restaurantName, setRestaurantName] = useState<string>('');
  const [restaurantFoodType, setRestaurantFoodType] = useState<string>('');

  useEffect(() => {
    console.log(
      shopping,
      'Valor total: ' + totalValue,
      'Itens: ' + totalItems,
      plateId,
      restaurantId,
    );
  }, [shopping]);

  function addItem(
    id: number,
    price: number,
    name: string,
    description: string,
    platePhoto: any,
    restaurantId: number,
    restaurantPhoto: any,
    restaurantName: string,
    restaurantFoodType: string,
  ) {
    const addingProducts = [...shopping];
    const item = addingProducts.find((product: any) => product.id === id);
    const fromOtherRestaurant = addingProducts.find(
      (product) => product.restaurantId !== restaurantId,
    );
    if (!fromOtherRestaurant) {
      if (!item) {
        addingProducts.push({
          id: id,
          quantity: 1,
          unityPrice: price,
          price: price,
          name: name,
          src: platePhoto,
          description: description,
          restaurantId: restaurantId,
          restaurantPhoto: restaurantPhoto,
          restaurantName: restaurantName,
          restaurantFoodType: restaurantFoodType,
        } as ItemProps);
      } else {
        item.quantity += 1;
        item.price += price;
      }
      setShopping(addingProducts);
      setTotalValue(totalValue + price);
      setTotalItems(totalItems + 1);
      setRestaurantId(restaurantId);
      setRestaurantPhoto(restaurantPhoto);
      setRestaurantName(restaurantName);
      setRestaurantFoodType(restaurantFoodType);
      setName(name);
      setDescription(description);
      setPlatePhoto(platePhoto);
      setPlateId(id);
    } else {
      Alert.alert(
        'Esvazie seu carrinho para adicionar produtos de restaurantes diferentes.',
      );
    }
  }

  function removeItem(id: any, price: number) {
    const removingProducts = [...shopping];
    const item = removingProducts.find((product: any) => product.id === id);
    if (item.quantity > 1) {
      item.quantity -= 1;
      item.price -= price;
      setShopping(removingProducts);
      setTotalValue(totalValue - price);
    } else {
      const filterCart = removingProducts.filter(
        (product: any) => product.id !== id,
      );
      setShopping(filterCart);
      setTotalValue(totalValue - price);
    }
    setTotalItems(totalItems - 1);
  }

  function clearShopping() {
    shopping.splice(0, shopping.length);
    setTotalValue(0);
    setTotalItems(0);
  }

  function clearShoppingItem(id: string) {
    const removeAllProducts = [...shopping];
    const item = removeAllProducts.find((product: any) => product.id === id);

    if (item.quantity >= 1) {
      setTotalValue(totalValue - item.price);
      setTotalItems(totalItems - item.quantity);
      setShopping(
        removeAllProducts.filter((product: any) => product.id !== id),
      );
    }
  }

  const { data: dataGetCostumer, fetchData } = useGet<Costumer>(`/auth`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(dataGetCostumer.id);

  useEffect(() => {
    fetchData();
  }, []);

  // const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState({} as RequestProps);

  const {
    data: dataPost,
    loading: loadingPost,
    handlerPost,
  } = usePost<any, any>(request.endpoint, request.body, request.options);

  function createFoodRequestSuccess(data: any) {
    data.id && navigation.navigate('OrderSuccess' as never);
    clearShopping();
  }

  function createFoodRequestError(error: AxiosError<any, any> | any) {
    error && Alert.alert(request.error.title, request.error.message);
  }

  useEffect(() => {
    !!request.body &&
      handlerPost(
        request.error.title,
        request.error.message,
        createFoodRequestError,
        createFoodRequestSuccess,
      );
  }, [request]);

  const foodRequestData = {
    costumer: {
      id: dataGetCostumer.id,
    },
    restaurant: {
      id: restaurantId,
    },
    date: new Date().toString,
    dateLastUpdated: new Date().toString,
    totalValue: totalValue,
    paymentType: 'card',
    status: 'PEDIDO_REALIZADO',
    requestItems: shopping.map((item: any) => {
      return {
        plate: {
          id: item.id,
          price: item.unityPrice,
        },
        quantity: item.quantity,
        price: item.price,
        observation: '',
      };
    }),
    restaurantPromotion: null,
  };

  function foodRequest() {
    setRequest({
      endpoint: '/request',
      body: foodRequestData,
      error: {
        title: 'Ops',
        message: 'Não foi possível realizar seu pedido, desculpe o incômodo',
      },
      options: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });
  }

  const store = {
    addItem,
    foodRequest,
    removeItem,
    clearShopping,
    clearShoppingItem,
    shopping,
    totalValue,
    totalItems,
    name,
    description,
    platePhoto,
    restaurantId,
    restaurantPhoto,
    restaurantName,
    restaurantFoodType,
  };

  return (
    <ShoppingContext.Provider value={store}>
      {children}
    </ShoppingContext.Provider>
  );
}

export function useShopping() {
  const context = useContext(ShoppingContext);

  const {
    shopping,
    addItem,
    removeItem,
    foodRequest,
    clearShopping,
    clearShoppingItem,
    totalValue,
    totalItems,
    name,
    description,
    platePhoto,
    restaurantId,
    restaurantPhoto,
    restaurantName,
    restaurantFoodType,
  } = context;

  return {
    shopping,
    foodRequest,
    addItem,
    removeItem,
    clearShopping,
    clearShoppingItem,
    totalValue,
    totalItems,
    name,
    description,
    platePhoto,
    restaurantId,
    restaurantPhoto,
    restaurantName,
    restaurantFoodType,
  };
}

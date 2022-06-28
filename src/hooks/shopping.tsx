import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { Alert, NativeModules } from 'react-native';
import { Description } from '../components/PlateCard/styles';

interface AuthProviderProps {
  children: ReactNode;
}

interface RequestProps {
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
}

interface ItemProps {
  id: number;
  quantity: number;
  price: number;
  restaurantId: number;
}

const ShoppingContext = createContext({} as RequestProps);

export default function ShoppingProvider({ children }: AuthProviderProps) {
  const [shopping, setShopping] = useState<any[]>([]);
  const [totalValue, setTotalValue] = useState(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [platePhoto, setPlatePhoto] = useState<any>('');
  const [restaurantId, setRestaurantId] = useState<number>(0);
  const [restaurantPhoto, setRestaurantPhoto] = useState<string>('');
  const [restaurantName, setRestaurantName] = useState<string>('');
  const [restaurantFoodType, setRestaurantFoodType] = useState<string>('');

  useEffect(() => {
    console.log(shopping, 'Valor total: ' + totalValue, 'Itens: ' + totalItems);
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

  function clearShopping(id: string) {
    const removeAllProducts = [...shopping];
    const item = removeAllProducts.find((product: any) => product.id === id);

    if (item.quantity >= 1) {
      setShopping([]);
      setTotalValue(0);
      setTotalItems(0);
    }
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

  const store = {
    addItem,
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

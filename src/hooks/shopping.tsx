import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { Alert } from 'react-native';

interface AuthProviderProps {
  children: ReactNode;
}

interface RequestProps {
  addItem: Function;
  removeItem: Function;
  clearShopping: Function;
  shopping: any;
  totalValue: number;
  totalItems: number;
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

  useEffect(() => {
    console.log(shopping, 'Valor total: ' + totalValue, 'Itens: ' + totalItems);
  }, [shopping]);

  function addItem(id: number, price: number, restaurantId: number) {
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
          price: price,
          restaurantId: restaurantId,
        } as ItemProps);
      } else {
        item.quantity += 1;
        item.price += price;
      }
      setShopping(addingProducts);
      setTotalValue(totalValue + price);
      setTotalItems(totalItems + 1);
    } else {
      Alert.alert(
        'Esvazie seu carrinho para adicionar produtos de outro restaurante.',
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
    setShopping([]);
    setTotalItems(0);
    setTotalValue(0);
  }

  const store = {
    addItem,
    removeItem,
    clearShopping,
    shopping,
    totalValue,
    totalItems,
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
    totalValue,
    totalItems,
  } = context;

  return {
    shopping,
    addItem,
    removeItem,
    clearShopping,
    totalValue,
    totalItems,
  };
}

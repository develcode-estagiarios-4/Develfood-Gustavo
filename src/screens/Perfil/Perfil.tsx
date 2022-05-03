import React from 'react';
import { Text, Button, View } from 'react-native';
import { usePost } from '../../services/post';

export const Perfil: React.FC<undefined> = () => {

const { data, loading, error, handlerPost } = usePost('/public/v2/users' )

  return (
    <View>
      <Text>Alo</Text>
    </View>
  );
};

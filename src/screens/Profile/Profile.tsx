import React from 'react';
import { Text, Button, View } from 'react-native';
import { Title } from './styles';

export const Profile: React.FC<undefined> = () => {

  return (
    <View style={{flex: 1, backgroundColor: 'lightblue'}}>
      <Title>Perfil</Title>
    </View>
  );
};

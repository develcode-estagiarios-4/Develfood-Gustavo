import React from 'react';
import {  View } from 'react-native';
import { Title } from './styles';

export const Favorites: React.FC<undefined> = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'lightgreen'}}>
      <Title>Favoritos</Title>
    </View>
  )
}

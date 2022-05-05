import React from 'react';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  focused: boolean;
  name: string;
}

export function TabBarIcon({ focused, name }: Props) {
  return (
    <Image
      source={
        name === 'home'
          ? require('../../assets/inicio.png')
          : name === 'heart'
          ? require('../../assets/favoritos.png')
          : name === 'historic'
          ? require('../../assets/historico.png')
          : require('../../assets/perfil.png')
      }
      style={{
        tintColor: focused ? '#C20C18' : 'gray',
        height: focused ? RFValue(25) : RFValue(20),
        width: focused ? RFValue(36) : RFValue(32),
        resizeMode: 'contain',
      }}
    />
  );
}

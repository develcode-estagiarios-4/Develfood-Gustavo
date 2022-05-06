import React from 'react';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../theme';
import { TabTouchable, Texto } from './styles';

interface Props {
  focused: boolean;
  name: string;
  onPressed: Function;
}

export function TabBarWrapper({ focused, name, onPressed }: Props) {
  return (
    <TabTouchable onPress={() => onPressed()}>
      <Image
        source={
          name === 'Início'
            ? theme.ICONS.HOME
            : name === 'Favoritos'
            ? theme.ICONS.FAVORITES
            : name === 'Histórico'
            ? theme.ICONS.HISTORY
            : theme.ICONS.PROFILE
        }
        style={{
          tintColor: focused
            ? theme.COLORS.PRIMARY_900
            : theme.COLORS.SECONDARY_400,
          height: focused ? RFValue(25) : RFValue(20),
          width: focused ? RFValue(36) : RFValue(32),
          resizeMode: 'contain',
        }}
      />
      {focused ? <Texto></Texto> : <Texto>{name}</Texto>}
    </TabTouchable>
  );
}

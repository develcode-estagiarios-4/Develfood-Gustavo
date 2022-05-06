import React, { useState } from 'react';
import { TabBar, TabSpace } from './styles';
import { TabBarWrapper } from './TabBarWrapper';
import { useNavigation } from '@react-navigation/native';

export function NavigationBar() {
  const [iconName, setIconName] = useState('Início');

  const navigation = useNavigation();

  return (
    <TabBar>
      <TabSpace>
        <TabBarWrapper
          onPressed={() => {
            setIconName('Início');
            navigation.navigate('Início' as never);
          }}
          focused={iconName === 'Início'}
          name={'Início'}
        />
      </TabSpace>

      <TabSpace>
        <TabBarWrapper
          onPressed={() => {
            setIconName('Favoritos');
            navigation.navigate('Favoritos' as never);
          }}
          focused={iconName === 'Favoritos'}
          name={'Favoritos'}
        />
      </TabSpace>

      <TabSpace>
        <TabBarWrapper
          onPressed={() => {
            setIconName('Histórico');
            navigation.navigate('Histórico' as never);
          }}
          focused={iconName === 'Histórico'}
          name={'Histórico'}
        />
      </TabSpace>

      <TabSpace>
        <TabBarWrapper
          onPressed={() => {
            setIconName('Perfil');
            navigation.navigate('Perfil' as never);
          }}
          focused={iconName === 'Perfil'}
          name={'Perfil'}
        />
      </TabSpace>
    </TabBar>
  );
}

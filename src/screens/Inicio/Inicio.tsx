import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { api } from '../../services/api';
interface User {
  login: string;
  id: string;
  html_url: string;
}

export const Inicio: React.FC<undefined> = () => {
  const [user, setUser] = useState<User>();

  //GET PUT ...
  useEffect(() => {
    api.get('/users/tomtt').then((response) => {
      setUser(response.data);
    });
  }, []);

  return <Text>{user?.html_url}</Text>;
};

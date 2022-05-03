import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import { useGet } from '../../services/get';
import { usePost } from '../../services/post';
import { usePut } from '../../services/put';
import { useDelete } from '../../services/delete';

interface IData {
  name: string;
  email: string;
  gender: string;
  status: string;
}
interface TResponse {
  name: string;
  email: string;
  gender: string;
  status: string;
}

interface CreateUserRequest {
  name: string;
  email: string;
  gender: string;
  status: string;
}

// interface DResponse {
//   name: string;
//   email: string;
//   gender: string;
//   status: string;
// }

// interface DeleteUserRequest {
//   name: string;
//   email: string;
//   gender: string;
//   status: string;
// }

export const Inicio: React.FC<undefined> = () => {
  const { data, loading, error } = useGet<IData[]>('/public/v2/users');

  const {
    data: dataPost,
    loading: loadingPost,
    error: errorPost,
    handlerPost,
  } = usePost<TResponse, CreateUserRequest>(
    '/public/v2/users',
    {
      email: 'gustavo@develcode.com.br',
      name: 'Lucas',
      gender: 'male',
      status: 'active',
    },
    {
      headers: {
        'Content-type': 'application/json',
        Authorization:
          'Bearer b98e88558e5e5cb87c1a8a654c835d8ea70986ce2294a7285e58850b59d77887',
      },
    },
  );

  const {
    data: dataPut,
    loading: loadingPut,
    error: errorPut,
    handlerPut,
  } = usePut<TResponse, CreateUserRequest>(
    '/public/v2/users/5437',
    {
      email: 'lucas@gmail.com',
      name: 'lucas',
      gender: 'female',
      status: 'active',
    },
    {
      headers: {
        'Content-type': 'application/json',
        Authorization:
          'Bearer b98e88558e5e5cb87c1a8a654c835d8ea70986ce2294a7285e58850b59d77887',
      },
    },
  );

  const {
    data: dataDelete,
    loading: loadingDelete,
    error: errorDelete,
    handlerDelete,
  } = useDelete<TResponse, CreateUserRequest>('/public/v2/users/5435', {
    headers: {
      'Content-type': 'application/json',
      Authorization:
        'Bearer b98e88558e5e5cb87c1a8a654c835d8ea70986ce2294a7285e58850b59d77887',
    },
  });

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <>
            <Text>{item.name}</Text>
          </>
        )}
      />
      <Button title="Enviar" onPress={() => handlerPost()} />
      <Button title="Excluir" onPress={() => handlerDelete()} />
      <Button title="Atualizar  " onPress={() => handlerPut()} />
    </View>
  );
};

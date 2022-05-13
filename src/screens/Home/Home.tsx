import React, { useEffect, useState } from 'react';
import { FlatList, View, Button } from 'react-native';
import { Texto, Container } from './styles';
import { useGet, usePost, usePut, useDelete } from '../../services';
import { useAuth } from '../../hooks/auth';

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

export const Home: React.FC<undefined> = () => {
  const { data, loading, error } = useGet<IData[]>('/public/v2/users');

  const {
    data: dataPost,
    loading: loadingPost,
    error: errorPost,
    handlerPost,
  } = usePost<TResponse, CreateUserRequest>(
    '/public/v2/users',
    {
      email: 'dsaasd@develcode.com.br',
      name: 'Joao Dias',
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
    '/public/v2/users/5773',
    {
      email: 'atualizando@develcode.com.br',
      name: 'Gustavo L Sobbrero',
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
    data: dataDelete,
    loading: loadingDelete,
    error: errorDelete,
    handlerDelete,
  } = useDelete<TResponse, CreateUserRequest>('/public/v2/users/5773', {
    headers: {
      'Content-type': 'application/json',
      Authorization:
        'Bearer b98e88558e5e5cb87c1a8a654c835d8ea70986ce2294a7285e58850b59d77887',
    },
  });
  const { token } = useAuth();

  useEffect(() => {
    console.log('teste de acesso ao token: ', token) 

  })

  return (
    <Container>
        {loading ? (
          <Texto>Carregando dados...</Texto>
        ) : (
          <View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <>
                  <Texto>{item.name}</Texto>
                </>
              )}
            />
            <Button title="Enviar" onPress={() => handlerPost({title:'', message:''})} />
            <Button title="Atualizar" onPress={() => handlerPut()} />
            <Button title="Excluir" onPress={() => handlerDelete()} />

            {loadingPost ? (
              <Texto>Carregando postagem de usuário</Texto>
            ) : (
              <View>
                <Texto>{dataPost.name}</Texto>
                <Texto>{dataPost.email}</Texto>
                <Texto>{dataPost.gender}</Texto>
              </View>
            )}
          </View>
        )}
    </Container>
  );
};

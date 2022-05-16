import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { api } from './api';

interface ErrorText {
  title?: string;
  message?: string;
}

export function usePost<T = unknown, TResponse = unknown>(url: string, body?: T, options?: AxiosRequestConfig) {
  const [data, setData] = useState<TResponse>({} as TResponse);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null | unknown>(null);

    async function handlerPost(title = '', message = '') {
      let response 
      console.log('seta--->', url, body)
      try {
        setLoading(true)
         response = await api.post(url, body, options)
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
        Alert.alert(title, message)
        console.log(error)
      } finally {
        setLoading(false);
      }
    }

  return { data, loading, error, handlerPost };
}
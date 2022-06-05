import { AxiosRequestConfig, AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { api } from './api';

export function usePost<T = unknown, TResponse = unknown>(
  url: string,
  body?: T,
  options?: AxiosRequestConfig,
) {
  const [data, setData] = useState<TResponse>({} as TResponse);
  const [loading, setLoading] = useState(false);

  async function handlerPost(
    title = '',
    message = '',
    onError: (error: AxiosError<any, any>) => void,
    onSuccess?: (response: TResponse) => void,
  ) {
    console.log('seta--->', url, body);
    try {
      setLoading(true);
      const response = await api.post(url, body, options);
      setData(response.data);
      console.log(response.data);
      response.data && onSuccess && onSuccess(response.data);
    } catch (error: AxiosError<any, any> | any) {
      error && onError(error);
      console.log(error);
    } finally {
      setLoading(false);
      console.log('POST---->', body);
    }
  }

  return { data, loading, handlerPost };
}

import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gorest.co.in'
});


export function useDelete<T = unknown, TResponse = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<TResponse>({} as TResponse);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null | unknown>(null);

    async function handlerDelete() {
      try {
        setLoading(true)
        const response = await api.delete(url, options)
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
        console.log(error)
      } finally {
        setLoading(false);
      }
    }

  return { data, loading, error, handlerDelete };
}

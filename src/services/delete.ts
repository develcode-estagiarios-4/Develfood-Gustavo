import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { api } from './api';

export function useDelete<T = unknown, TResponse = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<TResponse>({} as TResponse);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null | unknown>(null);

    async function handlerDelete() {
      try {
        setLoading(true)
        const response = await api.delete(url, options)
        setData(response.data);
        console.log("Usuário deletado!");
      } catch (error) {
        setError(error);
        console.log(error)
      } finally {
        setLoading(false);
      }
    }

  return { data, loading, error, handlerDelete };
}

import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { api } from './api';

export function useGet<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        await api.get(url, options)
        .then((response) => setData(response.data));
      } catch (erro) {
        setError(error);
        console.log(error)
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { data, loading, error };
}
import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://gorest.co.in'
});


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

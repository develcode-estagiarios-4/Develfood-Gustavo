import { AxiosRequestConfig } from 'axios';
import { useState } from 'react';
import { api } from './api';

export function useGet<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function fetchData(onSuccess?: (response: T) => void) {
    try {
      setLoading(true)
      const response = await api.get(url, options);
      setData(response.data);
      response.data && onSuccess && onSuccess(response.data);
    } catch (erro) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, setLoading, error, fetchData };
}

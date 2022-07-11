

import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { useGet } from '../../services';
import theme from '../../theme';
import { Photos } from '../RestaurantCard';
import { BannerImage } from './styles';

interface BannerProps {
  src: string;
  onPressed: Function;
}

export function Banner({ src, onPressed }: BannerProps) {
  const { token } = useAuth();

  const [photos, setPhotos] = useState<Photos[]>([]);

  function onSuccessLoad(data?: any) {
    setPhotos([...photos, ...(data as Photos[])]);
    setLoading(false);
  }

  useEffect(() => {
    (async () => await fetchData(onSuccessLoad))();
    setLoading(true);
  }, []);

  const { data, setLoading, fetchData } = useGet<Photos>(src, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <TouchableOpacity onPress={() => onPressed()} activeOpacity={0.9}>
      <BannerImage
        source={data.code ? { uri: `${data.code}` } : theme.IMAGES.NOIMAGE}
        resizeMode='stretch'
      />
    </TouchableOpacity>
  );
}

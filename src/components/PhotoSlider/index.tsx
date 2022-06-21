import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, PhotoIndexes, PhotoIndex, Banners, Banner } from './styles';

interface Props {
  photosUri: any[];
}

interface ChangePhotoProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function PhotoSlider({ photosUri }: Props) {
  const [photoIndex, setPhotoIndex] = useState(0);

  const indexChanged = useRef((info: ChangePhotoProps) => {
    const index = info.viewableItems[0].index!;
    setPhotoIndex(index);
  });

  return (
    <Container>
      <Banners>
        <FlatList
        contentContainerStyle={{paddingHorizontal: RFValue(4)}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={photosUri}
          keyExtractor={(key) => key}
          renderItem={({ item }) => <Banner source={item} resizeMode='contain' />}
          onViewableItemsChanged={indexChanged.current}
          viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
          />
      </Banners>
      <PhotoIndexes>
        {photosUri.map((item, index) => (
          <PhotoIndex key={String(index)} active={index === photoIndex} />
        ))}
      </PhotoIndexes>
    </Container>
  );
}

import React from 'react';
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-banner-carousel';

const CarouselDemo = () => {
  const images = [
    { id: 1, url: 'https://picsum.photos/500?random=1' },
    { id: 2, url: 'https://picsum.photos/500?random=2' },
    { id: 3, url: 'https://picsum.photos/500?random=3' },
    { id: 4, url: 'https://picsum.photos/500?random=4' },
    { id: 5, url: 'https://picsum.photos/500?random=5' },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Carousel autoplay autoplayTimeout={3000} loop index={0}>
        {images.map((obj) => (
          <Image
            key={obj.id}
            source={{ uri: obj.url }}
            style={{ width: '100%', height: 400 }}
          />
        ))}
      </Carousel>
    </View>
  );
};

export default CarouselDemo;

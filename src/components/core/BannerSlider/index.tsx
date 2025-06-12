import React, {useRef, useEffect} from 'react';
import {View, Image, FlatList, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const banners = [
  'https://via.placeholder.com/350x150',
  'https://via.placeholder.com/350x150',
  'https://via.placeholder.com/350x150',
];

const BannerSlider = () => {
  const flatListRef = useRef();
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % banners.length;
      flatListRef.current.scrollToIndex({index, animated: true});
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FlatList
      ref={flatListRef}
      data={banners}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({item}) => (
        <Image source={{uri: item}} style={styles.image} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 150,
    resizeMode: 'cover',
  },
});

export default BannerSlider;

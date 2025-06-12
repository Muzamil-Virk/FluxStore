import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

export default function RecommendedList() {
  const list = [
    {
      images: require('../../../assists/images/whiteShirt.png'),
      tile: 'White fashion hoodie',
      price: '$ 29.00',
    },
    {
      images: require('../../../assists/images/blackShirt.png'),
      tile: 'Cotton T-shirt',
      price: '$ 30.00',
    },

    {
      images: require('../../../assists/images/whiteShirt.png'),
      tile: 'White fashion hoodie',
      price: '$ 29.00',
    },

    {
      images: require('../../../assists/images/blackShirt.png'),
      tile: 'Cotton T-shirt',
      price: '$ 30.00',
    },
  ];

  return (
    <FlatList
      data={list}
      horizontal
      renderItem={item => (
        <View
          style={{
            width: '60%',
            height: 66,
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            borderRadius: 8,
            borderWidth: 1,
            elevation: 8,
            borderColor: '#F9F9F9',
          }}>
          <Image
            style={{width: 66, height: 66, resizeMode: 'contain'}}
            source={item.item.images}
          />
          <View style={{marginTop: 10, marginLeft: 10}}>
            <Text style={{fontSize: 12, fontWeight: '500', color: '#1D1F22'}}>
              {item.item.tile}
            </Text>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#1D1F22'}}>
              {item.item.price}
            </Text>
          </View>
        </View>
      )}
    />
  );
}

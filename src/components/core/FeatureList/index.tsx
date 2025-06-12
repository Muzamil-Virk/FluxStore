import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';

export default function FeatureList() {
  const list = [
    {
      image: require('../../../assists/images/flatpic.png'),
      title: 'Long Sleeve Dress',
      price: '$ 45.00',
    },

    {
      image: require('../../../assists/images/flatpic.png'),
      title: 'Long Sleeve Dress',
      price: '$ 45.00',
    },

    {
      image: require('../../../assists/images/flatpic.png'),
      title: 'Long Sleeve Dress',
      price: '$ 45.00',
    },

    {
      image: require('../../../assists/images/flatpic.png'),
      title: 'Long Sleeve Dress',
      price: '$ 45.00',
    },

    {
      image: require('../../../assists/images/flatpic.png'),
      title: 'Long Sleeve Dress',
      price: '$ 45.00',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={list}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={item => (
          <View style={{marginHorizontal: 15}}>
            <Image
              source={item.item.image}
              style={{width: 126, height: 172, borderRadius: 15}}
            />
            <Text style={{fontSize:12,fontWeight:'500',marginTop:15}}  >{item.item.title}</Text>
            <Text style={{fontSize:16,fontWeight:'700',marginTop:15}} >{item.item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

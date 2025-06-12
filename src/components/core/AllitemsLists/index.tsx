import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

export default function AllitemsLists() {
  const AllList = [
    {
      image: require('../../../assists/images/wishList1.png'),
      title: 'Front Tie Mini Dress',
      price: '$ 59.00',
    },

    {
      image: require('../../../assists/images/wishList2.png'),
      title: 'Linen Dress',
      price: '$ 52.00',
    },

    {
      image: require('../../../assists/images/wishList3.png'),
      title: 'Ohara Dress',
      price: '$ 85.00',
    },

    {
      image: require('../../../assists/images/wishList4.png'),
      title: 'Tie Back Mini Dress',
      price: '$ 67.00',
    },
  ];

  return (
    <View
      style={{
        marginTop: '8%',
      }}>
      <FlatList
        data={AllList}
        numColumns={2}
        renderItem={item => (
          <View
            style={{
              width: '50%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image style={{width: 141, height: 186,resizeMode:'contain',marginTop:15}} source={item.item.image} />
            <Text style={{fontSize: 12, fontWeight: '400', marginTop:15}}>
              {item.item.title}
            </Text>
            <Text style={{fontSize: 16, fontWeight: '700',marginTop:15}}>
              {item.item.price}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

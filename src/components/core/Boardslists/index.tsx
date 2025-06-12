import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Boardslists() {
  const outfits = [
    {
      image: require('../../../assists/images/outfite.png'),
      title: 'Going out outfits',
      price: '36 items',
      icon: require('../../../assists/icons/ArrowRight.png'),
    },

    {
      image: require('../../../assists/images/officeList.png'),
      title: 'Office Fashion',
      price: '20t items',
      icon: require('../../../assists/icons/ArrowRight.png'),
    },
  ];

  return (
    <FlatList
      data={outfits}
      renderItem={item => (
        <View style={{marginTop: '10%'}}>
          <Image
            style={{width: '90%', height: 150, alignSelf: 'center'}}
            source={item.item.image}
          />

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '700',
              }}>
              {item.item.title}
            </Text>
            <TouchableOpacity>
              <Image style={{width: 22, height: 22}} source={item.item.icon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#8A8A8F',
                marginLeft: 22,
                marginTop: '1%',
              }}>
              {item.item.price}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: '90%',
              height: 1,
              backgroundColor: '#E8E8E8',
              alignSelf: 'center',
              marginTop: 20,
            }}></View>
        </View>
      )}
    />
  );
}

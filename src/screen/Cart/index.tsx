import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';


export default function Cart(props: any) {
  const {navigation} = props;
  const AllList = [
    {
      image: require('../../assists/images/wishList1.png'),
      title: 'Front Tie Mini Dress',
      price: '$ 59.00',
      images: require('../../assists/icons/redHeart.png'),
    },

    {
      image: require('../../assists/images/wishList2.png'),
      title: 'Linen Dress',
      price: '$ 52.00',
      images: require('../../assists/icons/redHeart.png'),
    },

    {
      image: require('../../assists/images/wishList3.png'),
      title: 'Ohara Dress',
      price: '$ 85.00',
      images: require('../../assists/icons/redHeart.png'),
    },

    {
      image: require('../../assists/images/wishList4.png'),
      title: 'Tie Back Mini Dress',
      price: '$ 67.00',
      images: require('../../assists/icons/redHeart.png'),
    },

    {
      image: require('../../assists/images/wishList1.png'),
      title: 'Front Tie Mini Dress',
      price: '$ 59.00',
      images: require('../../assists/icons/redHeart.png'),
    },

    {
      image: require('../../assists/images/wishList2.png'),
      title: 'Linen Dress',
      price: '$ 52.00',
      images: require('../../assists/icons/redHeart.png'),
    },

    {
      image: require('../../assists/images/wishList3.png'),
      title: 'Ohara Dress',
      price: '$ 85.00',
      images: require('../../assists/icons/redHeart.png'),
    },

    {
      image: require('../../assists/images/wishList4.png'),
      title: 'Tie Back Mini Dress',
      price: '$ 67.00',
      images: require('../../assists/icons/redHeart.png'),
    },
  ];

  return (
    <View style={{flex: 1}}>
      <HeadersScreen
        backIcon={require('../../assists/icons/backIcon.png')}
        onPressBack={() => navigation.goBack()}
        title={'Your Cart'}
      />

      <View
        style={{
          width: '90%',
          height: 52,
          alignSelf: 'center',

          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20, fontWeight: '700', alignSelf: 'center'}}>
          Found{'\n'}152 Results
        </Text>
        <TouchableOpacity
          style={{
            width: 80,
            height: 40,
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-around',
            borderColor: '#33302E26',
            borderWidth: 2,
            borderRadius: 50,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 14, fontWeight: '400'}}>Filter</Text>
          <Image
            style={{width: 10, height: 10, resizeMode: 'contain'}}
            source={require('../../assists/icons/filterIcon.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: '8%',
          marginBottom: '59%',
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
              <Image
                style={{
                  width: 141,
                  height: 186,
                  resizeMode: 'contain',
                  marginTop: 15,
                }}
                source={item.item.image}
              />
              <Image
                style={{
                  width: 27,
                  height: 27,
                  position: 'absolute',
                  marginTop: 30,
                  marginLeft: '55%',
                }}
                source={item.item.images}
              />
              <Text style={{fontSize: 12, fontWeight: '400', marginTop: 15}}>
                {item.item.title}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700', marginTop: 15}}>
                {item.item.price}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
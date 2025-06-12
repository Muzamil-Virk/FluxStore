import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';

export default function vouchers(props: any) {
  const {navigation} = props;
  const vouchersList = [
    {
      images: require('../../assists/images/Subtract.png'),
      discount: '50%',
      title: 'Black Friday',
      SaleOFF: 'Sale off 50%',
      Code: 'Code: fridaysale',
      exp: 'exp',
      date: '20',
      month: 'Dec',
      line: require('../../assists/icons/Line.png'),
    },

    {
      images: require('../../assists/images/Subtract.png'),
      discount: '30%',
      title: 'Holiday Sale',
      SaleOFF: 'Sale off 30%',
      Code: 'Code: holiday30',
      exp: 'exp',
      date: '22',
      month: 'Dec',
      line: require('../../assists/icons/Line.png'),
    },

    {
      images: require('../../assists/images/Subtract.png'),
      discount: '20%',
      title: 'Black Friday',
      SaleOFF: '20% off your first order',
      Code: 'First order',
      exp: 'exp',
      date: '28',
      month: 'Dec',
      line: require('../../assists/icons/Line.png'),
    },
  ];

  return (
    <View style={{flex: 1}}>
      <HeadersScreen
        title={'Voucher'}
        backIcon={require('../../assists/icons/backIcon.png')}
        onPressBack={() => navigation.goBack()}
      />

      <FlatList
        data={vouchersList}
        renderItem={item => (
          <View
            style={{
              marginTop: 40,
            }}>
            <Image
              source={item.item.images}
              style={{
                width: '90%',
                height: 88,
                alignSelf: 'center',
              }}
            />
            <View
              style={{
                width: 65,
                height: 65,
                backgroundColor: '#23262F',
                borderRadius: 8,
                position: 'absolute',
                marginTop: 10,
                marginLeft: '17%',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#FFFFFF',
                  alignSelf: 'center',
                }}>
                {item.item.discount}
              </Text>
            </View>
            <View
              style={{
                gap: 3,
                marginTop: 8,
                position: 'absolute',
                marginLeft: '40%',
              }}>
              <Text style={{fontSize: 16, fontWeight: '700'}}>
                {item.item.title}
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#6E768A'}}>
                {item.item.SaleOFF}
              </Text>
              <Text style={{fontSize: 14, fontWeight: '700'}}>
                {item.item.Code}
              </Text>
            </View>
            <Image
              source={item.item.line}
              style={{
                position: 'absolute',
                marginLeft: '78.30%',
                height: 70.5,
                marginTop: 7.5,
              }}
            />
            <View
              style={{position: 'absolute', marginLeft: '81%', marginTop: 10}}>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#777E90'}}>
                {item.item.exp}
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', marginTop: 10}}>
                {item.item.date}
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', marginTop: 1}}>
                {item.item.month}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

import {View, Text} from 'react-native';
import React from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';

export default function notifyScreen(props: any) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <HeadersScreen
        title={'Gemstore'}
        backIcon={require('../../assists/icons/backIcon.png')}
        onPressBack={() => navigation.goBack()}
      />

      <View
        style={{
          width: '90%',
          height: 105,
          backgroundColor: '#FFFFFF',
          alignSelf: 'center',
          marginTop: 40,
          borderWidth: 1,
          borderColor: '#EFEFEF',
          borderRadius: 15,
          elevation: 7,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            width: '80%',
            height: 30,
            marginTop: 15,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          Good morning! Get 20% Voucher
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '400',
            color: '#686868',
            width: '80%',
            height: 50,

            alignSelf: 'center',
            alignItems: 'center',
          }}>
          Summer sale up to 20% off. Limited voucher. Get now!! 😜
        </Text>
      </View>

      <View
        style={{
          width: '90%',
          height: 79,
          backgroundColor: '#FFFFFF',
          alignSelf: 'center',
          marginTop: 40,
          borderWidth: 1,
          borderColor: '#EFEFEF',
          borderRadius: 15,
          elevation: 7,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            width: '80%',
            height: 30,
            marginTop: 15,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          Special offer just for you
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '400',
            color: '#686868',
            width: '80%',
            height: 50,

            alignSelf: 'center',
            alignItems: 'center',
          }}>
          New Autumn Collection 30% off
        </Text>
      </View>

      <View
        style={{
          width: '90%',
          height: 77,
          backgroundColor: '#FFFFFF',
          alignSelf: 'center',
          marginTop: 40,
          borderWidth: 1,
          borderColor: '#EFEFEF',
          borderRadius: 15,
          elevation: 7,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            width: '80%',
            height: 30,
            marginTop: 15,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          Product Sans Medium
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '400',
            color: '#686868',
            width: '80%',
            height: 50,

            alignSelf: 'center',
            alignItems: 'center',
          }}>
          Tap here to get 50% voucher.
        </Text>
      </View>
    </View>
  );
}

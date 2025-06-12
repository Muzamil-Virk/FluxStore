import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Butons from '../../components/commons/Butons';

export default function wellCome(props: any) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../../assists/images/welcom.png')}
        style={{width: '100%', height: '100%'}}
      />

      <Text
        style={{
          position: 'absolute',
          marginTop: '130%',
          fontSize: 25,
          fontWeight: '700',
          alignSelf: 'center',
          color: 'red',
        }}>
        Welcome to FluxStore!
      </Text>
      <Text
        style={{
          position: 'absolute',
          marginTop: '140%',
          fontSize: 20,
          fontWeight: '400',
          alignSelf: 'center',
          color: 'red',
        }}>
        The home for a fashionista
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('signUp')}
        style={{
          position: 'absolute',
          backgroundColor: '#343434',
          width: '50%',
          height: 45,
          marginTop: '160%',
          justifyContent: 'center',
          alignSelf: 'center',

          borderRadius: 15,
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: '700',
            color: '#FFFFFF',
          }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

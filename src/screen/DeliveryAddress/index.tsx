import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';

export default function DeliveryAddress(props: any) {
  const {navigation} = props;
  const [sellector, setSellector] = useState(1);
  return (
    <View style={{flex: 1}}>
      <HeadersScreen
        title={'Voucher'}
        backIcon={require('../../assists/icons/backIcon.png')}
        onPressBack={() => navigation.goBack()}
      />
      <View
        style={{
          width: '90%',
          height: 110,
          alignSelf: 'center',
          marginTop: '20%',
          borderRadius: 20,
          borderWidth: 1,
          backgroundColor: '#FFFFFF',
          elevation: 30,
          borderColor: '#F4F4F4',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setSellector(1);
            }}>
            <Image
              source={
                sellector == 1
                  ? require('../../assists/icons/radioBlack.png')
                  : require('../../assists/icons/radioButton.png')
              }
              style={{
                width: 16,
                height: 16,
                marginLeft: 20,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assists/icons/officeIcon.png')}
            style={{
              width: 23,
              height: 29,
              resizeMode: 'center',
              marginLeft: '4%',
            }}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontWeight: '400', fontSize: 12}}>SEND TO</Text>
            <Text style={{fontWeight: '400', fontSize: 14}}>My Office</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 14,
                color: '#F80000',
                marginLeft: '50%',
                textDecorationLine: 'underline',
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            color: '#777E90',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          SBI Building, street 3, Software Park
        </Text>
      </View>

      <View
        style={{
          width: '90%',
          height: 110,
          alignSelf: 'center',
          marginTop: '15%',
          borderRadius: 20,
          borderWidth: 1,
          backgroundColor: '#FFFFFF',
          elevation: 30,
          borderColor: '#F4F4F4',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setSellector(2);
            }}>
            <Image
              source={
                sellector == 2
                  ? require('../../assists/icons/radioBlack.png')
                  : require('../../assists/icons/radioButton.png')
              }
              style={{
                width: 16,
                height: 16,
                marginLeft: 20,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <Image
            source={require('../../assists/icons/homeIcon.png')}
            style={{
              width: 23,
              height: 29,
              resizeMode: 'center',
              marginLeft: '4%',
            }}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontWeight: '400', fontSize: 12}}>SEND TO</Text>
            <Text style={{fontWeight: '400', fontSize: 14}}>My Office</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 14,
                color: '#F80000',
                marginLeft: '50%',
                textDecorationLine: 'underline',
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            color: '#777E90',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          SBI Building, street 3, Software Park
        </Text>
      </View>
    </View>
  );
}

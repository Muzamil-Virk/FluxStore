import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import InputBars from '../../components/commons/InputBars';
import HeadersScreen from '../../components/commons/HeadersScreen';
import Butons from '../../components/commons/Butons';


export default function verfyCode(props: any) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <HeadersScreen
        backIcon={require('../../assists/icons/backIcon.png')}
        onPressBack={() => navigation.goBack()}
      />
      <View
        style={{width: '90%', height: 138, alignSelf: 'center', marginTop: 40}}>
        <Text style={{fontSize: 24, fontWeight: '600'}}>Verification code</Text>
        <Text
          style={{
            marginTop: 30,
            fontSize: 14,
            lineHeight: 24,
            fontWeight: '400',
          }}>
          Please enter the verification code we sent to your email address
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          height: 59,
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginTop: 50,
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <TextInput
          style={{
            width: 58,
            height: 58,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#A5A7AC',
          }}></TextInput>

        <TextInput
          style={{
            width: 58,
            height: 58,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#A5A7AC',
          }}></TextInput>

        <TextInput
          style={{
            width: 58,
            height: 58,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#A5A7AC',
          }}></TextInput>

        <TextInput
          style={{
            width: 58,
            height: 58,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#A5A7AC',
          }}></TextInput>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            marginTop: '35%',
            marginLeft: 32,
            fontSize: 14,
            fontWeight: '500',
          }}>
          Resend in 00:10
        </Text>
      </TouchableOpacity>
      <Butons text={'Confirm'}
      onpressNavigation={()=> navigation.navigate('newPassword')}
      />
    </View>
  );
}

import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Butons from '../../components/commons/Butons';
import InputBar from '../../components/commons/InputBars';
import InputBars from '../../components/commons/InputBars';

export default function logIn(props: any) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          marginLeft: 32,
          marginTop: 60,
          lineHeight: 48,
        }}>
        Log into
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          marginLeft: 32,
          lineHeight: 48,
        }}>
        your account
      </Text>
      <InputBars placeholder={'Email address'} />
      <InputBar placeholder={' Password'} />
      <TouchableOpacity
        onPress={() => navigation.navigate('forgotScreen')}
        style={{width: 120, alignSelf: 'flex-end'}}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: 'red',
            marginRight: 15,
            marginTop: 30,
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <Butons
        text={'LOG IN'}
        onpressNavigation={() => navigation.navigate('Drawers')}
      />
      <Text style={{textAlign: 'center', fontSize: 12, marginTop: 30}}>
        or log in with
      </Text>
      <View
        style={{
          width: 166,
          alignSelf: 'center',
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assists/images/appleIcon.png')}
            style={{height: 42, width: 42}}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('../../assists/images/gogleIcon.png')}
            style={{height: 42, width: 42}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assists/images/fbIcon.png')}
            style={{height: 42, width: 42}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '80%',
          height: 40,
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 60,
        }}>
        <Text style={{fontSize: 14, fontWeight: '400'}}>
          Don’t have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              marginLeft: 7,
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              color: 'red',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

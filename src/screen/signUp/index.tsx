import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Butons from '../../components/commons/Butons';
import InputBar from '../../components/commons/InputBars';
import InputBars from '../../components/commons/InputBars';

export default function signUp( props:any) {
  const { navigation}= props 
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
        Create
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
      <InputBars placeholder={'Enter your name'} />
      <InputBars placeholder={'Email address'} />
      <InputBar placeholder={' Password'} />
      <InputBar placeholder={'Confirm password'} />
      <Butons text={'SIGN UP'}
      onpressNavigation={()=> navigation.navigate("logIn")}
      />
      <Text style={{textAlign: 'center', fontSize: 12, marginTop: 30}}>
        or sign up with
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
          marginTop: 30,
        }}>
        <Text style={{fontSize: 14, fontWeight: '400'}}>
          Already have account?
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('logIn')}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              marginLeft: 7,
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              color: 'red',
            }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

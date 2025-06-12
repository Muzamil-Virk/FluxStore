import {View, Text} from 'react-native';
import React from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';
import InputBars from '../../components/commons/InputBars';
import Butons from '../../components/commons/Butons';
import RBsheets from '../RBsheetss';
import RBsheetss from '../RBsheetss';

export default function forgotScreen(props: any) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <HeadersScreen
        backIcon={require('../../assists/icons/backIcon.png')}
        onPressBack={() => navigation.goBack()}
      />
      <View
        style={{width: '90%', height: 138, alignSelf: 'center', marginTop: 40}}>
        <Text style={{fontSize: 24, fontWeight: '600'}}>Forgot password?</Text>
        <Text
          style={{
            marginTop: 30,
            fontSize: 14,
            lineHeight: 24,
            fontWeight: '400',
          }}>
          Enter email associated with your account and we’ll send and email with
          intructions to reset your password
        </Text>
      </View>
      <InputBars placeholder={'enter your email here'} />
      <Butons
        text={'Next'}
        onpressNavigation={() => navigation.navigate('verfyCode')}
      />
      
    </View>
  );
}

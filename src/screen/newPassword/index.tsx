import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';
import InputBars from '../../components/commons/InputBars';
import Butons from '../../components/commons/Butons';
import RBsheets from '../RBsheetss';
import RBsheetss from '../RBsheetss';

export default function newPassword(props: any) {
  const {navigation} = props;

  return (
    <View style={{flex: 1}}>
      <HeadersScreen
        backIcon={require('../../assists/icons/backIcon.png')}
        onPressBack={() => navigation.goBack()}
      />
      <View
        style={{width: '90%', height: 138, alignSelf: 'center', marginTop: 40}}>
        <Text style={{fontSize: 24, fontWeight: '600'}}>
          Create new password
        </Text>
        <Text
          style={{
            marginTop: 30,
            fontSize: 14,
            lineHeight: 24,
            fontWeight: '400',
          }}>
          Your new password must be different from previously used password
        </Text>
      </View>
      <InputBars placeholder={'New Password'} styles={{marginTop: '20%'}} />
      <InputBars placeholder={'Confirm Password'} />
      <Butons
        text={'Confirm'}
        style={{marginTop: '30%'}}
        onpressNavigation={() => navigation.navigate('logIn')}
      />
    </View>
  );
}

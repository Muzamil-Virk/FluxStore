import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';

export default function paymentMethod(props: any) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <HeadersScreen
        backIcon={require('../../assists/icons/backIcon.png')}
        onPressBack={() => navigation.goBack()}
        title={'Payment'}
      />
      <View
        style={{
          width: '90%',
          height: 25,
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginTop: '15%',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 18, fontWeight: '700'}}>Card Management</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddNewCard')}>
          <Text style={{fontSize: 14, color: '#ED0006', fontWeight: '700'}}>
            Add new+
          </Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../../assists/images/viseCard.png')}
        style={{
          width: '90%',
          height: 191,
          alignSelf: 'center',
          marginTop: 30,
          resizeMode: 'contain',  
        }}
      />

      <Text
        style={{
          fontSize: 12,
          fontWeight: '700',
          marginTop: 20,
          marginLeft: 30,
        }}>
        or check out with
      </Text>

      <View
        style={{
          width: '85%',
          height: 34,
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginTop: '20%',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <Image
            style={{width: 49, height: 34}}
            source={require('../../assists/images/PayPal.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 49, height: 34}}
            source={require('../../assists/images/Visa.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 49, height: 34}}
            source={require('../../assists/images/MasterLog.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 49, height: 34}}
            source={require('../../assists/images/Alipay.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{width: 49, height: 34}}
            source={require('../../assists/images/Amex.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

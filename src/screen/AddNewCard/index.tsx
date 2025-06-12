import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import React from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';
import Butons from '../../components/commons/Butons';

export default function AddNewCard(props: any) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <HeadersScreen
          backIcon={require('../../assists/icons/backIcon.png')}
          onPressBack={() => navigation.goBack()}
          title={'Add new card'}
        />
        <Image
          source={require('../../assists/images/masterCard.png')}
          style={{
            width: '90%',
            height: 191,
            alignSelf: 'center',
            borderRadius: 15,
            marginTop: 25,
          }}
        />

        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#7A869A99',
            marginLeft: 32,
            marginTop: 40,
          }}>
          Cardholder Name
        </Text>
        <View
          style={{
            borderRadius: 13,

            width: '90%',
            height: 42,
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: '#FCFCFC',
            marginTop: 9,
          }}>
          <TextInput
            value="Sunie Pham"
            style={{width: '90%', alignSelf: 'center'}}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#7A869A99',
            marginLeft: 32,
            marginTop: 40,
          }}>
          Cardholder Number
        </Text>
        <View
          style={{
            borderRadius: 13,

            width: '90%',
            height: 42,
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: '#FCFCFC',
            marginTop: 9,
          }}>
          <TextInput
            value="5412363272837284"
            style={{width: '90%', alignSelf: 'center'}}
          />
        </View>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#7A869A99',
            marginLeft: 32,
            marginTop: 40,
          }}>
          Cardholder Number
        </Text>
        <View
          style={{
            borderRadius: 13,

            width: '90%',
            height: 42,
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: '#FCFCFC',
            marginTop: 9,
          }}>
          <TextInput
            value="5412363272837284"
            style={{width: '90%', alignSelf: 'center'}}
          />
        </View>

        <View
          style={{
            width: '90%',
            height: 18,
            flexDirection: 'row',
            alignSelf: 'center', justifyContent: 'space-between', marginTop:40
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#7A869A99', 
            }}>
            Expires
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#7A869A99',   marginRight:'37%'
            }}>
            CVV
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            height: 42,
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 9,
          }}>
          <TextInput
            value="5412363272837284"
            style={{
              width: '45%',
              alignSelf: 'center',
              backgroundColor: '#FCFCFC',
              borderRadius: 13,
            }}
          />
          <TextInput
            value="5412363272837284"
            style={{
              width: '45%',
              alignSelf: 'center',
              backgroundColor: '#FCFCFC',
              borderRadius: 13,
            }}
          />
        </View>

        <Butons text={'Add card'} />
      </ScrollView>
    </View>
  );
}

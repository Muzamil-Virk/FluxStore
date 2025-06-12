import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';
import Butons from '../../components/commons/Butons';

export default function Sharefeedback(props: any) {
  const [sellector, setSellector] = useState(1);

  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <HeadersScreen
        backIcon={require('../../assists/icons/backIcon.png')}
        onPressBack={() => navigation.goBack()}
        title={'Share your feedback'}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: '500',
          alignSelf: 'center',
          marginTop: '10%',
        }}>
        What is your opinion of GemStore?
      </Text>
      <View
        style={{
          width: '70%',
          height: 32,
          alignSelf: 'center',
          justifyContent: 'space-between',

          marginTop: 30,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            setSellector(1);
          }}>
          <Image
            source={
              sellector == 1
                ? require('../../assists/icons/ratingStar2.png')
                : require('../../assists/icons/ratingStar1.png')
            }
            style={{width: 35, height: 32, resizeMode: 'center'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSellector(2);
          }}>
          <Image
            source={
              sellector == 2
                ? require('../../assists/icons/ratingStar2.png')
                : require('../../assists/icons/ratingStar1.png')
            }
            style={{width: 35, height: 32, resizeMode: 'center'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSellector(3);
          }}>
          <Image
            source={
              sellector == 3
                ? require('../../assists/icons/ratingStar2.png')
                : require('../../assists/icons/ratingStar1.png')
            }
            style={{width: 35, height: 32, resizeMode: 'center'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSellector(4);
          }}>
          <Image
            source={
              sellector == 4
                ? require('../../assists/icons/ratingStar2.png')
                : require('../../assists/icons/ratingStar1.png')
            }
            style={{width: 35, height: 32, resizeMode: 'center'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSellector(5);
          }}>
          <Image
            source={
              sellector == 5
                ? require('../../assists/icons/ratingStar2.png')
                : require('../../assists/icons/ratingStar1.png')
            }
            style={{width: 35, height: 32, resizeMode: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '90%',
          height: 265,
          backgroundColor: '#FFFFFF',
          elevation: 7,
          alignSelf: 'center',
          borderRadius: 20,
          marginTop: '15%',
        }}>
        <TextInput
          multiline
          placeholderTextColor={'#5A5A5A'}
          placeholder="Would you like to write anything about this product? "
          style={{
            width: '90%',
            height: 220,
            alignSelf: 'center',
            textAlignVertical: 'top',
            marginTop: 8,
            paddingHorizontal: '3%',
          }}
        />

        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            alignSelf: 'flex-end',
            marginTop: 5,
            marginRight: 20,
          }}>
          50 characters
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '45%',
          height: 65,

          justifyContent: 'space-between',
          marginTop: 25,
          marginLeft: 22,
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assists/icons/photIcon.png')}
            style={{width: 69, height: 64, resizeMode: 'contain'}}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('../../assists/icons/photIcon.png')}
            style={{width: 69, height: 64, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>

      <Butons text={'Send feedback'} />
    </View>
  );
}

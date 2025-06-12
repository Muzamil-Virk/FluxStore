import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';
import Butons from '../../components/commons/Butons';

export default function profileSetting(props: any) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <HeadersScreen
        backIcon={require('../../assists/icons/backIcon.png')}
        title={'Profile Setting'}
        onPressBack={() => navigation.goBack()}
      />
      <View
        style={{
          width: 103,
          height: 108,
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: '15%',
        }}>
        <Image
          source={require('../../assists/images/profileImage.png')}
          style={{height: 108, width: 103, borderRadius: 50}}
        />
        <TouchableOpacity style={{position: 'absolute'}}>
          <Image
            source={require('../../assists/icons/camera.png')}
            style={{
              width: 32,
              height: 32,
              marginTop: 80,
              marginLeft: 60,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '25%',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#A6ABC4',
            width: '52%',
          }}>
          First Name
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#A6ABC4',
            width: '40%',
          }}>
          Last Name
        </Text>
      </View>

      <View
        style={{
          width: '90%',
          height: 47,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <TextInput
          value="Sunie"
          style={{
            width: '52%',
            height: 47,
            borderBottomWidth: 1,
            borderBottomColor: '#D6D6D6',
          }}
        />
        <TextInput
          value="Pham"
          style={{
            width: '40%',
            height: 47,
            borderBottomWidth: 1,
            borderBottomColor: '#D6D6D6',
          }}></TextInput>
      </View>

      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#A6ABC4',
            alignSelf: 'flex-start',
            marginLeft: 18,
          }}>
          Email
        </Text>
        <TextInput
          value="sunieux@gmail.com"
          style={{
            width: '90%',
            height: 47,
            alignSelf: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#D6D6D6',
          }}
        />
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#A6ABC4',
            width: '30%',
          }}>
          Gender
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: '#A6ABC4',
            width: '60%',
          }}>
          Phone
        </Text>
      </View>

      <View
        style={{
          width: '90%',
          height: 47,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <TextInput
          value="Female"
          style={{
            width: '30%',
            height: 47,
            borderBottomWidth: 1,
            borderBottomColor: '#D6D6D6',
          }}
        />
        <TextInput
          value="(+1) 23456789"
          style={{
            width: '60%',
            height: 47,
            borderBottomWidth: 1,
            borderBottomColor: '#D6D6D6',
          }}></TextInput>
      </View>
      <Butons text={'Save change'} />
    </View>
  );
}

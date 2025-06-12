import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';
import FeatureList from '../../components/core/FeatureList';
import RecommendedList from '../../components/core/RecommendedList';
import Swiper from 'react-native-swiper';

export default function home(props: any) {
  const [color, setcolor] = useState(1);
  const {navigation} = props;

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <HeadersScreen
          title={'Gemstore'}
          notifyIcon={require('../../assists/icons/notify.png')}
          backIcon={require('../../assists/icons/menu.png')}
          onPressBack={() => navigation.openDrawer()}
          onPressnotify={() => navigation.navigate('notifyScreen')}
        />

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 60,
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: 50,
          }}>
          <TouchableOpacity
            onPress={() => {
              setcolor(1);
            }}
            style={{
              width: 36,
              height: 36,
              borderRadius: 50,
              backgroundColor: color == 1 ? '#3A2C27' : 'white',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 17,
                height: 16,
                alignSelf: 'center',
                alignItems: 'center',
                resizeMode: 'contain',
                tintColor: '#9D9D9D',
              }}
              source={require('../../assists/icons/Vector1.png')}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setcolor(2);
            }}
            style={{
              width: 36,
              height: 36,
              borderRadius: 50,
              backgroundColor: color == 2 ? '#3A2C27' : 'white',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 17,
                height: 16,
                alignItems: 'center',
                justifyContent: 'center',
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={require('../../assists/icons/Vector2.png')}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setcolor(3);
            }}
            style={{
              width: 36,
              height: 36,
              borderRadius: 50,
              backgroundColor: color == 3 ? '#3A2C27' : 'white',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 17,
                height: 16,
                resizeMode: 'contain',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              source={require('../../assists/icons/Vector3.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setcolor(4);
            }}
            style={{
              width: 36,
              height: 36,
              borderRadius: 50,
              backgroundColor: color == 4 ? '#3A2C27' : 'white',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 17, height: 16, resizeMode: 'contain'}}
              source={require('../../assists/icons/Vector4.png')}></Image>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            justifyContent: 'space-between',
            alignSelf: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Woman</Text>
          <Text>Man</Text>
          <Text>Accessories</Text>
          <Text>Beauty</Text>
        </View>

        <Image
          style={{
            width: '90%',
            height: 168,
            marginTop: 30,
            alignSelf: 'center',
            borderRadius: 15,
          }}
          source={require('../../assists/images/slider1.png')}
        />

        <View
          style={{
            width: '90%',
            height: 42,
            marginTop: 30,
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>
            Feature Products
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('FoundResults')}>
            <Text style={{fontSize: 13, fontWeight: '400', color: '#9B9B9B'}}>
              Show all
            </Text>
          </TouchableOpacity>
        </View>

        <FeatureList />
        <View
          style={{
            width: '100%',
            height: 158,
            flexDirection: 'row',
            marginTop: 36,
            alignSelf: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#F8F8FA',
          }}>
          <View style={{marginTop: 30, width: 165, height: 91, marginLeft: 32}}>
            <Text style={{fontSize: 12, color: '#777E90'}}>NEW COLLECTION</Text>
            <Text style={{fontSize: 20, marginTop: 30, color: '#777E90'}}>
              HANG OUT & PARTY
            </Text>
          </View>
          <Image
            style={{width: 119, height: 158, marginRight: 15}}
            source={require('../../assists/images/glassesGirl.png')}
          />
        </View>

        <View
          style={{
            width: '90%',
            height: 42,
            marginTop: 30,
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Recommended</Text>
          <TouchableOpacity>
            <Text style={{fontSize: 13, fontWeight: '400', color: '#9B9B9B'}}>
              Show all
            </Text>
          </TouchableOpacity>
        </View>
        <RecommendedList />
      </ScrollView>
    </View>
  );
}

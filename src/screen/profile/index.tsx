import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import ProfileFlat from '../../components/commons/ProfileFlat';

export default function profile(props: any) {
  const {navigation} = props;

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            width: '90%',
            height: 70,
            alignSelf: 'center',
            marginTop: '17%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assists/images/profileImage.png')}
              style={{width: 68, height: 68, borderRadius: 50}}
            />
            <View>
              <Text
                style={{fontSize: 16, fontWeight: '700', marginLeft: '20%'}}>
                Sunie Pham
              </Text>
              <Text
                style={{fontSize: 12, fontWeight: '400', marginLeft: '20%'}}>
                sunieux@gmail.com
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('profileSetting')}>
            <Image
              source={require('../../assists/icons/Setting.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: '15%',
            backgroundColor: '#FFFFFF',
            borderRadius: 15,
            width: '90%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#F2F2F2',
            elevation: 20,
          }}>
          <ProfileFlat
            onpress={() => navigation.navigate('DeliveryAddress')}
            title={'Address'}
            images={require('../../assists/icons/Location.png')}
          />
          <ProfileFlat
            onpress={() => navigation.navigate('paymentMethod')}
            title={'Payment method'}
            images={require('../../assists/icons/Wallet.png')}
          />
          <ProfileFlat
            onpress={() => navigation.navigate('vouchers')}
            title={'Voucher'}
            images={require('../../assists/icons/Ticket.png')}
          />
          <ProfileFlat
            title={'My Wishlist'}
            onpress={() => navigation.navigate('wishList')}
            images={require('../../assists/icons/Favorite.png')}
          />
          <ProfileFlat onpress={() => navigation.navigate('Sharefeedback')}
            title={'Rate this app'}  
            images={require('../../assists/icons/Star.png')}
          />
          <ProfileFlat
            title={'Log out'}
            images={require('../../assists/icons/Logout.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

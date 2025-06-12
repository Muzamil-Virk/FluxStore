import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

interface propsType {
  title?: any;
  images?: any;
  onpress?: () => void;
}

export default function ProfileFlat(props: propsType) {
  const {title, images, onpress} = props;

  return (
    <TouchableOpacity onPress={onpress}>
      <View
        style={{
          width: '90%',
          height: 48,
          borderBottomWidth: 1,
          alignSelf: 'center',
          borderBottomColor: '#F3F3F6',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '9%',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 21, height: 21, resizeMode: 'contain'}}
            source={images}
          />
          <Text style={{fontSize: 14, fontWeight: '700', marginLeft: '10%'}}>
            {title}
          </Text>
        </View>

        <Image
          style={{width: 20, height: 20, resizeMode: 'contain'}}
          source={require('../../../assists/icons/ArrowRight.png')}
        />
      </View>
    </TouchableOpacity>
  );
}

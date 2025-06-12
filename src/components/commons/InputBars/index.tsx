import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';

interface PropType {
  placeholder?: any;
  styles?: any;
  image?: any;
}

export default function InputBars(props: PropType) {
  const {placeholder, styles, image} = props;
  return (
    <View
      style={[
        {
          width: '90%',
          alignSelf: 'center',
          marginTop: 30,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderColor: '#D6D6D6',
        },
        styles,
      ]}>
      <TextInput placeholder={placeholder}>
        
      </TextInput>
    </View>
  );
}

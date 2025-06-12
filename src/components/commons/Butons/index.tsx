import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface PropType {
  text?: any;
  onpressNavigation?: () => void;
  style?: any;
}

export default function Butons(props: PropType) {
  const {text, onpressNavigation, style} = props;
  return (
    <View>
      <TouchableOpacity
        onPress={onpressNavigation}
        style={[
          {
            backgroundColor: '#2D201C',
            width: '40%',
            height: 45,
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 50,
            marginTop: 30,
          },
          style,
        ]}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: '700',
            color: '#FFFFFF',
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

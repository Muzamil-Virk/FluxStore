import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

interface proptype {
  title?: any;
  notifyIcon?: any;
  backIcon?: any;
  onPressBack?: () => void;
  onPressnotify ?:()=> void,
}

export default function HeadersScreen(props: proptype) {
  const {title, notifyIcon, backIcon,onPressBack,onPressnotify} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        width: '90%',
        height: 40,
        alignSelf: 'center',
      }}>
      <TouchableOpacity  onPress={onPressBack}
        style={{
          height: 30,
          width: 30,
          borderRadius: 50,
          backgroundColor: '#FFFFFF',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 15,
          borderWidth: 1,
          borderColor: '#FFFFFF', 
        }}>
        <Image
          source={backIcon}
          style={{width: 18, height: 17, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
      <Text style={{fontSize: 20, fontWeight: '700',alignSelf:'center'}}> {title} </Text>

      <TouchableOpacity onPress={onPressnotify} >
        <Image style={{width: 26, height: 26}} source={notifyIcon} />
      </TouchableOpacity>
    </View>
  );
}

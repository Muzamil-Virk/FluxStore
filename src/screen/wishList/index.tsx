import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';
import AllitemsLists from '../../components/core/AllitemsLists';
import Boardslists from '../../components/core/Boardslists';


export default function wishList(props: any) {
  const [color, setcolor] = useState(1);

  return (
    <View style={{flex: 1}}>
      <HeadersScreen
        title={'My WhishList'}
        notifyIcon={require('../../assists/icons/notify.png')}
        backIcon={require('../../assists/icons/menu.png')}
      />
      <View
        style={{
          width: '80%',
          height: 36,
          alignSelf: 'center',
          marginTop: '8%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 1,
        }}>
        <TouchableOpacity
          onPress={() => {
            setcolor(1);
          }}
          style={{
            backgroundColor: color == 1 ? '#000000' : '#FFFFFF',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: color == 1 ? 'white' : 'black',
            }}>
            All items
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setcolor(2);
          }}
          style={{
            backgroundColor: color == 2 ? '#000000' : '#FFFFFF',
            width: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: color == 2 ? 'white' : 'black',
            }}>
            Boards
          </Text>
        </TouchableOpacity>
      </View>
    {  color == 1 ? <AllitemsLists/>  :<Boardslists/>}
    </View>

  );
}

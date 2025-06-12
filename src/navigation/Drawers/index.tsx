import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import home from '../../screen/home';
import profile from '../../screen/profile';
import {bottomTabs} from '../bottomTabs';
import profileSetting from '../../screen/profileSetting';
import Cart from '../../screen/Cart';
import vouchers from '../../screen/vouchers';
import wishList from '../../screen/wishList';

const CustomDrawer = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'skyblue'}}>
        <View
          style={{
            padding: 20,
            width: '65%',
            flexDirection: 'row',
            
            justifyContent: 'space-around',
          }}>
            
          <Image
            source={require('../../assists/images/profileImage.png')}
            style={{width: 52, height: 52, borderRadius: 40, marginBottom: 10}}
          /> 
          <View style={{marginLeft:10,}}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '700'}}>
              Sunie Pham
            </Text>
            <Text style={{color: 'black', fontSize: 12, fontWeight: '500'}}>
              sunieux@gmail.com
            </Text>
          </View>
        </View>

        <View style={{flex: 1 , paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 16, marginLeft: 10, color: 'red'}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Drawer = createDrawerNavigator();

export default function Drawers() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {backgroundColor: '#6200ea'},
        headerTintColor: '#fff',
        drawerActiveBackgroundColor: '#FFFFFF',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {fontSize: 16},
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        component={bottomTabs}
        options={{
          drawerIcon: ({color}) => (
            <Image
              source={require('../../assists/icons/Home.png')}
              style={{width: 20, height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={profile}
        options={{
          drawerIcon: ({color}) => (
            <Image
              source={require('../../assists/icons/Profile.png')}
              style={{width: 20, height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />

      
<Drawer.Screen
        name="ProfileSetting"
        component={profileSetting}
        options={{
          drawerIcon: ({color}) => (
            <Image
              source={require('../../assists/icons/Profile.png')}
              style={{width: 20, height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />

<Drawer.Screen
        name="WishList"
        component={wishList}
        options={{
          drawerIcon: ({color}) => (
            <Image
              source={require('../../assists/icons/Favorite.png')}
              style={{width: 20, height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />


<Drawer.Screen
        name="Vouchers"
        component={vouchers}
        options={{
          drawerIcon: ({color}) => (
            <Image
              source={require('../../assists/icons/Ticket.png')}
              style={{width: 20, height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />



<Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          drawerIcon: ({color}) => (
            <Image
              source={require('../../assists/icons/cart.png')}
              style={{width: 20, height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />

      
    </Drawer.Navigator>
  );
}

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, ImageBase} from 'react-native';
import home from '../../screen/home';
import search from '../../screen/search';
import Cart from '../../screen/Cart';
import profile from '../../screen/profile';
import {useState} from 'react';

const Tab = createBottomTabNavigator();

export function bottomTabs() {
  const [colorss, setcolor] = useState(1);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Hides tab labels
      }}>
      <Tab.Screen
        name="home"
        component={home}
        options={{
          tabBarIcon: () => (
            <Image
              onProgress={() => {
                setcolor(1);
              }}
              source={require('../../assists/icons/Home.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: colorss == 1 ? '#000000' : '#BEBFC4',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={search}
        options={{
          tabBarIcon: () => (
            <Image
              onProgress={() => {
                setcolor(2);
              }}
              source={require('../../assists/icons/search.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: colorss == 2 ? '#BEBFC4' : '#000000',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: () => (
            <Image
              onProgress={() => {
                setcolor(3);
              }}
              source={require('../../assists/icons/cart.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: colorss == 3 ? '#BEBFC4' : '#000000',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={profile}
        options={{ 
          tabBarIcon: () => (  
            <Image  onProgress={() => {
              setcolor(4);
            }}
             
              source={require('../../assists/icons/Profile.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: colorss == 4 ? '#BEBFC4' : '#000000',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

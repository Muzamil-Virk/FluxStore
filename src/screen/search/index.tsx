import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import HeadersScreen from '../../components/commons/HeadersScreen';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

export default function search(  props:any) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <HeadersScreen
          title={'Gemstore'}
          notifyIcon={require('../../assists/icons/notify.png')}
          backIcon={require('../../assists/icons/menu.png')}
          onPressnotify={() => navigation.navigate('notifyScreen')}
          onPressBack={() => navigation.openDrawer()}
        />
        <View
          style={{
            width: '90%',
            height: 49,
            alignSelf: 'center',

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: '80%',
              height: 46,
              backgroundColor: '#FAFAFA',
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Image
              style={{
                width: 17,
                height: 18,
                resizeMode: 'contain',
                tintColor: '#777E90',
                marginLeft: 15,
              }}
              source={require('../../assists/icons/search.png')}
            />
            <TextInput
              style={{width: '80%', marginLeft: 10}}
              placeholder="Search"></TextInput>
          </View>
          <TouchableOpacity
            style={{
              width: 52,
              height: 49,
            }}>
            <Image
              style={{
                width: 51,
                height: 50,
                resizeMode: 'contain',
                borderRadius: 17,
              }}
              source={require('../../assists/icons/filterIcon.png')}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={{
            width: '90%',
            height: 126,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: 30,
          }}
          source={require('../../assists/images/searchBaner.png')}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: '85%',
              height: 51,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
            }}>
            <View>
              <Text
                style={{fontSize: 14, fontWeight: '400', alignItems: 'center'}}>
                Jacket
              </Text>
            </View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  alignItems: 'center',
                  color: '#A3A5AD',
                  marginRight: 5,
                }}>
                128 Items
              </Text>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assists/icons/ArrowRight.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: '85%',
              height: 51,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
            }}>
            <View>
              <Text
                style={{fontSize: 14, fontWeight: '400', alignItems: 'center'}}>
                Skirts
              </Text>
            </View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  alignItems: 'center',
                  color: '#A3A5AD',
                  marginRight: 5,
                }}>
                40 Items
              </Text>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assists/icons/ArrowRight.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: '85%',
              height: 51,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
            }}>
            <View>
              <Text
                style={{fontSize: 14, fontWeight: '400', alignItems: 'center'}}>
                Dresses
              </Text>
            </View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  alignItems: 'center',
                  color: '#A3A5AD',
                  marginRight: 5,
                }}>
                36 Items
              </Text>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assists/icons/ArrowRight.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: '85%',
              height: 51,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
              marginLeft: 25,
            }}>
            <View>
              <Text
                style={{fontSize: 14, fontWeight: '400', alignItems: 'center'}}>
                Sweaters
              </Text>
            </View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  alignItems: 'center',
                  color: '#A3A5AD',
                  marginRight: 5,
                }}>
                14 Items
              </Text>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assists/icons/ArrowRight.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: '85%',
              height: 51,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
              marginLeft: 25,
            }}>
            <View>
              <Text
                style={{fontSize: 14, fontWeight: '400', alignItems: 'center'}}>
                Jeans
              </Text>
            </View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  alignItems: 'center',
                  color: '#A3A5AD',
                  marginRight: 5,
                }}>
                14 Items
              </Text>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assists/icons/ArrowRight.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: '85%',
              height: 51,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
            }}>
            <View>
              <Text
                style={{fontSize: 14, fontWeight: '400', alignItems: 'center'}}>
                T-Shirts
              </Text>
            </View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  alignItems: 'center',
                  color: '#A3A5AD',
                  marginRight: 5,
                }}>
                12 Items
              </Text>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assists/icons/ArrowRight.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <View
            style={{
              width: '85%',
              height: 51,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
            }}>
            <View>
              <Text
                style={{fontSize: 14, fontWeight: '400', alignItems: 'center'}}>
                Pants
              </Text>
            </View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  alignItems: 'center',
                  color: '#A3A5AD',
                  marginRight: 5,
                }}>
                9 Items
              </Text>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assists/icons/ArrowRight.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Image
          style={{
            width: '90%',
            height: 126,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: 40,
          }}
          source={require('../../assists/images/bagBaner.png')}
        />
        <Image
          style={{
            width: '90%',
            height: 126,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: 30,
          }}
          source={require('../../assists/images/shoesBaner.png')}
        />
        <Image
          style={{
            width: '90%',
            height: 126,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginTop: 30,  marginBottom:30
          }}
          source={require('../../assists/images/coatBaner.png')}
        />
      </ScrollView>
    </View>
  );
}

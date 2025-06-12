import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import wellCome from '../../screen/wellCome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import signUp from '../../screen/signUp';
import logIn from '../../screen/logIn';
import forgotScreen from '../../screen/forgotScreen';
import verfyCode from '../../screen/verfyCode';
import newPassword from '../../screen/newPassword';
import RBsheetss from '../../screen/RBsheetss';
import { bottomTabs } from '../bottomTabs';
import wishList from '../../screen/wishList';
import profileSetting from '../../screen/profileSetting';
import paymentMethod from '../../screen/paymentMethod';
import AddNewCard from '../../screen/AddNewCard';
import vouchers from '../../screen/vouchers';
import DeliveryAddress from '../../screen/DeliveryAddress';
import Sharefeedback from '../../screen/Sharefeedback';
import Drawers from '../Drawers';
import FoundResults from '../../components/core/FoundResults';
import notifyScreen from '../../screen/notifyScreen';

const Stack = createNativeStackNavigator();
export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="wellCome" component={wellCome} />
        <Stack.Screen name="signUp" component={signUp} />
        <Stack.Screen name="logIn" component={logIn} />
        <Stack.Screen name="forgotScreen" component={forgotScreen} />
        <Stack.Screen name="verfyCode" component={verfyCode} />
        <Stack.Screen name="newPassword" component={newPassword} />
        <Stack.Screen name="RBsheetss" component={RBsheetss} />
        <Stack.Screen name="Drawers" component={Drawers} />

        <Stack.Screen name="wishList" component={wishList} />
        <Stack.Screen name="profileSetting" component={profileSetting} />
        <Stack.Screen name="paymentMethod" component={paymentMethod} />
        <Stack.Screen name="AddNewCard" component={AddNewCard} />
        <Stack.Screen name="vouchers" component={vouchers} />
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />
        <Stack.Screen name="Sharefeedback" component={Sharefeedback} />
        <Stack.Screen name="FoundResults" component={FoundResults} />
        <Stack.Screen name="notifyScreen" component={notifyScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

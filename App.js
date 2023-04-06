import * as React from 'react';
import { useEffect, useState, useCallback} from 'react'
import { View, Text, Button, StyleSheet} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
   createMaterialTopTabNavigator 
} from '@react-navigation/material-top-tabs';

import SignupScreen from './screen/SignupPage';
import LoginScreen from './screen/LoginPage';
import Kloce from './screen/Kloce';
import Zegar from './screen/Zegar';
import ProfilePage from './screen/ProfilePage'
import { createDrawerNavigator } from '@react-navigation/drawer';

//const Tab = createMaterialTopTabNavigator()
const Tab = createDrawerNavigator()

function MyTabNavigator() {

  const [data, setData] = useState('')
  const [switchState, setSwitchState] = useState(false)
  const LoginType = [["Login",LoginScreen],["Signup",SignupScreen],["Profile",ProfilePage]]

  return (
    <Tab.Navigator useLegacyImplementation>
      <Tab.Screen name= "Zegar" component={Zegar} />
      <Tab.Screen name={LoginType[Number(switchState)][0]} component={LoginType[Number(switchState)][1]} initialParams={
          {
            'switchState': switchState,
            'setSwitchState': setSwitchState,
            'setProfileData': setData,
            'userData': data
        }
        }
      />
      <Tab.Screen name="Kloce" component={Kloce} />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabNavigator />
    </NavigationContainer>
  );
}

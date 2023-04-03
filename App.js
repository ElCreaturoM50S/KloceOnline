import * as React from 'react';
import { useEffect, useState, useCallback} from 'react'
import { View, Text, Button, StyleSheet} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
   createMaterialTopTabNavigator 
} from '@react-navigation/material-top-tabs';

import LoginScreen from './screen/LoginPage';
import Kloce from './screen/Kloce';
import Zegar from './screen/Zegar';

const Tab = createMaterialTopTabNavigator()

function MyTabNavigator() {

  const [data, setData] = useState('')

  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Kloce" component={Kloce} />
      <Tab.Screen name= "Zegar" component={Zegar} />
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

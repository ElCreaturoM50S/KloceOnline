import * as React from 'react';
import { useEffect, useState, useCallback} from 'react'
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
   createMaterialTopTabNavigator 
} from '@react-navigation/material-top-tabs';


function Login() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <form>
        <>
          <label>Login</label>
          <input type="text" placeholder="Login"/>
        </>
        <br/>
        <>
          <label>Password</label>
          <input type="text" placeholder="Password"/>
        </> 
        <br/>
        <>
          <label>Nickname</label>
          <input type="text" placeholder="Password"/>
        </> 
        <br/> 
        <>
          <label>Email</label>
          <input type="text" placeholder="Password"/>
        </>  
      </form>
    </View>
  );
}

function Kloce() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function Zegar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ratio</Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator()

function MyTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Kloce" component={Kloce} />
      <Tab.Screen name= "Zegar" component={Zegar} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabNavigator />
    </NavigationContainer>
  )
}

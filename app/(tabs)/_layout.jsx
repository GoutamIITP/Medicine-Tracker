import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { useRouter } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from './../../config/FirebaseConfig';
import { getLocalStorage } from '../../service/Storage';
import { replace } from 'expo-router';
import { use } from 'react';
// import { use } from 'react';

export default function TabLayout() {
  const router = useRouter();
  useEffect(() =>{
    GetUserDetail();
  },[]);
  const GetUserDetail=async()=>{
    const userInfo=await getLocalStorage('userDetail');
    if (!userInfo) {
      router.replace('login');

    }
  }


  return (
    <Tabs ScreenOptions={{
        headerShown: false
    }}>
        <Tabs.Screen name='index'
        options={{
          tabBarLabel:'Home',
          tabBarIcon:({color,size})=>(
            <FontAwesome5 name="home" size={size} color={color} />
          )
        }}/>
        <Tabs.Screen name='AddNew'
        options={{
          tabBarLabel:'Add New',
          tabBarIcon:({color,size})=>(
            <FontAwesome5 name="plus-circle" size={size} color={color} />
          )
        }}/>        
        <Tabs.Screen name='Profile'
        options={{
          tabBarLabel:'Profile',
          tabBarIcon:({color,size})=>(
            <FontAwesome5 name="user-alt" size={size} color={color} />
          )
        }}/>
    </Tabs>
  );
}
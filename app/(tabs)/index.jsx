import { View, Text, Button } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';
import { signOut } from 'firebase/auth'; // Import signOut
import {auth} from './../../config/FirebaseConfig';
import Header from '../../components/Header';
import EmptyState from '../../components/EmptyState';

export default function HomeScreen() {
 
  return (
    <View style={{
      padding: 25,
      backgroundColor: 'white',
      heinght: '100%',
      width: '100%'
    }}>
      <Header/>

      <EmptyState/>
 
    </View>
  );
}
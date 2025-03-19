import { View, Text, Image } from 'react-native';
import React, {useEffect, useState } from 'react';
// import React, { useEffect } from 'react';
import { getLocalStorage } from '../service/Storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constant/Colors';
// import { getLocalStorage } from '../service/Storage';

export default function Header() {
    const [user, setUser]=useState('');
    useEffect(()=>{
        GetUserDetail();
    },[]);
    const GetUserDetail=async()=>{
        const userInfo= await getLocalStorage('userDetail');
        console.log(userInfo);
        setUser(userInfo);
    }

    return (
        <View style={{
            marginTop: 20,
            }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
        

            }}>
                <Image source={require('./../assets/images/smiley.png')}
                style={{
                    width:45,
                    height:45
                }}/>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold'
                }}>Hello {user?.displayName} 👋</Text>
                <View>
                    <Ionicons name="settings" size={35} color={Colors.DARK_GRAY} />
                </View>

            </View>

        </View>
    )
}
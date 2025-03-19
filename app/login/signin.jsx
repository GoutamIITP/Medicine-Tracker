import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../constant/Colors';

export default function Sign() {
    return (
        <View style={{
            padding: 35
        }}>
            <Text style={styles.textHeader}>Let's sign You In</Text>
            <Text style={styles.subText}>Welcome Back</Text>
            <Text style={styles.subText}>You've been missed</Text>
        </View>
    );  
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 25,
        fontWeight: 'bold'
        
    },
    subText: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color:Colors.GRAY
    }
})
 
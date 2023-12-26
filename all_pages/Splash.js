
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ActivityIndicator } from 'react-native-paper';
const Splash = () => {



    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={"#ffffff"} ></StatusBar>
            <ActivityIndicator color='#25a86e'></ActivityIndicator>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    logo: {
        height: 80,
        width: "40%"
    },
    text: {
        fontSize: 30,
        color: '#fff'
    }
});

export default Splash;
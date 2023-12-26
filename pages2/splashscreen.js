
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainScreen');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Image
        resizeMode="contain"
        style={styles.logo} source={require("../assets/logo.png")} /> */}
      <Text style={styles.text}>Cipher </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgb(2 150 160)'
  },
  logo: {
    height:80,
    width: "40%"
  },
  text: {
    fontSize: 30,
    color: '#fff'
  }
});

export default SplashScreen;
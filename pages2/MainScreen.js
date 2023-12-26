import React from 'react';
import { View, Button, TouchableOpacity, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  const goToCaesarScreen = () => {
    navigation.navigate('CeaserCipher');
  };

  const goToVigenereScreen = () => {
    navigation.navigate('ViginereCipher');
  };

  const goToAffineScreen = () => {
    navigation.navigate('AffineCipher');
  };

  return (
    <>

      <View style={styles.container}>
        <View style={styles.topview}>
          <Text style={styles.headline}>Cryptography types</Text>
        </View>
        <Text style={styles.firstphase}>Select one type:- </Text>
        <TouchableOpacity onPress={goToCaesarScreen} style={styles.rectangle}  >
          <View style={styles.dot}></View>
          <Text style={styles.innertext}>Ceaser Cipher</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToVigenereScreen} style={styles.rectangle}  >
          <View style={styles.dot}></View>
          <Text style={styles.innertext}>Vigenere Cipher</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToAffineScreen} style={styles.rectangle}  >
          <View style={styles.dot}></View>
          <Text style={styles.innertext}>Affine Cipher</Text>
        </TouchableOpacity>


      </View>
    </>

  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f0f0f0"
  },
  rectangle: {
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    paddingHorizontal:15
  },
  topview: {
    backgroundColor: 'rgb(2 150 160)',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headline: {
    color: '#fff',
    fontFamily: "Ionicons",
    fontSize: 17,
    fontWeight: 'bold'
  },
  firstphase: {
    color: 'rgb(2 150 150)',
    fontFamily: "Feather",
    fontSize: 15,
    padding: 20,
    alignSelf: 'flex-start'
  },
  dot: {
    backgroundColor: 'rgb(2 150 160)',
    width: 15,
    height: 15,
    borderRadius: 7.5,
  },
  innertext: {
    color: '#000',
    fontFamily: "Ionicons",
    fontSize: 12,
    marginLeft: 10,
    padding:2
   
  }
});
export default MainScreen;

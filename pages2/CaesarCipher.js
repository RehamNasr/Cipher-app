import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { style } from '../android/app/src/consts/constant';
const App = ({ navigation }) => {
  const [textValue, setTextValue] = useState('');
  const [key, setKey] = useState("");
  const [Message, setMessage] = useState("")

  function isUpperCase(text) {
    return text === text.toUpperCase();
  }
  function isLowerCase(text) {
    return text === text.toLowerCase();
  }

  const [cipher_text, setciphertext] = useState("")
  function getkey(key) {
    let acsii = key.charCodeAt(0)
    if ((acsii >= 65 && acsii <= 90) || (acsii >= 97 && acsii <= 122)) {
      if (isUpperCase(key)) {
        key = key.charCodeAt(0) - 65
      } else {
        key = key.charCodeAt(0) - 97
      }
    }
    return key
  }

  const encryptCaesar = (plain_text, key) => {
    key = getkey(key)*1;
    let cipher = ""
    for (var i = 0; i < plain_text.length; i++) {
      letter = String.fromCharCode(plain_text[i].charCodeAt(0) + key);
      cipher += letter;
    }
    setMessage("cipher text is " + cipher)
    // setTextValue("")
    // setKey("")
  };

  const decryptCaesar = (cipher_text, key) => {
    let plain = ""
    key = getkey(key) * 1;

    for (var i = 0; i < cipher_text.length; i++) {
      letter = String.fromCharCode(cipher_text[i].charCodeAt(0) - key);
      plain += letter;
    }
   
    setMessage("plain text is " + plain)
    // setTextValue("")
    // setKey("")
  };

  return (

    <View>
      <View style={Styles.topview}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            // عشان ارجع للى قبلها مش لازم اباصي اسم الصفحه
          }}>
          <MaterialIcons name="keyboard-arrow-left" size={20} color="#fff" />

        </TouchableOpacity>
        <Text style={Styles.headline}>Ceaser Cipher</Text>
        <TouchableOpacity
          disabled={false}
          onPress={() => {
            navigation.goBack();
            // عشان ارجع للى قبلها مش لازم اباصي اسم الصفحه
          }}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color='rgb(2 150 160)' />

        </TouchableOpacity>
      </View>
      <TextInput style={Styles.input}
        placeholder="Enter plain text"
        value={textValue}
        placeholderTextColor={"#ccc"}

        onChangeText={text => setTextValue(text)}
      />
      <TextInput style={Styles.input}
        placeholder="Enter key"
        value={key}
        placeholderTextColor={"#ccc"}
        onChangeText={text => setKey(text)}
      />
      <TouchableOpacity onPress={() => {
        encryptCaesar(textValue, key)

      }} style={Styles.tab}>
        <Text style={Styles.innertext}>Encrypt</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        decryptCaesar(textValue, key)
      }} style={Styles.tab}>
        <Text style={Styles.innertext}>Decrypt</Text>
      </TouchableOpacity>
      {Message == "" ? null : <Text style={Styles.message}>{Message}</Text>}
    </View>
  );
};
const Styles = StyleSheet.create({
  topview: {
    backgroundColor: 'rgb(2 150 160)',
    width: '100%',
    height: 70,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  headline: {
    color: '#fff',
    fontFamily: "Ionicons",
    fontSize: 17,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 0.2
    , borderRadius: 2,
    margin: 20,
    marginBottom: 0,
    color: "#000"

  }, innertext: {
    color: '#fff',
    fontFamily: "Ionicons",
    fontSize: 15,
    padding: 3
  }, tab: {
    backgroundColor: 'rgb(2 150 160)',
    width: "90%",
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 20,
    marginBottom: 0
  }, message: {
    fontSize: 17,
    color: "#000",
    alignSelf: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 50,
    fontWeight: "bold",
    fontFamily: "Ionicons",

  }
})
export default App;

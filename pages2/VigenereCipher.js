import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ViginereCipher = ({ navigation }) => {
  const [textValue, setTextValue] = useState('');
  const [key, setKey] = useState('');
  const [Message, setMessage] = useState("")

  function isUpperCase(text) {
    return text === text.toUpperCase();
  }
  function isLowerCase(text) {
    return text === text.toLowerCase();
  }

  const [cipher_text, setciphertext] = useState("")
  function generatekey(text, key) {
    var generate_key = key;
    lenkey = key.length; 
    while (lenkey < text.length) {
      generate_key += key;
      lenkey = generate_key.length;
    }
    return generate_key;
  }
  const encryptCaesar = (plain_text, key) => {
    gene_key = generatekey(plain_text, key)
    let cipher = ""
    for (var i = 0; i < plain_text.length; i++) {
      // h: 104   i: 105   p: 112
      // e: 101   t: 116   x: 120
      // l: 108   e: 101   p: 112
      // l: 108   a: 97    l: 108
      // o: 111   m: 109   a: 97
      if(plain_text[i]===" "){
        arr=gene_key.split("")
        arr.splice(i,0," ")
        gene_key= arr.join("")
        cipher+=" "
        continue
      }
      
      if (isUpperCase(plain_text[i])) {
        value=((plain_text[i].charCodeAt(0)-65) +(gene_key[i].charCodeAt(0)-65))%26;
        value=value+65;
        letter = String.fromCharCode(value);
      } else {
        value=((plain_text[i].charCodeAt(0)-97) +(gene_key[i].charCodeAt(0)-97))%26;
        value=value+97
        letter = String.fromCharCode(value);
      }

      cipher += letter;
    }
    setMessage("cipher text is " + cipher)
    // setTextValue("")
    // setKey("")
  };
  // pxplabairq
  const decryptCaesar = (cipher_text, key) => {
    gene_key = generatekey(cipher_text, key)
    let plain = ""
    for (var i = 0; i < cipher_text.length; i++) {
      if(cipher_text[i]===" "){
        arr=gene_key.split("")
        arr.splice(i,0," ")
        gene_key= arr.join("")
        plain+=" "
        continue
      }
      if (isUpperCase(cipher_text[i])) {
        value=((cipher_text[i].charCodeAt(0)-65) -(gene_key[i].charCodeAt(0)-65))%26;
        while(value<0){
          value+=26
        }
        value=value+65;
        letter = String.fromCharCode(value);
      } else {
        value=((cipher_text[i].charCodeAt(0)-97) -(gene_key[i].charCodeAt(0)-97))%26;
        while(value<0){
          value+=26
        }
        value=value+97
        letter = String.fromCharCode(value);
      }

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
        <Text style={Styles.headline}>Vigenere Cipher</Text>
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
        decryptCaesar(textValue, key )
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
}
)
export default ViginereCipher;

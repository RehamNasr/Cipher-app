import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const App = ({ navigation }) => {
  const [textValue, setTextValue] = useState('');
  const [keyA, setKeyA] = useState('');
  const [keyB, setKeyB] = useState('');
  const [size_n, setSize_n] = useState(26)
  const [Message, setMessage] = useState("")
  function modular(n, a) {
    arr = []
    i = 0;
    a_copy = a;
    n_copy = n;
    y = 0;
    while (n % a >= 1) {
      div = Math.floor(n / a)
      mod = n % a
      arr[i] = div
      i++
      n = a
      a = mod
    }
    a = 0;
    re = arr[i - 1] * 1 + 0;
    recopy = re;
    temp = 1;
    i++;
    arr.splice(0, 0, 0)
    for (w = i - 2; w > 0; w--) {
      if (w != i - 2) {
        temp = recopy;
      }
      if (w == 1) {
        y = re;
      }
      re = arr[w] * re + temp
    }
// الاشاره
    if (n_copy * y > a_copy * re) {
      return -re + n_copy
    } else {
      return re
    }


  }
  function isUpperCase(text) {
    return text === text.toUpperCase();
  }
  function isLowerCase(text) {
    return text === text.toLowerCase();
  }

  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }

  const encryptAffine = (plain_text, a, b) => {
    cipher = ""
    if (isLowerCase(plain_text) || isUpperCase(plain_text)) {
      setSize_n(26)
      result_gcd = gcd(Math.max(a, 26), Math.min(a, 26));
    } else {
      setSize_n(52)
      result_gcd = gcd(Math.max(a, 52), Math.min(a, 52));
    }
    if (result_gcd != 1) {
      setMessage("can't encyrpt because gcd not equal 1" )
    } else {
      for (var i = 0; i < plain_text.length; i++) {
        //(a*p)+b%n
        if (isUpperCase(plain_text[i])) {
          value = (a * (plain_text[i].charCodeAt(0) - 65) + b) % (size_n * 1);
          value += 65;
          letter = String.fromCharCode(value);
        
        } else {
          value = (a * (plain_text[i].charCodeAt(0) - 97) + b) % (size_n * 1);
          value += 97;
          letter = String.fromCharCode(value);
        }
        cipher += letter;
      }
      setMessage("cipher text is " + cipher)

    }
  };

  const decryptAffine = (cipher_text, a, b) => {
    plain = ""
    if (isLowerCase(cipher_text) || isUpperCase(cipher_text)) {
      setSize_n(26)
      result_gcd = gcd(Math.max(a, 26), Math.min(a, 26));
    } else {
      setSize_n(52)
      result_gcd = gcd(Math.max(a, 52), Math.min(a, 52));
    }
    if (result_gcd != 1) {
      setMessage("can't decyrpt because gcd not equal 1" )

    } else {
      for (var i = 0; i < cipher_text.length; i++) {
        //(a^^-1(c-b))%n
        resu = modular(size_n, a)
        if (isUpperCase(cipher_text[i])) {
          value = (resu * ((cipher_text[i].charCodeAt(0) - 65) - b)) % (size_n * 1);
          // عشان الناتج لو سالب
          while(value<0){
            value+=size_n*1
          }
          value += 65;
          letter = String.fromCharCode(value);
        } else {
          value = (resu * ((cipher_text[i].charCodeAt(0) - 97) - b)) % (size_n * 1);
          // عشان الناتج لو سالب
          while(value<0){
            value+=size_n*1
          }
          
          value += 97;
          letter = String.fromCharCode(value);
       
        }
        plain += letter;
      }
      setMessage("plain text is " + plain)

    }
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
        <Text style={Styles.headline}>Affine Cipher</Text>
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
      <TextInput style={Styles.input} keyboardType='number-pad'
        placeholder="Enter key A"
        value={keyA}
        placeholderTextColor={"#ccc"}

        onChangeText={text => setKeyA(text)}
      />
      <TextInput style={Styles.input} keyboardType='number-pad'
        placeholder="Enter key B"
        value={keyB}
        placeholderTextColor={"#ccc"}

        onChangeText={text => setKeyB(text)}
      />
      <TouchableOpacity onPress={() => {
        encryptAffine(textValue, keyA * 1, keyB * 1)
      }} style={Styles.tab}>
        <Text style={Styles.innertext}>Encrypt</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        decryptAffine(textValue, keyA * 1, keyB * 1)
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
export default App;

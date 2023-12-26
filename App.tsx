
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, TouchableOpacity, Text, Image, StyleSheet, StatusBar } from 'react-native';

import Slashscreen from './pages2/splashscreen'
import MainScreen from './pages2/MainScreen'
import CeaserCipher from './pages2/CaesarCipher';
import ViginereCipher from './pages2/VigenereCipher';
import AffineCipher from './pages2/AffineCipher'
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'rgb(2 150 160)'}></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splashscreen" component={Slashscreen} />
          <Stack.Screen name='MainScreen' component={MainScreen} />
          <Stack.Screen name='CeaserCipher' component={CeaserCipher} />
          <Stack.Screen name='ViginereCipher' component={ViginereCipher} />
          <Stack.Screen name='AffineCipher' component={AffineCipher} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
// import * as React from 'react'
// import { StatusBar } from 'react-native'
// import Splash from './pages/Splash';
// import * as Constant from './android/app/src/consts/constant'
// import AppNavigation from './Navigation/AppNavigation';

// function app() {
//     const [show, setshow] = React.useState(true)
//     setTimeout(() => {
//         setshow(false)
//     }, 1000);
//     return (
//         <>
//             <StatusBar backgroundColor={Constant.backgroundcolor} barStyle={"dark-content"}></StatusBar>
//             {
//                 show ?
//                     <Splash></Splash> :
//                     <AppNavigation></AppNavigation>
//             }

//         </>
//     )
// }


// export default app


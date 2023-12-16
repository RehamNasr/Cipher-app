

// import * as React from 'react'
// import { Alert, Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, StatusBar } from 'react-native'
// import Splash from './pages/Splash'
// import Page1 from './pages/Page1'
// const { height, width } = Dimensions.get("screen")

// function app() {
//   setTimeout(() => {
//     setview(false)
//   }, 3000);
//   const [view, setview] = React.useState(true)
//   return (
//     <>
//     {view?
//     <Splash></Splash>:
//     <Page1></Page1>
//     }
//     </>
//   )
// }


// export default app

import * as React from 'react'
import { StatusBar } from 'react-native'
import Splash from './pages/Splash';
import * as Constant from './android/app/src/consts/constant'
import AppNavigation from './Navigation/AppNavigation';

function app() {
  const [show,setshow]=React.useState(true)
  setTimeout(() => {
    setshow(false)
  }, 1000);
  return (
    <>
      
      {
        show?
        <Splash></Splash>:
        <AppNavigation></AppNavigation>
      }
      
    </>
  )
}


export default app
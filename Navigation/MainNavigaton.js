import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Constant from "../android/app/src/consts/constant"

import AuthStack from './AuthStack';
import SearchStack from './SearchStack';
import HomeTab from './HomeTab';
import Barcode from "../pages/AppHome/Barcode"
import PharmacyProfile from "../pages/AppHome/PharmacyProfile"
import EnterPrescription from '../pages/AppHome/EnterPrescription';
import Check from '../pages/AppHome/Check';
import AllHospital from '../pages/AppHome/AllHospital';
import Privacy from '../pages/AppHome/Privacy';
import Fav from '../pages/AppHome/Fav';
import MyOrder from '../pages/AppHome/MyOrder';
import Editpr from '../pages/AppHome/Editpr';
import Rate from '../pages/AppHome/Rate';
import Trackorder from '../pages/AppHome/Trackorder';
import ShowProduct from '../pages/AppHome/ShowProduct';
const stack = createNativeStackNavigator()
function MainNavigaton() {
    return (
        <>
          

            <stack.Navigator screenOptions={{ headerShown: false }}>
                <stack.Screen name='HomeTab' component={HomeTab}></stack.Screen>
                <stack.Screen name='Barcode' component={Barcode}></stack.Screen>
                <stack.Screen name='PharmacyProfile' component={PharmacyProfile}></stack.Screen>
                <stack.Screen name='EnterPrescription' component={EnterPrescription}></stack.Screen>
                <stack.Screen name='Check' component={Check}></stack.Screen>
                <stack.Screen name='AllHospital' component={AllHospital}></stack.Screen>
                <stack.Screen name='Privacy' component={Privacy}></stack.Screen>
                <stack.Screen name='Fav' component={Fav}></stack.Screen>
                <stack.Screen name='MyOrder' component={MyOrder}></stack.Screen>
                <stack.Screen name='Editpr' component={Editpr}></stack.Screen>
                <stack.Screen name='Rate' component={Rate}></stack.Screen>
                <stack.Screen name='Trackorder' component={Trackorder}></stack.Screen>
                <stack.Screen name='ShowProduct' component={ShowProduct}></stack.Screen>
            </stack.Navigator>


        </>
    );
}

export default MainNavigaton;
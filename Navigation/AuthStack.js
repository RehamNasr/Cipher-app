import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Choice from '../pages/AppRegister/Choice';
import Login from '../pages/AppRegister/Login';
import SingUp from '../pages/AppRegister/SingUp';
import Code from '../pages/AppRegister/Code';
import Pass1 from '../pages/AppRegister/Pass1';
import Pass2 from '../pages/AppRegister/Pass2';
import Pass3 from '../pages/AppRegister/Pass3';

const AuthionStack = createNativeStackNavigator();

function AuthStack() {
  return (

      <AuthionStack.Navigator screenOptions={{headerShown: false}} >
        <AuthionStack.Screen name="Choice" component={Choice} />
        <AuthionStack.Screen name="Login" component={Login} />
        <AuthionStack.Screen name="SingUp" component={SingUp} />
        <AuthionStack.Screen name="Code" component={Code} />
        <AuthionStack.Screen name="Pass1" component={Pass1} />
        <AuthionStack.Screen name="Pass2" component={Pass2} />
        <AuthionStack.Screen name="Pass3" component={Pass3} />
      </AuthionStack.Navigator>
   
  );
}

export default AuthStack;
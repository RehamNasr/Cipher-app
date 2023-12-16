import * as React from 'react';
import { View, Text, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Constant from "../android/app/src/consts/constant"
import AuthStack from './AuthStack'
import MainNavigaton from './MainNavigaton'
import AsyncStorage from '@react-native-async-storage/async-storage';
const stack = createNativeStackNavigator();
export const logincontext = React.createContext()

function AppNavigation() {
    const [login, setlogin] = React.useState(false)
    const getvalue = async () => {
        try {
            setloading(true)

            let value = await AsyncStorage.getItem('login')
            if (value == null) {
                value = false
            } else {
                value = JSON.parse(value)
            }

            setlogin(value)
            setloading(false)

        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getvalue();
    }, [login]);
    const changelogin = async () => {
        setloading(true)
        setlogin(true)
        await AsyncStorage.setItem('login', JSON.stringify(true));
        setloading(false)


    }
    const logout = async () => {
        try {
            setloading(true)
            setlogin(false)
            AsyncStorage.removeItem("login");
            setloading(false)

        } catch (error) {
            console.log(error)
        }



    }
    const [loading, setloading] = React.useState(true)

    return (
        <>
            <StatusBar backgroundColor={Constant.backgroundcolor}></StatusBar>
            <logincontext.Provider value={{ changelogin, logout }}>
                {
                    loading ?
                        <View style={{ flex: 1, backgroundColor: Constant.backgroundcolor, alignItems: "center", justifyContent: "center" }}>
                            <ActivityIndicator size={30} color={Constant.text_color}></ActivityIndicator>
                        </View> :
                        <NavigationContainer >
                            <stack.Navigator screenOptions={{ headerShown: false }}>
                                {
                                    !login ?
                                        <stack.Screen name='AuthStack' component={AuthStack}></stack.Screen> :
                                        null
                                }

                                <stack.Screen name='MainNavigaton' component={MainNavigaton}></stack.Screen>

                            </stack.Navigator>
                        </NavigationContainer>
                }

            </logincontext.Provider>
        </>
    );
}

export default AppNavigation;
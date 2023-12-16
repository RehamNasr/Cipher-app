import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../pages/AppHome/Search';
import SearchByShape from '../pages/AppHome/SearchByShape';


const Search_Stack = createNativeStackNavigator();

function SearchStack() {
    return (
        <>
          
            <Search_Stack.Navigator screenOptions={{ headerShown: false }} >
                <Search_Stack.Screen name="Search" component={Search} />
                <Search_Stack.Screen name="SearchByShape" component={SearchByShape} />
            </Search_Stack.Navigator>
        </>
    );
}

export default SearchStack;

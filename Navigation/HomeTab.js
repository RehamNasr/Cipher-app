import * as React from 'react';
import { View, Text, StatusBar, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/AppHome/Home';
import Profile from '../pages/AppHome/Profile';
import Login from '../pages/AppRegister/Login';
import SingUp from '../pages/AppRegister/SingUp';
import Code from '../pages/AppRegister/Code';
import Pass1 from '../pages/AppRegister/Pass1';
import Pass2 from '../pages/AppRegister/Pass2';
import Pass3 from '../pages/AppRegister/Pass3';
import SearchStack from '../Navigation/SearchStack'
import * as Constant from '../android/app/src/consts/constant'
import AllPharmacy from '../pages/AppHome/AllPharmacy';
import Cart1 from '../pages/AppHome/Cart1';
import Ionicons from 'react-native-vector-icons/AntDesign'
const { height, width } = Dimensions.get("screen")
const Tab = createBottomTabNavigator();
function HomeTab() {
  return (
    <>
 


      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'

            } else if (route.name === 'SearchStack') {
              iconName = 'search1'
            } else if (route.name === "Cart1") {
              iconName = 'shoppingcart'

            } else if (route.name === "AllPharmacy") {
              iconName = "medicinebox"
            } else {
              iconName = "ellipsis1"
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={17} color={color} />;
          },

          tabBarActiveTintColor: Constant.text_color,
          tabBarInactiveTintColor: "#ccc",
          headerShown: false,
          tabBarStyle: {
            height: height * .08,
            backgroundColor: Constant.white,
            paddingBottom: height * .009,
            paddingTop: height * .009,
            elevation: 2,
            borderWidth: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            shadowColor: Constant.white

          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: Constant.font_reqular,
          },

        })}

      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="SearchStack" component={SearchStack} options={{ tabBarLabel: 'Search', }} />
        <Tab.Screen name="Cart1" component={Cart1} options={{ tabBarLabel: 'Cart', }} />
        <Tab.Screen name="AllPharmacy" component={AllPharmacy} options={{ tabBarLabel: 'Pharmacies', }} />
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'More', }} />

      </Tab.Navigator>

    </>
  );
}

export default HomeTab;
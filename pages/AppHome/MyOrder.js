import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Tab = createMaterialTopTabNavigator();
import Pending from "./Pending"
import Delivered from "./Delivered"
import Cancelled from "./Cancelled"
import { StyleSheet, View, Dimensions, TouchableOpacity, Text, TouchableWithoutFeedback, StatusBar } from 'react-native';
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")



function MyOrder({ navigation, routes }) {
    const CustomTabBar = ({ state, descriptors, navigation }) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: Constant.backgroundcolor, width: width, paddingHorizontal: 10, paddingVertical: height * .02, paddingBottom: height * .03 }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 5,
                                    borderRadius: 20,
                                    backgroundColor: isFocused ? Constant.text_color : Constant.white,
                                    marginHorizontal: 6
                                }}
                            >
                                <Text style={{ color: isFocused ? Constant.white : Constant.primary_color, fontSize: 14, fontFamily: Constant.font_reqular }}>{label}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>
        );
    };
    return (
        // <SafeAreaProvider>

        // <NavigationContainer>
        <>
            <StatusBar backgroundColor={Constant.backgroundcolor}></StatusBar>
            <View style={style.heading}>
                <TouchableOpacity style={style.touchicon}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="left" style={{ ...style.iconsize }}></AntDesign>

                </TouchableOpacity>
                <Text style={style.Text}>My Orders</Text>
                <TouchableOpacity style={style.touchicon} >
                    <Ionicons name="notifications-outline" style={{ ...style.iconsize, fontSize: 18 }}></Ionicons>

                </TouchableOpacity>
            </View>


            <Tab.Navigator
                tabBarOptions={{
                    indicatorStyle: { backgroundColor: Constant.backgroundcolor },
                    labelStyle: { fontWeight: Constant.font_reqular },
                }}
                tabBar={(props) => <CustomTabBar {...props} />}

            >
                <Tab.Screen name="Pending" component={Pending} />
                <Tab.Screen name="Delivered" component={Delivered} />
                <Tab.Screen name="Cancelled" component={Cancelled} />
            </Tab.Navigator>
        </>
        // </NavigationContainer>

        // </SafeAreaProvider>
    );
}
const style = StyleSheet.create({
    contanier: {
        backgroundColor: Constant.backgroundcolor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    heading: {
        width: width,
        flexDirection: "row",
        height: height * .09,
        justifyContent: "space-between",
        backgroundColor: Constant.backgroundcolor,
        alignItems: "center",
        paddingHorizontal: width * .05
    },
    touchicon: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }, iconsize: {
        fontSize: 14,
        color: Constant.black
    },
    Text: {
        color: Constant.black,
        fontSize: 17,
        fontFamily: Constant.font_reqular
    },
})
export default MyOrder;
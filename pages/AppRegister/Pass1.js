import * as React from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, StatusBar, ActivityIndicator, ToastAndroid, TextInput } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import axios, { all } from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import LottieView from "lottie-react-native";
const { height, width } = Dimensions.get("screen")
export default function Pass1({navigation}) {
    const [phone, setphone] = React.useState("")
    const [error, seterror] = React.useState("")
    const [alluser, setAlluser] = useState([])
    const [loading, setLoading] = useState(false)

    return (
        <>
            <StatusBar backgroundColor={Constant.backgroundcolor}></StatusBar>
            {
                loading ?
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <ActivityIndicator size={"large"} color={Constant.text_color}>

                        </ActivityIndicator>
                    </View> :
                    <View
                        style={style.view}

                    >
                        <View style={style.row1}>
                            <TouchableOpacity style={style.b_back}
                            onPress={() => navigation.goBack()}
                            >
                                <AntDesign name='left' color="#000" size={15} />
                            </TouchableOpacity>
                            <Text style={style.header}>Forget Password</Text>

                            <TouchableOpacity style={style.b_back}
                                disabled={true}
                            // onPress={() => navigation.goBack()}
                            >
                                {/* <MaterialIcons name='navigate-next' color="#000" size={25} /> */}
                            </TouchableOpacity>
                        </View>




                        <LottieView
                            source={require("../../android/app/src/assets/icons/pass1.json")}
                            style={style.icon}
                            colorFilters={[
                                {
                                    keypath: "button",
                                    color: "#F00000",
                                },
                                {
                                    keypath: "Sending Loader",
                                    color: "#F00000",
                                },
                            ]}
                            autoPlay
                            loop
                        />
                        <Text style={style.header2}>please enter your phone to receive
                            a verification code</Text>


                        <TextInput
                            style={Constant.style.Textinput}
                            placeholder='Enter your phone'
                            placeholderTextColor={Constant.primary_color}
                            keyboardType="number-pad"

                            outlineStyle={{ borderRadius: 20, borderColor: "#cacbc9", backgroundColor: "#fff" }}
                            // error={true}
                            value={phone}
                            onChangeText={(value) => {
                                setphone(value)
                            }}

                        />
                        <Text style={{ color: "#f00", fontSize: 8, fontFamily: "Akshar-Regular", alignSelf: "flex-start", paddingRight: width * .1 }}>{error}</Text>


                        <TouchableOpacity
                            style={{ ...Constant.style.button, backgroundColor: Constant.text_color }}
                            onPress={() => {
                                // checkphone() 
                                 navigation.navigate('Pass2')
                            }}
                        >
                            <Text style={style.textbutton}>Send</Text>
                        </TouchableOpacity>

                        <View style={style.lastrow}>
                            <Text style={{ color: "#000", fontSize: 13, fontFamily: Constant.font_reqular, }}>Don't have an account?</Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 13, color: Constant.text_color, fontFamily: Constant.font_sbold, textDecorationLine: "underline" }}
                                    onPress={() => navigation.navigate("SingUp")}
                                > Create Account</Text></TouchableOpacity>
                        </View>
                    </View>
            }
        </>)
}
const style = StyleSheet.create({
    view: {
        height: height,
        width: width,
        padding: 10,
        alignItems: "center",
        backgroundColor: Constant.backgroundcolor
    },
    row1: {
        width: width ,
        height: height * .08,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    b_back: {
        height: height * .08,
        width: width * .15,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start"
    },
    header: {
        color: "#000",
        fontSize: Constant.font_size_heading,
        marginVertical: 10,
        fontFamily: Constant.font_reqular,
    }, header2: {
        fontSize: Constant.font_size_text,
        color: Constant.black,
        alignSelf: "center",
        textAlign: "center",
        width: width * .75,
        fontFamily: Constant.font_reqular,
        marginTop: height * .03,
        marginBottom: height * .02,

    },
    icon: {
        width: width * .8,
        height: height * .3
    }, textinput: {
        marginTop: height * .07,
        borderRadius: 20,
        width: width * .77,
        fontSize: Constant.font_size_text,
        fontFamily: "Akshar-Regular",
        height: height * .05
    },
    button: {
        height: height * .06,
        width: width * .8,
        backgroundColor: Constant.text_color,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        marginTop: height * .04
    }, textbutton: {
        color: "#fff",
        fontSize: 15,
        fontFamily: Constant.font_reqular,
        alignSelf: "center"
    }, textpass: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#000",
        marginTop: 5
    },
    next: {
        height: height * .05,
        width: width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * .02
    },
    lastrow: {
        height: height * .1,
        width: width * .8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * .14
    }
})
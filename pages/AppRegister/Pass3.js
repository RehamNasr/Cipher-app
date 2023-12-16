import * as React from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, StatusBar, ActivityIndicator, ToastAndroid, TextInput, ScrollView } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { logincontext } from '../../Navigation/AppNavigation'
// import axios, { all } from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import LottieView from "lottie-react-native";
const { height, width } = Dimensions.get("screen")
export default function Pass3({ navigation }) {
    const [phone, setphone] = React.useState("")
    const [error, seterror] = React.useState("")
    const [alluser, setAlluser] = useState([])
    const [loading, setLoading] = useState(false)
    const { changelogin } = React.useContext(logincontext)
    return (
        <>
            <StatusBar backgroundColor={Constant.backgroundcolor}></StatusBar>
            {
                loading ?
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <ActivityIndicator size={"large"} color={Constant.text_color}>

                        </ActivityIndicator>
                    </View> :
                    <ScrollView>
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
                                source={require("../../android/app/src/assets/icons/pass3.json")}
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
                            <Text style={style.header2}>Ensure a strong password, even a new one To protect your account</Text>


                            <TextInput
                                style={Constant.style.Textinput}
                                placeholder='new password'
                                placeholderTextColor={Constant.primary_color}


                                outlineStyle={{ borderRadius: 20, borderColor: "#cacbc9", backgroundColor: "#fff" }}
                                // error={true}
                                value={phone}
                                onChangeText={(value) => {
                                    setphone(value)
                                }}

                            />
                            <TextInput
                                style={Constant.style.Textinput}
                                placeholder='confirm new password'
                                placeholderTextColor={Constant.primary_color}


                                outlineStyle={{ borderRadius: 20, borderColor: "#cacbc9", backgroundColor: "#fff" }}
                                // error={true}
                                value={phone}
                                onChangeText={(value) => {
                                    setphone(value)
                                }}

                            />
                            <Text style={{ color: "#f00", fontSize: 8, fontFamily: "Akshar-Regular", alignSelf: "flex-start", paddingRight: width * .1 }}>{error}</Text>


                            <TouchableOpacity
                                style={{ ...Constant.style.button, backgroundColor: Constant.text_color, marginTop: height * .05 }}
                                onPress={() => {
                                    // checkphone() 
                                    changelogin()
                                    navigation.navigate('MainNavigaton')
                                    
                                }}
                            >
                                <Text style={style.textbutton}>Save</Text>
                            </TouchableOpacity>


                        </View>
                    </ScrollView>
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
        width: width,
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
        fontSize: Constant.style.font_size_text,
        color: Constant.black,
        alignSelf: "center",
        textAlign: "center",
        width: width * .75,
        fontFamily: Constant.font_reqular,
        marginTop: height * .03,
        marginBottom: height * .06,

    },
    icon: {
        width: width * .8,
        height: height * .3
    }, textinput: {
        marginTop: height * .07,
        borderRadius: 20,
        width: width * .77,
        fontSize: Constant.font_size_text,
        fontFamily: Constant.font_reqular,
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
        fontSize: 15,
        color: "#000",
        marginTop: 5,
        fontFamily: Constant.font_reqular,

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
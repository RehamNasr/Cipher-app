import React, { useEffect, useState, useRef } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, StatusBar, Image, Linking, TimerMixin, Alert, TextInput } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import * as Constant from '../../android/app/src/consts/constant'

import AntDesign from 'react-native-vector-icons/AntDesign'
const { height, width } = Dimensions.get("screen")
// import { CreateContext } from "Createcontext"
import Pass1 from './Pass1';
// import axios from 'axios';
import LottieView from "lottie-react-native";

export default function Pass2({navigation}) {
    // props.route.params.name
    const [checked, setChecked] = useState(false);
    const [verifycode, setVerifycode] = useState(null);
    const [time, setTime] = useState(30);
    const [errorsms, seterrorsms] = useState("")
    const [text, settext] = useState("");
    // Constant [phone, setPhone] = useState(route.params.phone)
    const [phone, setPhone] = useState("01158659437")
    const [count, setcount] = useState(0)
    const [loading, setLoading] = useState(false)
    const otpInputRef = useRef(null);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setTime(time - 1)
    //     }, 1000);
    //     if (time < 0) {
    //         setTime(30)
    //     }
    // }, [time])
    // onInputCompleted = (text) => {

    //     if (text.length == 6) {
    //         navigation.navigate('Pass3', {
    //             code: text,
    //             phone: route.params.phone
    //         })
    //     }


    // }

    // newcode = () => {
    //     axios.post(`${Constant.Phone_Confirm}`, { phone: phone })
    //         .then(response => {
    //             console.log(response.data);
    //             setLoading(false)

    //         })
    //         .catch(error => {
    //             alert(error);
    //         });
    // }

    // useEffect(() => {
    //     if (otpInputRef.current) {
    //         otpInputRef.current.focus();
    //     }
    // }, []);
    return (
        <>
          
            <View
                style={style.view}
            >
                <View style={style.row1}>
                    <TouchableOpacity style={style.b_back}
                    onPress={() => navigation.goBack()}
                    >
                        <AntDesign name='left' color="#000" size={15} />
                    </TouchableOpacity>
                    <Text style={style.header}>Verify Your Phone</Text>

                    <TouchableOpacity style={style.b_back}
                        disabled={true}
                    // onPress={() => navigation.goBack()}
                    >
                        {/* <MaterialIcons name='navigate-next' color="#000" size={25} /> */}
                    </TouchableOpacity>
                </View>

                <LottieView
                    source={require("../../android/app/src/assets/icons/pass22.json")}
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
                <Text style={style.header2}>please enter the digit code sent to </Text>
                <Text style={style.header2}>{phone}</Text>
                <View style={{
                    width: width * .6,
                    alignItems: "center",
                    justifyContent: "center"

                }}>
                    {/* otp */}
                    <OTPInputView
                        // ref={otpInputRef}
                        pinCount={6}
                        style={{
                            height: height * .18,
                            alignSelf: "center",
                            width: width * .85,
                            color: "#000"
                        }}
                        placeholderTextColor={"#000"}
                        // codeInputFieldStyle={style.underlineStyleBase}
                        // codeInputHighlightStyle={style.underlineStyleHighLighted}
                        codeInputFieldStyle={{ borderColor: Constant.text_color, borderRadius: 10 }}
                        // placeholderCharacter={"5"}
                        onCodeFilled={(code => {
                            // onInputCompleted(code);
                            // settext(code)
                        })}
                        editable={true}
                        autoFocusOnLoad={true}
                        keyboardAppearance={'dark'}

                    />

                    {/* <OTPInputView pinCount={5} /> */}
                </View>

                <Text style={{ color: "#f00", fontSize: 8, fontFamily: "Akshar-Regular", alignSelf: "center", marginTop: height * .01 }}>{errorsms}</Text>

                {/* <View style={{ height: height * .03, width: width * .2, flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: height * .02 }}>

                    <Text style={{ color: "#000", fontSize: 12, fontFamily: "Akshar-Regular" }}>{time}</Text>
                    <MaterialIcons name='timer' color="#000" size={13} />
                </View> */}
                <TouchableOpacity
                    onPress={() => {
                        // newcode()
                    }}
                >
                    <Text
                        style={{
                            fontSize: 11,
                            fontFamily: "Akshar-Regular",
                            marginVertical: height * .01,
                            color: "#aaa"

                        }}
                    >ارسال الكود مره أخري</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...Constant.style.button, backgroundColor: Constant.text_color }}
                    onPress={() => {
                        // onInputCompleted(text)
                        navigation.navigate('Pass3')
                    }}
                >
                    <Text style={style.textbutton}>Check</Text>
                </TouchableOpacity>
            </View>
        </>)
}

const style = StyleSheet.create({
    view: {
        height: height,
        width: width,
        padding: 10,
        alignItems: "center",
        backgroundColor: "#fff"
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
        fontSize:Constant.font_size_text,
        color: "#000",
        fontFamily: Constant.font_reqular,
        alignSelf: "center",
        textAlign: "center",
        width: width * .75
    }, textinput: {
        marginTop: height * .07,
        borderRadius: 20,
        width: width * .77
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
        fontFamily: "Akshar-Regular",
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
    }, borderStyleHighLighted: {
        borderColor: Constant.text_color,
    },
    icon: {
        width: width * .7,
        height: height * .25,
        marginVertical:height*.05
    }


})
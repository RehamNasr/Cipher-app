

import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
import AntDesign from 'react-native-vector-icons/AntDesign'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { logincontext } from '../../Navigation/AppNavigation'
function SingUp({ navigation }) {
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [error, seterror] = useState("")
    const { changelogin } = useContext(logincontext)
    const isValidName = (name) => {
        // Check if the name contains at least one letter and is not empty
        return /^[a-zA-Z]+$/.test(name.trim());
    }


    const isValidPhoneNumber = (phoneNumber) => {

        const phoneRegex = /^(011|012|015)\d{8}$/;
        return (phoneRegex.test(phoneNumber))
    }


    const isValidPassword = (password) => {
        if (password.length < 8) {
            return false;
        }
        if (!/[a-zA-Z]/.test(password)) {
            return false;
        }
        if (!/\d/.test(password)) {
            return false;
        }
        return true
    }
    const isPasswordConfirmed = (password, confirmPassword) => {

        return password === confirmPassword;
    }

    const check = () => {
        validname = isValidName(name)
        validphone = isValidPhoneNumber(phone)
        validpass = isValidPassword(password)
        validconfirmpass = isPasswordConfirmed(password, confirmpassword)

        if (!validname) {
            seterror("invalid name")
            return;
        }

        if (!validphone) {
            seterror("invalid number")
            return;
        }

        if (!validpass) {
            seterror("Password must > 8 characters and  [0-9 A-Z a-z]")
            return;
        }

        if (!validconfirmpass) {
            seterror("Passwords do not match")
            return;
        }
        seterror("")
        navigation.navigate("Code")



    }

    React.useEffect(() => {
        GoogleSignin.configure({

            androidClientId: "370389907929-k50vdu1ag6ak4ocodsf0v6urnl6kgr3o.apps.googleusercontent.com",
            forceCodeForRefreshToken: true,

        });
    }, [])
    const handleGoogleSignIn = async () => {
        try {
            // prompt user to sign in with Google
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            info = await GoogleSignin.getTokens();

            //   console.log('usertoken=>', info.accessToken);
            console.log('info=>', userInfo.user);

            //   loginwithgoogle(info.accessToken);
            signOut();
            changelogin()
            navigation.navigate("MainNavigaton")


        } catch (error) {
            //   if (error.message == 'Network Error') {
            //     ToastAndroid.show('يجب التأكد من الاتصال بالانترنت', ToastAndroid.show);
            //   } else {
            //     ToastAndroid.show('يجب المحاوله في وقت لاحق', ToastAndroid.show);
            //   }

            console.error(error.message);
        }
    };

    signOut = async () => {
        try {
            await GoogleSignin.signOut();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
       
            <View style={style.contanier}>
                <ScrollView style={{ marginTop: 0 }}>
                    <Image
                        source={require("../../android/app/src/assets/images/logo.png")}
                        style={style.image}
                        resizeMode="contain"
                    >

                    </Image>
                    <Text style={style.headText} onPress={() => navigation.navigate("Login")}>
                        If you already have an account
                        <Text style={{ color: Constant.text_color }}> Log in from here?</Text>
                    </Text>

                    <TextInput
                        style={{ ...Constant.style.Textinput }}
                        placeholder='Enter your name'
                        placeholderTextColor={Constant.primary_color}
                        value={name}
                        onChangeText={(value) => {
                            setname(value)
                        }}
                    />

                    <TextInput
                        style={{ ...Constant.style.Textinput }}
                        placeholder='Enter your phone'
                        placeholderTextColor={Constant.primary_color}
                        value={phone}
                        onChangeText={(value) => {
                            setphone(value)
                        }}
                    />
                    <TextInput
                        style={{ ...Constant.style.Textinput }}
                        placeholder='Enter your password'
                        placeholderTextColor={Constant.primary_color}
                        value={password}
                        onChangeText={(value) => {
                            setpassword(value)
                        }}
                    />
                    <TextInput
                        style={{ ...Constant.style.Textinput }}
                        placeholder='confirm password'
                        placeholderTextColor={Constant.primary_color}
                        value={confirmpassword}
                        onChangeText={(value) => {
                            setconfirmpassword(value)
                        }}
                    />
                    {error == "" ? null : <Text style={Constant.style.errormessage} >{error}</Text>}


                    <Text style={Constant.style.forget} onPress={() => { navigation.navigate("Pass1") }}>Forget Password</Text>

                    <TouchableOpacity style={{ ...Constant.style.button, backgroundColor: Constant.text_color }}
                        onPress={() => {
                            check()
                        }}

                    >
                        <Text style={{ ...style.Text, color: Constant.white }}>Countinue</Text>
                    </TouchableOpacity>
                    <View style={style.vline}>
                        <View style={style.line}></View>
                        <Text style={style.Text}>OR</Text>
                        <View style={style.line}></View>
                    </View>

                    <TouchableOpacity style={{ ...Constant.style.Textinput, flexDirection: "row" }}>
                        <AntDesign name="facebook-square" style={style.icon}></AntDesign>
                        <Text style={{ ...style.Text, color: Constant.black, marginLeft: width * .15 }}>Log in with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...Constant.style.Textinput, flexDirection: "row" }}
                        onPress={() => {
                            handleGoogleSignIn()
                        }}
                    >
                        <Image
                            source={require("../../android/app/src/assets/images/google.png")}
                            style={style.imagegoogle}
                            resizeMode="contain"></Image>
                        <Text style={{ ...style.Text, color: Constant.black, marginLeft: width * .17 }}>Log in with Google</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    )
}
const style = StyleSheet.create({
    contanier: {
        backgroundColor: Constant.backgroundcolor,
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
    },
    headText: {
        fontSize: 12,
        fontFamily: Constant.font_reqular,
        color: Constant.black,
        width: width * .4,
        textAlign: "center",
        alignSelf: "center",
        marginBottom: height * .02
    },
    buttontext: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"

    },
    Text: {
        fontSize: Constant.font_size_text,
        fontFamily: Constant.font_reqular,
        color: Constant.black,
        alignSelf: "center"

    },
    image: {
        width: width * .7,
        height: height * .2,
        alignSelf: "center",
        marginBottom: height * .02



    },
    vline: {
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        width: width * .9,
        alignSelf: "center",
        marginTop: height * .02,
        marginBottom: height * .02

    },
    line: {
        border: 2,
        height: 1,
        width: width * .39,
        backgroundColor: Constant.primary_color
    },
    icon: {
        color: Constant.text_color,
        marginLeft: width * .05,
        fontSize: 20

    }, imagegoogle: {
        width: 20,
        height: 20,
        alignSelf: "center",
        marginLeft: width * .045,

    }


})

export default SingUp
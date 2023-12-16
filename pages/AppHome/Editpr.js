import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput, StatusBar, ActivityIndicator, ToastAndroid } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get("screen")
export default function Editpr({ navigation }) {
    let [arr, setArr] = useState([
        {
            name: "First Name ",
            place: "First Name",
            text: ""
        },
        {
            name: "family name",
            place: "family name",
            text: ""
        }, {
            name: "Phone",
            place: "Phone",
            text: ""
        },
        {
            name: "Address",
            place: "Address",
            text: ""
        },
    ])
    const [info_profile, setinfo_profile] = useState({
        photo: "",
        enable: true,
        username: "",
        address: "",
        birthdate: "",
        code: ""
    })



    const changevalue = (index, value) => {
        switch (index) {
            case 0:
                setinfo_profile({ ...info_profile, username: value })

                break
            case 1:
                setinfo_profile({ ...info_profile, birthdate: value })


                break

            case 2:
                setinfo_profile({ ...info_profile, address: value })

                break
        }
    }
    return (
        <>

            <View style={style.view}>
                <StatusBar backgroundColor={Constant.white}></StatusBar>
                <View style={style.header}>
                    <TouchableOpacity style={{ height: height * .1, width: width * .15, alignItems: "center", justifyContent: "center" }}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >

                        <AntDesign name="left" style={{ ...style.iconsize }}></AntDesign>

                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, color: "#000", fontFamily: Constant.font_reqular }}>Edit profile</Text>
                    <View style={{ height: height * .1, width: width * .15, alignItems: "center", justifyContent: "center" }}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >

                        <AntDesign name="left" style={{ ...style.iconsize, color: "#fff" }}></AntDesign>

                    </View>
                </View>
                {
                    arr.map((item, index) => (
                        <View style={style.row}>
                            <Text style={style.name}>{item.name}</Text>
                            <TextInput
                                style={style.textinput}
                                placeholder={item.place}
                                placeholderTextColor="#aaa"
                                value={index == 0 ? info_profile.username : (index == 1 ? info_profile.birthdate.substring(0, 10) : info_profile.address)}
                                keyboardType={index == 1 ? "numeric" : "web-search"}
                                onChangeText={(value) => {
                                    let ar = [...arr];
                                    ar[index].text = value
                                    setArr(ar)
                                    changevalue(index, value)
                                }}
                            />
                        </View>
                    ))
                }
                <TouchableOpacity style={{ ...Constant.style.button, backgroundColor: Constant.text_color, position: "absolute", bottom: 20 }}
                    onPress={() =>
                        // editprofile()
                        navigation.goBack()

                    }
                >
                    <Text style={style.edit}>Edit</Text>
                </TouchableOpacity>
            </View>

        </>)
}
const style = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: Constant.backgroundcolor,
        alignItems: "center"
    },
    header: {
        height: height * .09,
        width: width,
        alignItems: "center",
        elevation: 1,
        shadowColor: '#000',
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    row: {
        height: height * .1,
        width: width * .9,

        marginVertical: 5
    },
    name: {
        fontSize: 15,
        color: "#000",
        fontFamily: Constant.font_reqular,
        marginVertical: height * .01
    },
    textinput: {
        height: height * .055,
        width: width * .9,
        backgroundColor: "#fff",
        // elevation: 1,
        fontSize: 12,
        color: "#000",
        fontFamily: Constant.font_reqular,
        borderRadius: 6,
    },
    edit: {
        fontSize: 16,
        color: "#fff",
        fontFamily: Constant.font_sbold,

    }, iconsize: {
        fontSize: 14,
        color: Constant.black
    },



})
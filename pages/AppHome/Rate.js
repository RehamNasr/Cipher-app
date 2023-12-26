


import { Text, View, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ImageBackground, ScrollView } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import React, { useState, useEffect } from 'react';
import ImageZoomViewer from 'react-native-image-zoom-viewer';
import { FloatingAction } from "react-native-floating-action";
import Modal from 'react-native-modal'
import SelectCategoryModel from "./SelectCategoryModel"
import SelectDropdown from 'react-native-select-dropdown'
import LottieView from 'lottie-react-native'
function PharmacyProfile({navigation}) {

    let arr = [
        {
            name: "نظافة المكان",
            text: "place"
        },
        {
            name: "الخدمة والاستقبال",
            text: "reception"
        },
        {
            name: "مطابقه المعلومات",
            text: "info"
        },
        {
            name: "حالة المكان",
            text: "status"
        }, {
            name: "حالة المكان",
            text: "status"
        }
    ]
    const [num, setnum] = useState(0)
    const rating = (index) => {
        setnum(index)
    }
    const [valuerate, setvaluerate] = useState("")
    const countries = ["Pain relieving medications", "Pain relieving medications", "Pain relieving medications", "Pain relieving medications"]
    const [visible, setvisible] = useState(false)
    return (
        <>

       

            <View style={style.contanier}>
                <View style={style.heading}>
                    <TouchableOpacity style={style.touchicon} 
                    onPress={()=>navigation.goBack()}
                    
                    >
                        <AntDesign name="left" style={{ ...style.iconsize }}></AntDesign>

                    </TouchableOpacity>
                    <Text style={style.Text}>Rate Pharamcy</Text>
                    <TouchableOpacity style={style.touchicon}>

                        <AntDesign name="shoppingcart" style={{ ...style.iconsize, color: Constant.backgroundcolor }}></AntDesign>


                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", width: width * .7, justifyContent: "space-around", marginVertical: height * .05, marginTop: height * .15 }}>
                    {
                        arr.map((item, index) => (
                            <TouchableOpacity>
                                {

                                    <TouchableOpacity
                                        onPress={() => {
                                            rating(index)
                                        }}
                                    >
                                        <AntDesign name="star" style={{ fontSize: 35, color: num >= index ? "#FF8A00" : Constant.primary_color }} />
                                    </TouchableOpacity>

                                }
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={style.boxreview}>
                    <TextInput style={style.TextInput}
                        placeholder='Would you like to write anything about this product? '
                        multiline={true}
                        value={valuerate}
                        placeholderTextColor={Constant.primary_color}
                        onChangeText={(value) => {
                            setvaluerate(value)
                        }}

                    >

                    </TextInput>
                    <Text style={style.len}>50 characters</Text>
                </View>

                <TouchableOpacity style={{ ...Constant.style.button, backgroundColor: Constant.text_color, marginTop: height * .1 }}
                    onPress={() => {
                        setvisible(true)
                    }}
                >



                    <Text style={{ color: Constant.white, fontFamily: Constant.font_reqular }}>Submit Review</Text>
                </TouchableOpacity>
            </View>


            <Modal isVisible={visible}>
                <View style={style.viewmodal}>
                    <Image style={style.imagemodal} source={require("../../android/app/src/assets/images/emoji.png")} resizeMode="contain"></Image>
                    <Text style={style.textmodal}>Thank you for your feedback!</Text>
                    <Text style={style.mtextmodal}>We appreciated your feedback.
                        We’ll use your feedback to improve your experience.</Text>
                    <TouchableOpacity style={style.buttonmodal}
                        onPress={() => {
                            // setvisible(false)
                            navigation.navigate("HomeTab")
                        }}
                    >
                        <Text style={style.textbutton}>Go To Home</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    )
}
const style = StyleSheet.create({
    contanier: {
        backgroundColor: Constant.backgroundcolor,
        flex: 1,
        alignItems: 'center',



    },
    heading: {
        width: width * .95,
        flexDirection: "row",
        height: height * .08,
        justifyContent: "space-between",
        alignItems: "center"
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
    boxreview: {
        width: width * .95,
        height: height * .3,
        backgroundColor: Constant.white,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 1,
        padding: 5,
        paddingLeft: 10
    },
    TextInput: {
        width: width * .9,
        textAlign: "left",
        fontSize: 12,
        fontFamily: Constant.font_reqular,
        color: Constant.black,
        maxHeight: "90%",
        minHeight: "80%",
        textAlignVertical: "top"
    }, len: {
        fontSize: 10,
        color: Constant.primary_color,
        fontFamily: Constant.font_medium,
        textAlign: "right",
        marginRight: 15
    }, viewmodal: {
        height: height * .35,
        width: width * .9,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Constant.backgroundcolor,
        borderRadius: 5,
    }, imagemodal: {
        height: 100,
        width: 100
    }, textmodal: {
        fontSize: 18,
        fontFamily: Constant.font_reqular,
        color: Constant.black,
        marginVertical: 5
    }, mtextmodal: {
        fontSize: 10,
        fontFamily: Constant.font_reqular,
        color: "#aaa",
        width: "50%",
        textAlign: "center"
    }, buttonmodal: {
        width: "70%",
        height: height * .05,
        backgroundColor: Constant.text_color,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        // marginTop: 20,
        borderRadius: 50
    }, textbutton: {
        fontSize: 16,
        color: Constant.white,
        fontFamily: Constant.font_reqular
    }



})

export default PharmacyProfile
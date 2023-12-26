


import { Text, View, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ImageBackground, ScrollView } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import React, { useState, useEffect } from 'react';
import ImageZoomViewer from 'react-native-image-zoom-viewer';
function OrderInfo() {

    const [images, setImages] = useState([
        { uri: require("../../android/app/src/assets/images/Home1.jpg") },
        { uri: require("../../android/app/src/assets/images/Home2.jpg") },
        { uri: require("../../android/app/src/assets/images/Home3.jpg") },
        { uri: require("../../android/app/src/assets/images/Home4.jpg") },
        // Add more image objects as needed
    ]);

    const [state, setstate] = useState("appstore-o")

    const change = () => {
        if (state == "appstore-o") {
            setstate("bars")
        } else {
            setstate("appstore-o")

        }
    }



    return (
        <>
           

            <View style={style.contanier}>



                <View style={style.heading}>
                    <TouchableOpacity style={style.touchicon} >
                        <AntDesign name="left" style={{ ...style.iconsize }}></AntDesign>

                    </TouchableOpacity>
                    <Text style={style.Text}>Order #1514</Text>
                    <TouchableOpacity style={{ ...style.touchicon, }} disabled={true}>
                        <Ionicons name="notifications-outline" style={{ ...style.iconsize, color: Constant.backgroundcolor }}></Ionicons>

                    </TouchableOpacity>
                </View>






                <ScrollView>
                    <View style={style.main}>


                        <View style={{ ...style.box1, alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                            <View style={style.row}>
                                <Text style={style.boxh}>Your order is delivered</Text>
                                <Text style={style.boxt}>Rate pharmacy to get 5 points for collect.</Text>
                            </View>



                            <Image source={require("../../android/app/src/assets/images/earnings.png")}
                                style={style.image}
                                resizeMode="contain"
                            />



                        </View>


                        <View style={{ ...style.box, alignItems: "center", justifyContent: "space-between", }}>
                            <View style={style.row1}>
                                <Text style={style.row1h}>Order #1524</Text>
                                <Text style={style.row1t}>13/05/2021</Text>
                            </View>

                            <View style={style.row1}>
                                <Text style={style.row1t}>Tracking number: </Text>
                                <Text style={style.row2t}>IK287368838</Text>

                            </View>
                            <View style={style.row1}>
                                <Text style={style.row1t}>Delivery address</Text>
                                <Text style={style.row2t}>SBI Building, Software Park</Text>

                            </View>



                        </View>


                        <View style={{ ...style.box2, alignItems: "center", justifyContent: "space-between", }}>
                            <View style={style.row2}>
                                <Text style={style.row1h}>Maxi Dress</Text>
                                <Text style={style.row1t}>x1</Text>
                                <Text style={style.row1h}>$68.00</Text>
                            </View>

                            <View style={style.row2}>
                                <Text style={style.row1h}>Maxi Dress</Text>
                                <Text style={style.row1t}>x1</Text>
                                <Text style={style.row1h}>$68.00</Text>
                            </View>
                            <View style={style.row2}>
                                <Text style={style.row1h}>Maxi Dress</Text>
                                <Text style={style.row1t}>x1</Text>
                                <Text style={style.row1h}>$68.00</Text>
                            </View>
                            <View style={style.row2}>
                                <Text style={style.row1h}>Maxi Dress</Text>
                                <Text style={style.row1t}>x1</Text>
                                <Text style={style.row1h}>$68.00</Text>
                            </View>

                          
                            <View style={{ ...style.row2, marginTop: 20 }}>
                                <Text style={style.row1h}>Sub Total</Text>
                                <Text style={style.row1h}>120.00</Text>
                            </View>
                          

                            <View style={{ ...style.row2, borderBottomWidth: .2, borderColor: Constant.primary_color, paddingBottom: 15 }}>
                                <Text style={style.row1h}>Shipping</Text>
                                <Text style={style.row1h}>0.00</Text>
                            </View>
                            <View style={{ ...style.row2, marginTop: 10 }}>
                                <Text style={style.row1h}>Total</Text>
                                <Text style={style.row1h}>$120.00</Text>
                            </View>

                        </View>

                    </View>
                </ScrollView>
                <View style={style.bottom}>


                    <View style={style.lastrow}>
                        <TouchableOpacity style={style.touchreturn}>
                            <Text style={style.texthome}>Return home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.touchrate}>
                            <Text style={style.textrate}>Rate</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={style.touchshop}>
                        <Text style={style.texthome}>Rate</Text>
                    </TouchableOpacity>
                </View>
            </View>

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
    main: {
        width: width,
        justifyContent: "space-between",
        marginTop: 10,
        alignItems: "center",
    }, box1: {
        backgroundColor: Constant.text_color,
        height: height * .12,
        width: width * .9,
        borderRadius: 10,
        paddingHorizontal: 30,
        marginVertical: 2,
        paddingVertical: 20,
        elevation: 2,
        shadowColor: "#f9f9f9"

    }, row: {
        width: "72%",
        height: "90%",
        justifyContent: "space-between"

    }, boxh: {
        fontSize: 17,
        fontFamily: Constant.font_reqular,
        color: Constant.white
    }, boxt: {
        fontSize: 12,
        fontFamily: Constant.font_reqular,
        color: Constant.white
    },
    box: {
        backgroundColor: Constant.box,
        height: height * .18,
        width: width * .9,
        borderRadius: 10,
        paddingHorizontal: 7,
        marginVertical: 2,
        paddingVertical: 20,
        elevation: 2,
        shadowColor: "#f9f9f9"

    }, image: {
        width: width * .15,
        height: height * .15
    },
    icon: {
        color: "#000",
        fontSize: 14,
    },
    row1: {
        width: "90%",
        height: "20%",
        flexDirection: "row",
        justifyContent: "space-between"
    }, box2: {
        backgroundColor: Constant.box,
        minHeight: height * .25,
        width: width * .9,
        borderRadius: 10,
        paddingHorizontal: 7,
        marginVertical: 2,
        paddingVertical: 20,
        elevation: 2,
        shadowColor: "#f9f9f9",
        marginBottom:height*.2

    }, row2: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingVertical:2
    },
    row1h: {
        fontSize: 15,
        color: Constant.black,
        fontFamily: Constant.font_reqular
    }, row1t: {
        fontSize: 14,
        color: Constant.primary_color,
        fontFamily: Constant.font_reqular
    },
    row2t: {
        fontSize: 13,
        color: Constant.black,
        fontFamily: Constant.font_reqular
    }, part1: {
        width: width * .2,
        flexDirection: "row"
    }, textstate: {
        fontSize: 14,
        fontFamily: Constant.font_reqular,
        color: "#CF6212"
    },
    touchdetails: {
        width: width * .32,
        height: height * .04,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: Constant.white,
        borderWidth: .2,
        marginRight: - width * .022

    },
    lastrow: {
        width: width * .9,
        justifyContent: "space-between", flexDirection: "row",
        marginTop: height * .04
    },
    bottom: {
        width: width * .9,
        alignItems: "center",
        position: "absolute",
        bottom: 15
    }, touchreturn: {
        width: "55%",
        height: height * .055,
        borderRadius: 20,
        borderWidth: .2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Constant.backgroundcolor,
      
    }, touchrate: {
        width: "40%",
        height: height * .055,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Constant.text_color,
      

    }, texthome: {
        fontSize: 14,
        fontFamily: Constant.font_reqular,
        color: Constant.primary_color
    },
    textrate: {
        fontSize: 14,
        fontFamily: Constant.font_reqular,
        color: Constant.white
    }, touchshop: {
        width: "100%",
        height: height * .055,
        borderRadius: 20,
        borderWidth: .2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Constant.backgroundcolor,
        marginTop: 10
    },

})

export default OrderInfo


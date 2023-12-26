


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
import { ShapeContext } from '../../Context'
import SelectDropdown from 'react-native-select-dropdown'
function Cart1({ navigation }) {
    const [state, setstate] = useState("menufold")
    const change = () => {
        if (state == "menufold") {
            setstate("minussquareo")
        } else {
            setstate("menufold")

        }
    }
    const [images, setImages] = useState([
        { uri: require("../../android/app/src/assets/images/phlogo2.jpg") },
        { uri: require("../../android/app/src/assets/images/Home2.jpg") },
        { uri: require("../../android/app/src/assets/images/phlogo2.jpg") },
        { uri: require("../../android/app/src/assets/images/Home2.jpg") }, { uri: require("../../android/app/src/assets/images/phlogo2.jpg") },
        { uri: require("../../android/app/src/assets/images/Home2.jpg") },
    ]);


    const [showcategory, setshowcategory] = useState(false)


    const countries = ["Pain relieving medications", "Pain relieving medications", "Pain relieving medications", "Pain relieving medications"]
    return (
        <>


   

            <View style={style.contanier}>

                <View style={style.heading}>
                    <TouchableOpacity style={style.touchicon}

                        onPress={() => {
                            navigation.goBack(navigation)
                        }}
                    >
                        <AntDesign name="left" style={{ ...style.iconsize }}></AntDesign>

                    </TouchableOpacity>
                    <Text style={style.Text}>My Cart</Text>
                </View>


                <View style={{ ...style.main }}>

                    <ScrollView contentContainerStyle={{ alignItems: "center", backgroundColor: Constant.backgroundcolor }} style={{ width: width ,marginBottom:50}}>
                        {
                            images.map((item, index) => (

                                <View style={{ ...style.box, }}>
                                    <View style={style.part1}>
                                        <View style={{ width: "65%", justifyContent: "space-between", padding: 10 }}>
                                            <Text style={style.title}>La Roche Effaclar Mossant Gel 400ml</Text>
                                            <Text style={style.price}>120.00 EGP</Text>
                                            <View style={style.rowplus}>
                                                <TouchableOpacity style={{ ...style.addbutton, backgroundColor: Constant.primary_color }}>
                                                    <AntDesign name="minus" style={style.iconadd}></AntDesign>
                                                </TouchableOpacity>
                                                <Text style={style.num}>2</Text>
                                                <TouchableOpacity style={style.addbutton}>
                                                    <AntDesign name="plus" style={{ ...style.iconadd, color: "white" }}></AntDesign>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                        <Image
                                            source={require("../../android/app/src/assets/images/ima12.jpg")}
                                            style={{ ...style.imagephar, }}
                                            resizeMode="center"
                                        >

                                        </Image>

                                    </View>
                                    <View style={style.part2}>
                                        <AntDesign name="delete" style={style.removeicon}></AntDesign>
                                        <Text style={style.removetext}>Remove From Cart</Text>
                                    </View>

                                </View>
                            ))
                        }
                    </ScrollView>
                </View>







                <View style={style.lastview}>

                    <View style={style.row}>
                        <Text style={style.texth2}>Sub total</Text>
                        <Text style={style.textt2}>240.00 <Text style={style.textte}>EGP</Text></Text>
                    </View>

                    <View style={style.row}>
                        <Text style={style.texth2}>Delivery</Text>
                        <Text style={style.textt2}>20.00 <Text style={style.textte}>EGP</Text></Text>
                    </View>

                    <View style={{ ...style.row, }}>
                        <View>
                            <Text style={style.textp}>2 Items</Text>
                            <Text style={{ ...style.textt2, textAlign: "left" }}>260.00 <Text style={style.textte}>EGP</Text></Text>
                        </View>
                        <TouchableOpacity style={style.checktouch}
                            onPress={() => {
                                navigation.navigate("Check")
                            }}>
                            <Text style={style.checktext}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>







            </View >



        </>
    )
}
const style = StyleSheet.create({
    contanier: {
        backgroundColor: Constant.backgroundcolor,
        alignItems: 'center',
        flex: 1,
        paddingBottom: 10,
        // width:width

    },
    heading: {
        width: width * .95,
        flexDirection: "row",
        height: height * .07,
        alignItems: "center"
    },
    touchicon: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    }, iconsize: {
        fontSize: 14,
        color: Constant.black,
        marginRight: 10
    }, Text: {
        fontSize: 16,
        color: Constant.black,
        fontFamily: Constant.font_reqular
    }, row: {
        flexDirection: "row",
        width: width * .87,
        justifyContent: "space-between",
        paddingVertical: 5,
        alignItems: "center",
    }, texth2: {
        color: "#474340",
        fontSize: 14,
        fontFamily: Constant.font_reqular,
        marginVertical: 5
    }, textt2: {
        color: "#474340",
        fontSize: 14,
        fontFamily: Constant.font_reqular,
        textAlign: "right",
        width: width * .4

    }, textte: {
        color: "#474340",
        fontSize: 10,
        fontFamily: Constant.font_reqular,
        textAlign: "right",

    },
    row2: {
        width: width * .89,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15
    },
    rowimages: {
        width: width * .9,

    },
    image: {
        width: width * .88,
        height: height * .17,
        borderRadius: 10,
        elevation: 1,
        marginHorizontal: 3
    },
    main: {
        width: width * .95,
        height: height * .6,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },


    box: {
        backgroundColor: Constant.box,
        height: height * .15,
        width: width * .94,
        borderRadius: 10,
        padding: 7,
        marginVertical: 2,
        alignItems: "center",
        elevation: .2

    },
    iconfav: {
        color: Constant.black,
        fontSize: 14,
        textAlign: "right",

    }, title: {
        color: "#474340",
        fontSize: 10,
        fontFamily: Constant.font_reqular,
    }, price: {
        color: "#474340",
        fontSize: 10,
        fontFamily: Constant.font_reqular,

    }, part1: {
        height: "85%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    part2: {
        height: "15%",
        width: width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }, rowplus: {
        width: width * .17,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    addbutton: {
        height: height * .025,
        width: width * .05,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Constant.text_color,
        borderRadius: 5
    },
    iconadd: {
        fontSize: 10,
        color: Constant.black
    }, num: {
        color: "#474340",
        fontSize: 10,
        fontFamily: Constant.font_reqular,
    }, imagephar: {
        width: "40%",
        height: "90%",
    },
    removeicon: {
        color: "#474340",
        fontSize: 10,
        fontFamily: Constant.font_reqular,
        marginHorizontal: 5
    }, removetext: {
        color: "#474340",
        fontSize: 10,
        fontFamily: Constant.font_reqular,
    }, lastview: {
        width: width,
        backgroundColor: Constant.backgroundcolor,
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 2,
        paddingBottom: height * .01,
    },
    checktouch: {
        height: height * .05,
        width: width * .42,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Constant.text_color,
        borderRadius: 5
    }, checktext: {
        color: Constant.white,
        fontSize: 12,
        fontFamily: Constant.font_reqular,
    }, textp: {
        color: "#474340",
        fontSize: 10,
        fontFamily: Constant.font_reqular,


    },
})

export default Cart1
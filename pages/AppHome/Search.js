


import { Text, View, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ImageBackground, ScrollView } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import React, { useState, useEffect } from 'react';
import ImageZoomViewer from 'react-native-image-zoom-viewer';
import { CommonActions } from '@react-navigation/native';
function Search({ navigation }) {

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
         
            {/* <ScrollView> */}
            <View style={style.contanier}>

                <View style={style.heading}>
                    <TouchableOpacity style={style.touchicon} onPress={() => {
                        navigation.navigate("Home")
                    }}>
                        <AntDesign name="left" style={style.iconsize}></AntDesign>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>

                        <TouchableOpacity style={style.touchicon} onPress={() => change()}>
                            <AntDesign name={state} style={style.iconsize}></AntDesign>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.touchicon}>
                            <AntDesign name="shoppingcart" style={{ ...style.iconsize, marginTop: -10 }}></AntDesign>
                            <View style={style.circle}>
                                <Text style={style.textcircle}>2</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={style.row2}>
                    <View style={style.viewsearch}>
                        <TextInput
                            placeholder='name'
                            placeholderTextColor={Constant.primary_color}
                            style={{ ...Constant.style.Textinput, width: width * .75, borderWidth: 0 }}
                        />
                        <AntDesign name="search1" style={{ ...style.iconsize, color: Constant.primary_color }}></AntDesign>
                    </View>
                    <TouchableOpacity style={style.Touchcode} onPress={() => {
                        navigation.navigate("Barcode")
                    }}>
                        <AntDesign name="qrcode" style={{ ...style.iconsize, color: Constant.black }}></AntDesign>
                    </TouchableOpacity>

                </View>





                <TouchableOpacity style={style.viewall}
                    onPress={() => {
                        navigation.navigate("SearchByShape")
                    }}


                >
                    <Text style={style.viewalltext}>Search By Shape</Text>
                    <AntDesign name="right" style={style.viewallicon}></AntDesign>
                </TouchableOpacity>

                <ScrollView

                    contentContainerStyle={{ alignItems: "center", backgroundColor: Constant.backgroundcolor }} style={{ width: width }}>
                    <View style={{ ...style.main, minHeight: state == "appstore-o" ? height * .177 : height * .35 }}>

                        {
                            images.map((item, index) => (
                                <TouchableOpacity style={{ ...style.box, width: state == "appstore-o" ? width * .95 : width * .47, flexDirection: state == "appstore-o" ? "row" : "column", height: state == "appstore-o" ? height * .15 : height * .32, alignItems: state == "appstore-o" ? "center" : "flex-start", justifyContent: "space-between", }}

                                    onPress={() => {
                                        navigation.navigate("ShowProduct")
                                    }}

                                >
                                    {
                                        state != "appstore-o" ? <AntDesign name="hearto" style={style.iconfav}></AntDesign> : null
                                    }
                                    <Image
                                        source={require("../../android/app/src/assets/images/ima12.jpg")}
                                        style={{ ...style.imagebac, width: state == "appstore-o" ? "25%" : "100%", marginTop: state == "appstore-o" ? 0 : -5, height: state == "appstore-o" ? "80%" : "45%", }}
                                        resizeMode="contain"
                                    >

                                    </Image>


                                    <View style={{ marginLeft: state == "appstore-o" ? "-5%" : "2%" }}>
                                        <Text style={style.boxhead}>دواء لتخفيض الالم</Text>
                                        <Text style={style.boxtext}>Al Shifa Pharmacy</Text>
                                        <Text style={style.boxprice}>43.00 EGP</Text>
                                    </View>
                                    <TouchableOpacity style={{ ...style.addbutton, width: state == "appstore-o" ? width * .3 : "95%", marginLeft: state == "appstore-o" ? "10%" : "0%", marginBottom: state == "appstore-o" ? "0%" : "5%" }}>
                                        <SimpleLineIcons name="handbag" style={style.addbuttonicon}></SimpleLineIcons>
                                        <Text style={style.addbuttontext}>Add To Cart</Text>
                                    </TouchableOpacity>
                                    {
                                        state == "appstore-o" ? <AntDesign onPress={() => { alert("fav") }} name="hearto" style={{ ...style.iconfav, marginTop: -80, marginLeft: 0 }}></AntDesign> : null
                                    }
                                </TouchableOpacity>
                            ))
                        }

                    </View>
                </ScrollView>

            </View>
            {/* </ScrollView> */}
        </>
    )
}
const style = StyleSheet.create({
    contanier: {
        backgroundColor: Constant.backgroundcolor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    heading: {
        width: width * .95,
        flexDirection: "row",
        height: height * .08,
        justifyContent: "space-between",
        alignItems: "center"
    },
    touchicon: {
        height: height * .05,
        alignItems: "center",
        justifyContent: "center",
        width: width * .06,
        alignSelf: "center",
    }, iconsize: {
        fontSize: 14,
        color: Constant.black
    },
    Text: {
        color: "#29ABE2",
        fontSize: Constant.font_size_heading,
        fontFamily: Constant.font_reqular
    }, circle: {
        width: 10,
        height: 10,
        backgroundColor: Constant.text_color,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: -20,
        alignItems: "center",
        justifyContent: "center"
    },
    textcircle: {
        color: Constant.white,
        fontSize: 5,
        fontFamily: Constant.font_reqular
    },
    row2: {
        width: width * .95,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15
    }, viewsearch: {
        flexDirection: "row",
        width: width * .82,
        backgroundColor: "#f00",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: Constant.box
    }, Touchcode: {
        width: width * .14,
        alignItems: "center",
        justifyContent: "center"

    },
    main: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: width * .95,
        justifyContent: "space-between",
        marginTop: 10,
    },
    box: {
        backgroundColor: Constant.box,
        height: height * .32,
        width: width * .47,
        borderRadius: 5,
        paddingHorizontal: 7,
        marginVertical: 2

    },
    imagebac: {
        width: "100%",
        height: "45%",
        marginTop: -5
    },
    iconfav: {
        color: Constant.black,
        fontSize: 14,
        textAlign: "right",
        marginTop: 15,
        marginRight: 15
    },
    boxhead: {
        textAlign: "left",
        color: Constant.black,
        fontSize: 14,
        fontFamily: "Almarai-Regular",
    }, boxtext: {
        textAlign: "left",
        color: Constant.black,
        fontSize: 10,
        fontFamily: Constant.font_reqular,
        marginVertical: 4

    }, boxprice: {
        textAlign: "left",
        color: Constant.text_color,
        fontSize: 8,
        fontFamily: Constant.font_reqular

    }, addbutton: {
        width: "97%",
        height: height * .04,
        backgroundColor: Constant.text_color,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10
    },
    addbuttontext: {
        color: Constant.white,
        fontSize: 12,
        fontFamily: Constant.font_reqular
    },
    addbuttonicon: {
        fontSize: 10,
        fontFamily: Constant.font_reqular,
        marginHorizontal: 5,
        color: Constant.white
    }, rowphar: {
        width: width * .9,
        height: height * .07,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    }, viewall: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        marginRight: width * .03
    }, textphar: {
        fontSize: 18,
        fontFamily: Constant.font_reqular,
        color: Constant.black,

    },
    viewallicon: {
        fontSize: 10,
        fontFamily: Constant.font_medium,
        color: Constant.text_color
    },
    viewalltext: {
        fontSize: 10,
        fontFamily: Constant.font_medium,
        color: Constant.text_color,
        marginRight: 2
    },

})

export default Search


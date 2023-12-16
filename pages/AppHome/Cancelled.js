


import { Text, View, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ImageBackground, ScrollView } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import React, { useState, useEffect } from 'react';
import ImageZoomViewer from 'react-native-image-zoom-viewer';
function Cancelled({ navigation }) {

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

            <ScrollView>
                <View style={style.contanier}>










                    <ScrollView

                        contentContainerStyle={{ width: width, alignItems: "center" }}>

                        {
                            images.map((item, index) => (
                                <View style={{ ...style.box, alignItems: "center", justifyContent: "space-between", }}>
                                    <View style={style.row1}>
                                        <Text style={style.row1h}>Order #1524</Text>
                                        <Text style={style.row1t}>13/05/2021</Text>
                                    </View>

                                    <TouchableOpacity style={style.row1}
                                        onPress={() => {
                                            navigation.navigate("Trackorder")
                                        }}
                                    >
                                        <Text style={style.row1t}>Tracking number: </Text>
                                        <Text style={style.row2t}>IK287368838</Text>
                                        <AntDesign name="right" style={style.icon} />
                                    </TouchableOpacity>

                                    <View style={style.row1}>
                                        <View style={style.part1}>
                                            <Text style={style.row1t}>Quanlity:  </Text>
                                            <Text style={style.row2t}>2</Text>
                                        </View>
                                        <View style={style.part1}>
                                            <Text style={style.row1t}>Subtotal:  </Text>
                                            <Text style={style.row2t}>$110</Text>
                                        </View>
                                    </View>

                                    <View style={style.row1}>
                                        <Text style={style.textstate}>CANCELED</Text>
                                        <TouchableOpacity style={style.touchdetails}>
                                            <Text style={style.row2t}>Details</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))
                        }


                    </ScrollView>

                </View>
            </ScrollView>
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
    main: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: width,
        justifyContent: "space-between",
        marginTop: 10,
    },
    box: {
        backgroundColor: Constant.box,
        height: height * .22,
        width: width * .95,
        borderRadius: 10,
        paddingHorizontal: 7,
        marginVertical: 2,
        paddingVertical: 20,
        elevation: 2,
        shadowColor: "#eee"

    },
    icon: {
        color: "#000",
        fontSize: 14,
    },
    row1: {
        width: "92%",
        height: "20%",
        flexDirection: "row",
        justifyContent: "space-between"
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
        color: "#C50000"
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

})

export default Cancelled


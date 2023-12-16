import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, StatusBar, ScrollView, ActivityIndicator } from 'react-native'
import { TextInput, Checkbox, Appbar, safea } from 'react-native-paper';
import * as Constant from '../../android/app/src/consts/constant'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const { height, width } = Dimensions.get("screen")


export default function Privacy({navigation}) {
    const [loading, setLoading] = React.useState(false);
    const [arr, setarr] = useState([
        {
            text: "The personal information you provide is collected while using the MediMatch application and the collection and use of this information must be in accordance with the application's privacy policy."
        }, {
            text: " This Privacy Policy explains how personal data is collected and used and who can access it, as well as how it is stored and deleted."
        }, {
            text: "Cookies and similar technologies are used to collect information about application usage and improve user experience."
        }, {
            text: "Please note that the specific terms and conditions and privacy policy of the MediMatch application may vary between countries and may change over time. Therefore, you must read the terms of use and privacy policy of the MediMatch application before using it."
        }, {
            text: "Our Services may contain links to third-party applications, services, tools and websites that we do not control or maintain that may be used by the User; That is, we are not responsible for the security or privacy of any information these third parties collect. Therefore, the User should review the privacy policies applicable to the mentioned third-party services. This Privacy Policy does not cover information and data provided by the User to external companies."
        }, {
            text: "We may update this Privacy Policy from time to time as we deem necessary. In the event of any material changes to the privacy policy"
        }
    ])
    return (
        <>
            <StatusBar backgroundColor={Constant.backgroundcolor}></StatusBar>

            <View style={style.view}>
                <View style={style.header}>
                    <TouchableOpacity style={{ height: height * .1, width: width * .14, alignItems: "center", justifyContent: "center" }}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="left" style={{ ...style.iconsize }}></AntDesign>

                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, color: "#000", fontFamily: Constant.font_reqular }}>Privacy Policy</Text>
                    <TouchableOpacity
                        style={{ height: height * .1, width: width * .18, alignItems: "center", justifyContent: "center" }}
                        disabled={true}
                    >

                    </TouchableOpacity>
                </View>
                <View >
                    {
                        arr.map((item, index) => (
                            <View style={style.row}>
                                <View style={{ height: height * .03, width: width * .09, alignItems: "center", justifyContent: "center" }}>
                                    <MaterialIcons name="circle" style={{ fontSize: 5, color: "#000" }} />
                                </View>
                                <View style={{ flex: 1 }}>


                                    <Text style={style.text}>
                                        {item.text}
                                    </Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        </>)

}
const style = StyleSheet.create({
    view: {
        height: height * 1,
        width: width,
        alignItems: "center",
        backgroundColor: Constant.backgroundcolor
    },
    header: {
        height: height * .1,
        width: width,
        shadowColor: '#000',
        backgroundColor: 'white',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Constant.backgroundcolor

    },
    row: {
        flexDirection: "row",
        width: width * .95,
        minHeight: height * .1,
        marginVertical: height * .005
    }
    , text: {
        fontFamily: Constant.font_reqular,
        fontSize: 14,
        color: "#000",
    }, iconsize: {
        fontSize: 14,
        color: Constant.black
    },

})
import React, { useContext, useEffect, useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ToastAndroid,
    ActivityIndicator,
    Image
} from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const { height, width } = Dimensions.get("screen")
import ImagePicker from 'react-native-image-crop-picker'
import { logincontext } from '../../Navigation/AppNavigation'
export default function Profile({ navigation }) {
    const [editimage, seteditimage] = useState("data:image/png;base64,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")
    const { logout } = useContext(logincontext)
    return (
        <>

            <View style={style.view}>
                <TouchableOpacity style={style.icon}
                // onPress={() => navigation.navigate("Notification")}
                >
                    <Ionicons name="notifications-outline" style={{ fontSize: 20, color: "#000" }} />
                </TouchableOpacity>
                <View style={{ marginBottom: 20 }}>
                    <View style={{ marginBottom: 15 }}>
                        <TouchableOpacity style={style.image}>
                            <Image style={{ ...style.image }}
                                source={{
                                    uri: editimage,
                                }}>

                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                // height: height * .04,
                                // width: width * .09,
                                height: 25,
                                width: 25,
                                backgroundColor: Constant.text_color,
                                borderRadius: 30,
                                alignItems: "center",
                                justifyContent: "center",
                                alignSelf: "flex-end",
                                marginRight: width * .35,
                                marginTop: -height * .05,

                            }}
                            onPress={() => {
                                ImagePicker.openPicker({
                                    width: 300,
                                    height: 400,
                                    cropping: true
                                }).then(image => {
                                    seteditimage(image.path)


                                });
                            }}
                        >
                            <AntDesign name="edit" style={{ color: "#fff", fontSize: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={style.name}>Reham Gamal</Text>

                </View>



                <TouchableOpacity style={style.row}
                    onPress={() => navigation.navigate("Editpr")}
                >
                    <View style={style.touic}>
                        <EvilIcons name="user" style={{ fontSize: 25, color: "#000" }} />
                    </View>
                    <View style={{ flex: 4, justifyContent: "center" }}

                    >
                        <Text style={{ ...style.textdisplay, color: "#000" }}>Manage Account</Text>
                    </View>
                    <View style={{ flex: .4, alignItems: "center", justifyContent: "center" }}>
                        <EvilIcons name="chevron-right" style={{ fontSize: 25, color: "#000" }} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={style.row}
                    onPress={() => navigation.navigate("MyOrder")}
                >
                    <View style={style.touic}>
                        <AntDesign name="copy1" style={{ fontSize: 18, color: "#000" }} />
                    </View>
                    <View style={{ flex: 4, justifyContent: "center" }}

                    >
                        <Text style={{ ...style.textdisplay, color: "#000" }}>Order History </Text>
                    </View>
                    <View style={{ flex: .4, alignItems: "center", justifyContent: "center" }}>
                        <EvilIcons name="chevron-right" style={{ fontSize: 25, color: "#000" }} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={style.row}
                    onPress={() => navigation.navigate("Fav")}
                >
                    <View style={style.touic}>
                        <EvilIcons name="heart" style={{ fontSize: 25, color: "#000" }} />
                    </View>
                    <View style={{ flex: 4, justifyContent: "center" }}

                    >
                        <Text style={{ ...style.textdisplay, color: "#000" }}>My Favorites</Text>
                    </View>
                    <View style={{ flex: .4, alignItems: "center", justifyContent: "center" }}>
                        <EvilIcons name="chevron-right" style={{ fontSize: 25, color: "#000" }} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.row}
                    onPress={() => navigation.navigate("AllHospital")}
                >
                    <View style={style.touic}>
                        <FontAwesome6 name="hospital" style={{ fontSize: 15, color: "#000" }} />
                    </View>
                    <View style={{ flex: 4, justifyContent: "center" }}

                    >
                        <Text style={{ ...style.textdisplay, color: "#000" }}>All Hospitals</Text>
                    </View>
                    <View style={{ flex: .4, alignItems: "center", justifyContent: "center" }}>
                        <EvilIcons name="chevron-right" style={{ fontSize: 25, color: "#000" }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.row}
                    onPress={() => {
                        navigation.navigate("Privacy")
                    }}

                >
                    <View style={style.touic}>
                        <AntDesign name="Safety" style={{ fontSize: 20, color: "#000" }} />
                    </View>
                    <View style={{ flex: 4, justifyContent: "center" }}>
                        <Text style={{ ...style.textdisplay, color: "#000" }}>privacy policy</Text>
                    </View>
                    <View style={{ flex: .4, alignItems: "center", justifyContent: "center" }}>
                        <EvilIcons name="chevron-right" style={{ fontSize: 25, color: "#000" }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={style.row}
                    onPress={() => {

                        logout();
                        // navigation.navigate("AuthStack")

                    }}
                >
                    <View style={style.touic}>
                        <MaterialIcons name="power-settings-new" style={{ fontSize: 20, color: "#000" }} />
                    </View>
                    <View style={{ flex: 4, justifyContent: "center" }}
                    //  onPress={()=>navigation.navigate("Start_screen")}
                    // onPress={() => {
                    //     logout();
                    //     dispatch({
                    //         type: "LOGOUT",

                    //     })
                    // }}
                    // setlogin();


                    >
                        <Text style={{ ...style.textdisplay, color: "#000" }}>sign out</Text>
                    </View>
                    <View style={{ flex: .7, alignItems: "center", justifyContent: "center" }}>

                    </View>
                </TouchableOpacity>
            </View >
        </>)

}
const style = StyleSheet.create({
    view: {
        height: height,
        width: width,
        backgroundColor: "#fff"
    },
    icon: {
        height: height * .08,
        width: width * .2,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    image: {
        // height: height * .17,
        // width: width * .385,
        height: 100,
        width: 100,
        borderRadius: 500,
        alignSelf: "center",

    },
    name: {
        fontSize: 18,
        color: "#000",
        fontFamily: Constant.font_reqular,
        alignSelf: "center",
        marginVertical: height * .01
    },
    diaplay: {
        height: height * .06,
        width: width * .3,
        backgroundColor: Constant.color,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: "center",
        marginBottom: height * .02
    },
    textdisplay: {
        fontSize: 14,
        color: "#fff",
        fontFamily: "Almarai-Regular",
    }, row: {
        height: height * .055,
        width: width,
        flexDirection: "row",
        paddingHorizontal: 15
    },
    touic: {
        flex: .4,
        alignItems: "center",
        justifyContent: "center",
        marginRight:5
    }


})
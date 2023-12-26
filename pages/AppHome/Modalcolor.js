


import { Text, View, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ImageBackground, ScrollView } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import React, { useState, useEffect ,useContext} from 'react';
import Modal from 'react-native-modal'
import ImageZoomViewer from 'react-native-image-zoom-viewer';
import { ShapeContext } from '../../Context'


function Modalcolor() {

    const [listshape, setListshape] = useState([
        {
            color: "white",
            text: "White"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "red",
            text: "Red"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        }, {
            color: "orange",
            text: "Orange"
        },


        // Add more image objects as needed
    ]);
    const {setvisiblecolor}=useContext(ShapeContext)
    const {changevaluecolor}=useContext(ShapeContext)

   


    return (
        <>
            


            <View style={style.modal}>
                <AntDesign name="close" style={style.icon} onPress={()=>setvisiblecolor()}></AntDesign>
                <View style={style.main}>
                    {
                        listshape.map((item, index) => (
                            <TouchableOpacity style={style.choice} onPress={()=>changevaluecolor(item.text)}>
                                <View style={{...style.circle,backgroundColor:item.color}}></View>
                                <Text style={style.text}>{item.text}</Text>
                            </TouchableOpacity>
                        ))
                    }

                </View>
            </View>


        </>
    )
}
const style = StyleSheet.create({
    modal: {
        height: height * .55,
        width: width * .9,
        backgroundColor: Constant.white,
        padding: 20,
        borderRadius: 5
    }, main: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: width * .88,
        justifyContent: "space-around",
        alignSelf: "center",
        paddingTop: 10
    },
    choice: {
        width: width * .43,
        height: height * .04,
        borderWidth: .2,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5
    },
    image: {
        width: 20,
        height: 20,
        marginHorizontal: width * .05
    },
    text: {
        fontSize: 12,
        fontFamily: Constant.font_reqular,
        color: Constant.black
    }, icon: {
        fontSize: 14,
        color: Constant.black,
        textAlign: "right",
        marginRight: -width * .02

    },circle:{
        width:20,
        height:20,
        borderRadius:100,
        marginHorizontal: width * .05
    }

})

export default Modalcolor


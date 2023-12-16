


import { Text, View, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, FlatList,ImageBackground, ScrollView } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-native-modal'
import ImageZoomViewer from 'react-native-image-zoom-viewer';
// import { ShapeContext } from '../../context'
function SelectCategoryModel() {

    const [listshape, setListshape] = useState([
        {
            uri: require("../../android/app/src/assets/images/Other.png"),
            text: "None Selected"
        }, {
            uri: require("../../android/app/src/assets/images/3side.png"),
            text: "3 Sided"
        }, {
            uri: require("../../android/app/src/assets/images/circle.png"),
            text: "Round"
        }, {
            uri: require("../../android/app/src/assets/images/ellipse.png"),
            text: "Oval"
        }, {
            uri: require("../../android/app/src/assets/images/Home1.jpg"),
            text: "5 Sided"
        }, {
            uri: require("../../android/app/src/assets/images/6side.png"),
            text: "6 Sided"
        }, {
            uri: require("../../android/app/src/assets/images/Home1.jpg"),
            text: "7 Sided"
        }, {
            uri: require("../../android/app/src/assets/images/Rectangle.png"),
            text: "Rectangle"
        }, {
            uri: require("../../android/app/src/assets/images/Square.png"),
            text: "Square"
        }, {
            uri: require("../../android/app/src/assets/images/Diamond.png"),
            text: "Diamond"
        }, {
            uri: require("../../android/app/src/assets/images/Home1.jpg"),
            text: "Oblong"
        }, {
            uri: require("../../android/app/src/assets/images/Other.png"),
            text: "Other"
        },

        // Add more image objects as needed
    ]);

    // const { setvisiblecategory } = useContext(ShapeContext)
    // const { changevaluecategory } = useContext(ShapeContext)
    

    return (
        <>
            <StatusBar backgroundColor={Constant.text_color}></StatusBar>
            <View style={style.modal}>
                <AntDesign name="close" style={style.icon} onPress={() => setvisiblecategory()}></AntDesign>
                <View style={style.main}>
                    {
                        listshape.map((item, index) => (
                            <TouchableOpacity style={style.choice} onPress={() => changevaluecategory(item.text)}>
                                <Image style={style.image} source={item.uri} resizeMode="contain"></Image>
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
        height: height * .4,
        width: width * .9,
        backgroundColor: Constant.box,
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
        height: height * .045,
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

    },
})

export default SelectCategoryModel


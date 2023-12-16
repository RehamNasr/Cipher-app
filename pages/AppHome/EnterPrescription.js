


import { Text, View, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ImageBackground, ScrollView, Modal } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import React, { useState, useEffect, useRef } from 'react';
import ImageZoomViewer from 'react-native-image-zoom-viewer';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";

function EnterPrescription({navigation}) {

    const [images, setImages] = useState([
        // Add more image objects as needed
    ]);

    const [state, setstate] = useState("menufold")

    const change = () => {
        if (state == "menufold") {
            setstate("minussquareo")
        } else {
            setstate("menufold")

        }
    }
    let sheet = useRef();



    const opengalery = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(listimage => {
            let ima = [...images]
            for (var i = 0; i < listimage.length; i++) {
                ima.push(listimage[i])
            }

            setImages(ima)
            sheet.current.close()


        });
    }
    const opencamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(listimage => {
            let ima = [...images]
            ima.push(listimage)
            setImages(ima)
            console.log(listimage)
            sheet.current.close()


        });
    }

    const del = (index) => {
        let im = [...images]
        im.splice(index, 1)
        setImages(im)
    }
    const [path, setpath] = useState("")
    const [visible, setvisible] = useState("")
    const showmodal = (path) => {
        setpath(path)
        setvisible(true)
    }
    return (
        <>
            <StatusBar backgroundColor={Constant.backgroundcolor}></StatusBar>

            <View style={style.contanier}>

                <View style={style.heading}>
                    <TouchableOpacity style={style.touchicon}
                    onPress={() => {
                        navigation.goBack()
                    }}
                    
                    >
                        <AntDesign name="left" style={style.iconsize}></AntDesign>
                    </TouchableOpacity>
                    <Text style={style.Text}>Enter your prescription</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity style={style.touchicon} onPress={() => change()}>
                            <AntDesign name={state} style={{ ...style.iconsize, color: Constant.backgroundcolor }}></AntDesign>
                        </TouchableOpacity>
                    </View>
                </View>

                {
                    images.length == 0 ?
                        <TouchableOpacity style={style.main}
                            onPress={() => { sheet.current.open() }}
                        >
                            <Image style={style.image} source={require("../../android/app/src/assets/images/upload2.png")}></Image>
                            <Text style={style.Text2}>Upload your prescription</Text>
                        </TouchableOpacity> :
                        <View style={style.viewlist}>
                            {
                                images.map((item, index) => (
                                    <>
                                        <TouchableOpacity onPress={
                                            () => {
                                                showmodal(item.path)
                                            }}>


                                            <Image source={{ uri: item.path }} style={style.image3}>

                                            </Image>
                                            <TouchableOpacity onPress={() => del(index)}>
                                                <AntDesign name="delete" style={style.close}></AntDesign>
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                    </>

                                ))
                            }
                            <TouchableOpacity style={style.boxadd} onPress={() => { sheet.current.open() }}>
                                <AntDesign name="pluscircleo" style={{ fontSize: 20, color: "black" }}></AntDesign>
                            </TouchableOpacity>

                        </View>
                }
                {
                    images.length ?
                        <TouchableOpacity style={{ ...Constant.style.button, backgroundColor: Constant.text_color,position:"absolute",bottom:10 }}>
                            <Text style={{ ...style.Text, color: "white" }}>Buy</Text>
                        </TouchableOpacity> : null
                }

                <RBSheet
                    ref={sheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    customStyles={{
                        container: style.sheets, wrapper: {
                            // backgroundColor: "transparent"
                        }, draggableIcon: {
                            backgroundColor: Constant.box,
                            width: width * .2
                        }
                    }}
                >
                    <View style={style.mainbox}>
                        <TouchableOpacity style={style.boxaction} onPress={() => { opengalery() }}>
                            <Image style={style.image2} source={require("../../android/app/src/assets/images/image.png")} resizeMode="contain"></Image>
                            <Text style={style.Text3}>upload image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.boxaction} onPress={() => { opencamera() }}>
                            <Image style={style.image2} source={require("../../android/app/src/assets/images/scan.png")} resizeMode="contain"></Image>
                            <Text style={style.Text3}>upload image</Text>
                        </TouchableOpacity>
                    </View>
                </RBSheet>


                <Modal visible={visible}>
                    <TouchableOpacity onPress={() => { setvisible(false) }}>
                        <Image style={{ height: height, width: width }} source={{ uri: path }}>

                        </Image>
                    </TouchableOpacity>
                </Modal>




            </View>

        </>
    )
}
const style = StyleSheet.create({
    contanier: {
        backgroundColor: Constant.backgroundcolor,
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
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
        width: width * .08,
        alignSelf: "center",
    }, iconsize: {
        fontSize: 14,
        color: Constant.black
    },
    Text: {
        color: Constant.black,
        fontSize: 15,
        fontFamily: Constant.font_reqular
    }, main: {
        height: height * .7,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: height * .1,
        width: width * .3,
        marginVertical: 5
    },
    Text2: {
        color: Constant.black,
        fontSize: 13,
        fontFamily: Constant.font_reqular
    },
    sheets: {
        backgroundColor: Constant.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }, Text3: {
        color: Constant.black,
        fontSize: 12,
        fontFamily: Constant.font_reqular
    }, mainbox: {
        width: width * .9,
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "center", paddingTop: 20
    },
    boxaction: {
        height: height * .2,
        width: width * .4,
        backgroundColor: Constant.white,
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        borderRadius: 5
    }, image2: {
        height: height * .06,
        width: width * .18,
        marginVertical: 5,
        marginBottom: 10
    }, image3: {
        height: height * .18,
        width: width * .285,
        borderRadius: 2,
        marginVertical: 5,
        marginBottom: 10,
        marginLeft: 5
    }, viewlist: {
        flexDirection: "row",
        flexWrap: "wrap",
        // justifyContent: "space-be",
        width: width * .9
    }, boxadd: {
        height: height * .18,
        width: width * .287,
        borderRadius: 5,
        marginVertical: 5,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Constant.backgroundcolor,
        elevation: 1,
        shadowColor: Constant.text_color,
        marginLeft: 5
    }, close: {
        fontSize: 11,
        color: "#f00",
        textAlign: "right",

    }

})

export default EnterPrescription


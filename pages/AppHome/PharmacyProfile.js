


import { Text, View, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ImageBackground, ScrollView, Linking } from 'react-native'
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
function PharmacyProfile({ navigation }) {
    const [state, setstate] = useState("appstore-o")
    const change = () => {
        if (state == "appstore-o") {
            setstate("bars")
        } else {
            setstate("appstore-o")

        }
    }
    const [images, setImages] = useState([
        { uri: require("../../android/app/src/assets/images/phlogo2.jpg") },
        { uri: require("../../android/app/src/assets/images/Home2.jpg") },
        { uri: require("../../android/app/src/assets/images/phlogo1.png") },
        { uri: require("../../android/app/src/assets/images/Home4.jpg") },
        // Add more image objects as needed
    ]);


    const [currentIndex, setCurrentIndex] = useState(0);

    const actions = [
        {
            icon: require("../../android/app/src/assets/images/chat.png"),
            name: "message",
            position: 1,
            color: Constant.text_color
        },
        {
            icon: require("../../android/app/src/assets/images/phone-call.png"),
            name: "call",
            position: 2,
            color: Constant.text_color,
        },

    ];

    const [showcategory, setshowcategory] = useState(false)
    const [valuecategory, setvaluecategory] = useState("")

    const setvisiblecategory = () => {
        if (showcategory == true) {
            setshowcategory(false)
        } else {
            setshowcategory(true)

        }
    }


    const changevaluecategory = (value) => {
        setvaluecategory(value)
        setshowcategory(false)
    }

    const countries = ["Pain relieving medications", "Pain relieving medications", "Pain relieving medications", "Pain relieving medications"]
    return (
        <>
            <ShapeContext.Provider value={{ changevaluecategory, setvisiblecategory }}>
             

                <View style={style.contanier}>

                    <View style={style.heading}>
                        <TouchableOpacity style={style.touchicon}
                            onPress={() => {
                                navigation.goBack()
                            }}

                        >
                            <AntDesign name="left" style={{ ...style.iconsize }}></AntDesign>

                        </TouchableOpacity>

                    </View>




                    <TouchableOpacity style={style.box2}>
                        <Image
                            source={require("../../android/app/src/assets/images/phlogo2.jpg")}
                            style={style.imagephar}
                        />
                        <View style={style.part2}>
                            <Text style={style.box2header}>El Hana Pharmacy</Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign style={style.box2icon} name="enviromento" />
                                <Text style={style.box2space}>3.6 km شارع محمد الحصري ,زفتي</Text>
                            </View>
                        </View>
                        <View style={style.part3main}>
                            <View style={style.part3}>
                                <AntDesign style={{ ...style.box2icon, color: "#FF8A00" }} name="star" />
                                <Text style={style.box2space}>4.0</Text>
                            </View>
                            <TouchableOpacity style={style.touchrate}

                                onPress={() => {
                                    navigation.navigate("Rate")
                                }}>
                                <Text style={{ ...style.box2space, color: Constant.white }}>Rate</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>



                    <View style={style.row2}>
                        <View style={style.viewsearch}>
                            <TextInput
                                placeholder='name'
                                placeholderTextColor={Constant.primary_color}
                                style={{ ...Constant.style.Textinput, width: width * .46, borderWidth: 0, height: height * .05 }}
                            />
                            <AntDesign name="search1" style={{ ...style.iconsize, color: Constant.primary_color }}></AntDesign>
                        </View>
                        {/* <TouchableOpacity
                        onPress={() => {
                            setvisiblecategory(true)
                        }}>
                        <TextInput
                            style={{ ...style.box2space, color: Constant.text_color, fontFamily: Constant.font_medium }}
                            editable={false}
                            value={valuecategory}
                            placeholderTextColor={Constant.text_color}

                            placeholder='Select Category'
                        >
                        </TextInput>

                    </TouchableOpacity> */}
                        <SelectDropdown
                            data={countries}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item
                            }}
                            buttonTextStyle={style.buttonTextStyle}
                            dropdownStyle={style.dropdownStyle}
                            dropdownOverlayColor={{ backgroundColor: "red" }}
                            rowStyle={style.rowStyle}
                            rowTextStyle={style.rowTextStyle}
                            buttonStyle={style.buttonStyle}
                            selectedRowStyle={{ backgroundColor: Constant.text_color }}
                            selectedRowTextStyle={{ fontSize: 12, color: "white" }}
                            search={true}
                            searchInputStyle={style.searchInputStyle}
                            searchInputTxtStyle={{ fontSize: 12, fontFamily: Constant.font_reqular }}
                            searchPlaceHolder="search"
                            searchPlaceHolderColor={Constant.primary_color}
                        />
                    </View>

                    <TouchableOpacity style={{ ...Constant.style.button, backgroundColor: Constant.text_color, marginBottom: 15 }}>
                        <Text style={style.Text}>SEARCH</Text>
                    </TouchableOpacity>





                    <TouchableOpacity style={style.viewall} onPress={() => change()}>
                        <TouchableOpacity style={style.touchicon} onPress={() => change()}>
                            <AntDesign name={state} style={style.iconsize}></AntDesign>
                        </TouchableOpacity>
                    </TouchableOpacity>



                    <ScrollView
                        contentContainerStyle={{ alignItems: "center", backgroundColor: Constant.backgroundcolor }} style={{ width: width }}>

                        <View style={{ ...style.main, minHeight: state == "appstore-o" ? height * .177 : height * .35 }}>

                            {
                                images.map((item, index) => (
                                    <View style={{ ...style.box, width: state == "appstore-o" ? width * .95 : width * .47, flexDirection: state == "appstore-o" ? "row" : "column", height: state == "appstore-o" ? height * .15 : height * .32, alignItems: state == "appstore-o" ? "center" : "flex-start", justifyContent: "space-between", }}>
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
                                            state == "appstore-o" ? <AntDesign onPress={() => { alert("fav") }} name="hearto" style={{ ...style.iconfav, marginTop: -80 }}></AntDesign> : null
                                        }
                                    </View>
                                ))
                            }

                        </View>
                    </ScrollView>

                </View>

                <FloatingAction
                    actions={actions}
                    color={Constant.text_color}
                    distanceToEdge={width * .05}
                    floatingIcon={require("../../android/app/src/assets/images/more.png")}
                    onPressItem={name => {
                        console.log(`selected button: ${name}`);
                        if (name == "message") {
                            Linking.openURL(`whatsapp://send?phone=${"+201158659437"}`)
                        } else {
                            Linking.openURL(`tel:${"454545"}`)
                        }
                    }}
                    buttonSize={50}
                    shadow={{ shadowOpacity: 1, shadowOffset: { width: 5, height: 5 }, shadowColor: Constant.black, shadowRadius: 5 }}
                />
                <Modal isVisible={showcategory}>
                    <SelectCategoryModel />
                </Modal>
            </ShapeContext.Provider>
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
        height: height * .07,
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
        color: Constant.white,
        fontSize: 15,
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
        width: width * .55,
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: Constant.box
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
        flexWrap: "wrap",
        height: height * .73,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },


    box2: {
        height: height * .1,
        width: width * .95,
        borderRadius: 10,
        flexDirection: "row",
        marginVertical: 3,
        alignItems: "center",
    },
    imagephar: {
        height: "85%",
        width: "20%",
        borderRadius: 100
    },
    box2image: {
        height: "90%",
        width: "25%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    part2: {
        paddingLeft: 5,
        justifyContent: "center",
        justifyContent: "space-around",
        height: "50%",
        minWidth: width * .55,
        maxWidth: width * .6,
    },
    box2header: {
        fontSize: 14,
        fontFamily: Constant.font_reqular,
        color: Constant.black,
    }, box2icon: {
        fontSize: 8,
        fontFamily: Constant.font_reqular,
        color: Constant.black
    }, box2space: {
        fontSize: 10,
        fontFamily: Constant.font_reqular,
        color: Constant.black,
        marginLeft: 5
    },
    part3main: {
        alignItems: "center",
        height: "55%",
        justifyContent: "space-around"
    },
    part3: {
        flexDirection: "row",
        alignItems: "center"
    }, touchrate: {
        width: width * .16,
        height: height * .03,
        borderRadius: 5,
        backgroundColor: Constant.text_color,
        alignItems: "center",
        justifyContent: "center",
    }, main: {
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
        width: "95%",
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
    }, viewall: {
        height: 40,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "right",
        width: width * .93
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
    }, buttonTextStyle:
    {
        fontSize: 10,
        fontFamily: Constant.font_medium,
        color: Constant.text_color
    }, dropdownStyle: {
        backgroundColor: Constant.box,
        fontSize: 5
    }, rowStyle: {
        backgroundColor: Constant.box,
        fontSize: 5,
        height: 30,
        borderWidth: 0,
        borderColor: Constant.backgroundcolor
    }, rowTextStyle: {
        fontSize: 10,
        fontFamily: Constant.font_reqular,
    }, buttonStyle: {
        width: width * .39,
        backgroundColor: Constant.box,
        borderRadius: 5,
        height: height * .06
    }, searchInputStyle: {
        fontSize: 5,
        height: 25,
        backgroundColor: Constant.box,
    }


})

export default PharmacyProfile
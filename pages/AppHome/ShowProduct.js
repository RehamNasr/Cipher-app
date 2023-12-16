


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
function ShowProduct({ navigation }) {
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
        { uri: require("../../android/app/src/assets/images/phlogo1.png") },
        { uri: require("../../android/app/src/assets/images/Home4.jpg") },
        // Add more image objects as needed
    ]);
    const [numline, setnumline] = useState(2)

    const [currentIndex, setCurrentIndex] = useState(0);

    const actions = [
        {
            icon: require("../../android/app/src/assets/images/chat.png"),
            name: "bt_accessibility",
            position: 1,
            color: Constant.text_color
        },
        {
            icon: require("../../android/app/src/assets/images/phone-call.png"),
            name: "bt_language",
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


            <StatusBar backgroundColor={Constant.backgroundcolor}></StatusBar>

            <View style={style.contanier}>
                <ScrollView style={{
                    marginHorizontal: 20,
                }}>
                    <View style={style.heading}>
                        <TouchableOpacity style={style.touchicon}
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                            <AntDesign name="left" style={{ ...style.iconsize }}></AntDesign>

                        </TouchableOpacity>

                    </View>




                    <Image
                        source={require("../../android/app/src/assets/images/im.jpg")}
                        style={style.imagephar}
                        resizeMode="contain"
                    />


                    <View style={style.rowtitle}>
                        <Text style={style.Text}>La Roche Effaclar Mossant Gel 400ml</Text>
                        <View style={style.part3}>
                            <AntDesign style={{ ...style.box2icon, color: "#FF8A00" }} name="star" />
                            <Text style={style.box2space}>4.0</Text>
                        </View>
                    </View>
                    <Text style={style.text2}>صيدليه الشفاء</Text>
                    <Text style={style.texth}>Description</Text>
                    <Text style={style.textt} numberOfLines={numline} onPress={() => {
                        if (numline == 2) {
                            setnumline(100)
                        } else {
                            setnumline(2)
                        }

                    }}>ناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة      إيبسوم لأنها تعطي توزيعاَ طبيعياَ</Text>
                    <View style={style.row}>
                        <Text style={style.texth2}>Product Code</Text>
                        <Text style={style.textt2}>3337842125454545</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.texth2}>Type</Text>
                        <Text style={style.textt2}>Gel cleanser</Text>
                    </View>

                    <View style={style.row}>
                        <Text style={style.texth2}>Product Origin</Text>
                        <Text style={style.textt2}>Imported</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.texth2}>Effective Material</Text>
                        <Text style={style.textt2}>typically includes key ingredients such as Zinc PCA for sebum regulation, Coco-Betaine as a mild surfactant, Sodium Laureth Sulfate for effective cleansing, Poloxamer for removing impurities, Glycerin for maintaining skin moisture, Citric Acid for pH balance, and potentially Salicylic Acid for exfoliation and unclogging pores. It is designed for oily and sensitive skin, particularly those prone to acne. Keep in mind that formulations can be updated, so it's essential to check the latest product packaging or the manufacturer's website for the most accurate and up-to-date ingredient information. Individual skin reactions can vary, so a patch test is advisable, and if you have specific concerns, consulting with a dermatologist is recommended.</Text>
                    </View>





                    <View style={{ ...style.row, borderColor: Constant.backgroundcolor, marginTop: 20 }}>
                        <Text style={{ fontSize: 18, color: Constant.black, fontFamily: Constant.font_reqular }}>Similar products</Text>
                        <Text style={{ fontSize: 12, color: Constant.text_color, fontFamily: Constant.font_reqular }}>view all</Text>


                    </View>
                    <View style={{ ...style.main }}>

                        {
                            images.map((item, index) => (
                                <TouchableOpacity style={{ ...style.box, }}
                                    onPress={() => {
                                        navigation.navigate("ShowProduct")
                                    }}

                                >
                                    <AntDesign name="hearto" style={style.iconfav}></AntDesign>

                                    <Image
                                        source={require("../../android/app/src/assets/images/ima12.jpg")}
                                        style={{ ...style.imagebac, }}
                                        resizeMode="contain"
                                    >

                                    </Image>


                                    <View >
                                        <Text style={style.boxhead}>دواء لتخفيض الالم</Text>
                                        <Text style={style.boxtext}>Al Shifa Pharmacy</Text>
                                        <Text style={style.boxprice}>43.00 EGP</Text>
                                    </View>
                                    <TouchableOpacity style={{ ...style.addbutton }}>
                                        <SimpleLineIcons name="handbag" style={style.addbuttonicon}></SimpleLineIcons>
                                        <Text style={style.addbuttontext}>Add To Cart</Text>
                                    </TouchableOpacity>

                                </TouchableOpacity>
                            ))
                        }

                    </View>
                </ScrollView>

                <View style={{ ...style.rowlast, }}>
                    <View>
                        <Text style={style.textp}>Price</Text>
                        <Text style={{ ...style.textp2, textAlign: "left" }}>260.00 <Text style={style.textte}>EGP</Text></Text>
                    </View>
                    <TouchableOpacity style={style.checktouch}
                        onPress={() => {
                            // navigation.navigate("Check")
                        }}>
                        <Text style={style.checktext}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>



        </>
    )
}
const style = StyleSheet.create({
    contanier: {
        backgroundColor: Constant.backgroundcolor,
        alignItems: 'center',
        flex: 1,
        // paddingBottom: 10

    },
    heading: {
        width: width * .9,
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
    }, imagephar: {
        width: width,
        height: height * .4,
        alignSelf: "center",
        marginBottom: 20,
        marginLeft: -width * .05,

    }, rowtitle: {
        flexDirection: "row",
        width: width * .85,
        justifyContent: "space-between"
    },
    Text: {
        color: Constant.black,
        fontSize: 14,
        fontFamily: Constant.font_reqular
    }, text2: {
        color: Constant.black,
        fontSize: 12,
        fontFamily: Constant.font_reqular,
        textAlign: "left",
        width: width * .85,
        marginVertical: 5
    }, texth: {
        color: "#474340",
        fontSize: 12,
        fontFamily: Constant.font_reqular,
        textAlign: "left",
        width: width * .85,
        marginVertical: 5,
        marginTop: 20
    }, textt: {
        color: "#474340",
        fontSize: 10,
        fontFamily: Constant.font_reqular,
        textAlign: "left",
        width: width * .85,
        marginVertical: 5,
        marginBottom: 10

    }, row: {
        flexDirection: "row",
        width: width * .85,
        justifyContent: "space-between",
        paddingVertical: 5,
        borderBottomWidth: .2,
        borderColor: "#474340",
        alignItems: "center",
    }, texth2: {
        color: "#474340",
        fontSize: 12,
        fontFamily: Constant.font_reqular,
        marginVertical: 5
    }, textt2: {
        color: "#474340",
        fontSize: 10,
        fontFamily: Constant.font_reqular,
        textAlign: "right",
        width: width * .4

    },
    row2: {
        width: width * .89,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 15
    }, viewsearch: {
        flexDirection: "row",
        width: width * .5,
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
        width: width * .9,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },


    box2: {
        height: height * .1,
        width: width * .89,
        borderRadius: 10,
        flexDirection: "row",
        marginVertical: 3,
        alignItems: "center",
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
        width: width * .91,
        justifyContent: "space-between",
        marginTop: 10,
    },
    box: {
        backgroundColor: Constant.box,
        height: height * .32,
        width: width * .45,
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
        height: 15,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        marginRight: width * .06
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
        width: width * .37,
        backgroundColor: Constant.box,
        borderRadius: 5,
        height: height * .05
    }, searchInputStyle: {
        fontSize: 5,
        height: 25,
        backgroundColor: Constant.box,
    }, rowlast: {
        flexDirection: "row",
        width: width ,
        justifyContent: "space-between",
        paddingVertical: 5,
        alignItems: "center",
        paddingVertical:15,
        paddingHorizontal:20,
        elevation:1,
        shadowColor:Constant.text_color
    }, checktouch: {
        height: height * .05,
        width: width * .42,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Constant.text_color,
        borderRadius: 5
    }, checktext: {
        color: Constant.white,
        fontSize: 13,
        fontFamily: Constant.font_reqular,
    }, textp: {
        color: "#474340",
        fontSize: 12,
        fontFamily: Constant.font_reqular,
    }, textp2: {
        color: "#474340",
        fontSize: 15,
        fontFamily: Constant.font_reqular,
        textAlign: "right",
        width: width * .4

    },


})

export default ShowProduct
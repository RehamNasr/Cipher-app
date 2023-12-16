


import { Text, View, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ImageBackground, ScrollView } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import React, { useState, useEffect } from 'react';
import ImageZoomViewer from 'react-native-image-zoom-viewer';
function Home({ navigation }) {

    const [images, setImages] = useState([
        { uri: require("../../android/app/src/assets/images/Home1.jpg") },
        { uri: require("../../android/app/src/assets/images/Home2.jpg") },
        { uri: require("../../android/app/src/assets/images/Home3.jpg") },
        { uri: require("../../android/app/src/assets/images/Home4.jpg") },
        // Add more image objects as needed
    ]);
    const [images2, setImages2] = useState([
        { uri: require("../../android/app/src/assets/images/phlogo1.png") },
        { uri: require("../../android/app/src/assets/images/phlogo2.jpg") },

        // Add more image objects as needed
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            // Scroll to the next image after a certain time (e.g., 5 seconds)
            if (currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                // If at the last image, reset to the first image
                setCurrentIndex(0);
            }
        }, 5000); // 5000 milliseconds = 5 seconds

        // Clear the timeout to avoid memory leaks
        return () => clearTimeout(timer);
    }, [currentIndex, images])

    const renderItem = ({ item }) => (

        <Image
            source={images[currentIndex].uri}
            style={style.image}
        >

        </Image>
    );
    const renderItemmain = ({ item }) => (
        <TouchableOpacity style={style.box}
        onPress={()=>{
            navigation.navigate("ShowProduct")
        }}
        
        >
            <AntDesign name="hearto" style={style.iconfav}></AntDesign>
            <Image
                source={require("../../android/app/src/assets/images/ima12.jpg")}
                style={style.imagebac}
                resizeMode="contain"
            >

            </Image>


            <Text style={style.boxhead}>دواء لتخفيض الالم</Text>
            <Text style={style.boxtext}>Al Shifa Pharmacy</Text>
            <Text style={style.boxprice}>43.00 EGP</Text>
            <TouchableOpacity style={style.addbutton}>
                <SimpleLineIcons name="handbag" style={style.addbuttonicon}></SimpleLineIcons>
                <Text style={style.addbuttontext}>Add To Cart</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
    return (
        <>
            <StatusBar backgroundColor={Constant.backgroundcolor}></StatusBar>
            <ScrollView contentContainerStyle={{alignItems:"center",backgroundColor:Constant.backgroundcolor}} style={{width:width}}>
                <View style={style.contanier}>

                    <View style={style.heading}>
                        <TouchableOpacity style={style.touchicon} >
                            <AntDesign name="shoppingcart" style={{ ...style.iconsize, color: Constant.backgroundcolor }}></AntDesign>
                            <View style={{ ...style.circle, backgroundColor: Constant.backgroundcolor }}>
                                <Text style={style.textcircle}>2</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={style.Text}>MediMatch</Text>
                        <TouchableOpacity style={style.touchicon}
                        disabled={true}
                         onPress={() => {
                            navigation.navigate("Cart1")
                        }}
                        >

                            <AntDesign name="shoppingcart" style={{...style.iconsize,color:Constant.backgroundcolor}}></AntDesign>
                            <View style={style.circle}>
                                <Text style={style.textcircle}>2</Text>
                            </View>
                        </TouchableOpacity>
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
                        <AntDesign name="barcode" style={{...style.iconsize, width:width*.08,}}
                            onPress={() => {
                                navigation.navigate("Barcode")
                            }}></AntDesign>
                    </View>

                    <View style={style.rowimages}>
                        <FlatList
                            data={images}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            pagingEnabled
                            initialScrollIndex={currentIndex}
                        />
                    </View>

                    <View style={style.main}>
                        <FlatList
                            data={images}
                            renderItem={renderItemmain}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            pagingEnabled
                            initialScrollIndex={currentIndex}
                        />
                    </View>

                    <TouchableOpacity style={{ ...Constant.style.button, backgroundColor: Constant.text_color, flexDirection: "row", marginTop: 10 }}

                        onPress={() => {
                            navigation.navigate("EnterPrescription")
                        }}

                    >
                        <AntDesign name="camera" style={style.camera}></AntDesign>
                        <Text style={style.textpercep}>Enter your prescription</Text>
                    </TouchableOpacity>

                    <View style={style.rowphar}>
                        <Text style={style.textphar}> Pharmacies</Text>
                        <TouchableOpacity style={style.viewall}
                            onPress={() => {
                                navigation.navigate("AllPharmacy")
                            }}>
                            <Text style={style.viewalltext}>view all</Text>
                            <AntDesign name="right" style={style.viewallicon}></AntDesign>
                        </TouchableOpacity>
                    </View>


                    <View style={style.main2}>
                        {
                            images2.map((item, index) => (
                                <TouchableOpacity style={style.box2}
                                    onPress={() => {
                                        navigation.navigate("PharmacyProfile")
                                    }}

                                >
                                    <Image
                                        source={item.uri}
                                        style={style.box2image}
                                    />
                                    <View style={style.part2}>
                                        <Text style={style.box2header}>El Hana Pharmacy</Text>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <AntDesign style={style.box2icon} name="enviromento" />
                                            <Text style={style.box2space}>3.6 km</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }


                    </View>
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
    heading: {
        width: width * .94,
        flexDirection: "row",
        height: height * .09,
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
        color:Constant.black,
        fontSize: Constant.font_size_heading,
        fontFamily: Constant.font_reqular
    }, circle: {
        width: 10,
        height: 10,
        backgroundColor: Constant.backgroundcolor,
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
    },
    rowimages: {
        width: width * .95,

    },
    image: {
        width: width * .95,
        height: height * .17,
        borderRadius: 10,
        elevation: 1,
        marginHorizontal: 1
    },
    main: {
        width: "95%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10
    },

    box: {
        backgroundColor: Constant.box,
        height: height * .32,
        width: width * .47,
        borderRadius: 5,
        paddingHorizontal: 7,
        marginRight: 2

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
        height: "15%",
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
    }, camera: {
        fontSize: 15,
        color: Constant.white,
        marginHorizontal: 10
    },
    textpercep: {
        fontSize: 14,
        fontFamily: Constant.font_reqular,
        color: Constant.white,
    }, rowphar: {
        width: width * .95,
        height: height * .07,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    }, viewall: {
        flexDirection: "row",
        alignItems: "center",
    }, textphar: {
        fontSize: 18,
        fontFamily: Constant.font_reqular,
        color: Constant.black
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
    }, main2: {
        flexDirection: "row",
        width: width * .95,
        // height: height * .18,
        paddingBottom: 10,
        justifyContent: "space-between"
    },
    box2: {
        height: height * .1,
        width: width * .47,
        backgroundColor: Constant.box,
        borderRadius: 10,
        flexDirection: "row"
    },
    box2image: {
        height: "100%",
        width: "45%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    part2: {
        paddingLeft: 5,
        justifyContent: "center",
        justifyContent: "space-around"
    },
    box2header: {
        fontSize: 12,
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
    }

})

export default Home
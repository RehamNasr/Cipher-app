


import { Text, View, StyleSheet, StatusBar, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ImageBackground, ScrollView } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import React, { useState, useEffect } from 'react';
import ImageZoomViewer from 'react-native-image-zoom-viewer';
function AllPharmacy({navigation}) {

    const [images, setImages] = useState([
        { uri: require("../../android/app/src/assets/images/phlogo2.jpg") },
        { uri: require("../../android/app/src/assets/images/Home2.jpg") },
        { uri: require("../../android/app/src/assets/images/phlogo1.png") },
        { uri: require("../../android/app/src/assets/images/Home4.jpg") },
        { uri: require("../../android/app/src/assets/images/Home4.jpg") },
        { uri: require("../../android/app/src/assets/images/Home4.jpg") },
        { uri: require("../../android/app/src/assets/images/Home4.jpg") },
        // Add more image objects as needed
    ]);


    const [currentIndex, setCurrentIndex] = useState(0);




    const renderItemmain = ({ item }) => (
        <TouchableOpacity style={style.box2}
        onPress={()=>{
            navigation.navigate("PharmacyProfile")
        }}
        
        >
            <Image
                source={item.uri}
                style={style.box2image}
                resizeMode="contain"

            />
            <View style={style.part2}>
                <Text style={style.box2header}>El Hana Pharmacy</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntDesign style={style.box2icon} name="enviromento" />
                    <Text style={style.box2space}>3.6 km شارع محمد الحصري ,زفتي</Text>
                </View>
            </View>
            <View style={style.part3}>


                <AntDesign style={{ ...style.box2icon, color: "#FF8A00" }} name="star" />
                <Text style={style.box2space}>4.0</Text>

            </View>
        </TouchableOpacity>
    )
    return (
        <>
           
      
                <View style={style.contanier}>

                    <View style={style.heading}>
                        <TouchableOpacity style={style.touchicon}
                        
                        
                        onPress={()=>{
                            navigation.goBack()
                        }}>
                            <AntDesign name="left" style={{ ...style.iconsize }}></AntDesign>

                        </TouchableOpacity>
                        <Text style={style.Text}>Pharmacies</Text>
                        <TouchableOpacity style={style.touchicon}>

                            <AntDesign name="shoppingcart" style={{ ...style.iconsize, color: Constant.backgroundcolor }}></AntDesign>


                        </TouchableOpacity>
                    </View>

                 
                        <View style={style.viewsearch}>
                            <TextInput
                                placeholder='name'
                                placeholderTextColor={Constant.primary_color}
                                style={{ ...Constant.style.Textinput, width: width * .85, borderWidth: 0 }}
                            />
                            <AntDesign name="search1" style={{ ...style.iconsize, color: Constant.primary_color }}></AntDesign>
                        </View>

                    










                    <View style={style.main}>
                        <ScrollView >
                        <FlatList
                            renderItem={renderItemmain}
                            data={images}
                            keyExtractor={(item, index) => index.toString()}

                            pagingEnabled
                            initialScrollIndex={currentIndex}
                            scrollEnabled={true}
                        >

                        </FlatList>

                        </ScrollView>
                    </View>

                </View>
            
        </>
    )
}
const style = StyleSheet.create({
    contanier: {
        backgroundColor: Constant.backgroundcolor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:50

    },
    heading: {
        width: width * .95,
        flexDirection: "row",
        height: height * .1,
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
        color: Constant.black,
        fontSize: 17,
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
        width: width * .95,
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: Constant.box,
        elevation:.2,
        marginBottom:20
    },
    
    main: {
        width: width * .95,
        flexWrap: "wrap",
        height: height*.73,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom:70

    },


    box2: {
        height: height * .15,
        width: width * .94,
        backgroundColor: Constant.box,
        borderRadius: 10,
        flexDirection: "row",
        marginVertical: 3,
        backgroundColor: Constant.box,
        alignItems: "center",
        elevation: 1
    },
    box2image: {
        height: "100%",
        width: "35%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    part2: {
        paddingLeft: 10,
        justifyContent: "center",
        justifyContent: "space-around",
        height: height * .1,
        width: width * .47
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
    part3: {
        flexDirection: "row",
        alignItems: "center"
    }

})

export default AllPharmacy
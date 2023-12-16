


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
import { ShapeContext } from '../../context'
import SelectDropdown from 'react-native-select-dropdown'
import LottieView from 'lottie-react-native'
import CheckBox from 'react-native-check-box'
function Check({ navigation }) {

    const [num, setnum] = useState(0)
    const rating = (index) => {
        setnum(index)
    }
    const [valuerate, setvaluerate] = useState("")
    const countries = ["cairo", "cairo", "cairo", "cairo"]
    const [visible, setvisible] = useState(false)
    const [isChecked, setisChecked] = useState(false)
    return (
        <>

            <StatusBar backgroundColor={Constant.backgroundcolor}></StatusBar>
            <ScrollView >
                <View style={style.contanier}>

                    <View style={style.heading}>
                        <TouchableOpacity style={style.touchicon}
                            onPress={() => {
                                navigation.goBack(navigation)
                            }}

                        >
                            <AntDesign name="left" style={{ ...style.iconsize }}></AntDesign>

                        </TouchableOpacity>
                        <Text style={style.Text}>Check out</Text>
                        <TouchableOpacity style={style.touchicon}>

                            <AntDesign name="shoppingcart" style={{ ...style.iconsize, color: Constant.backgroundcolor }}></AntDesign>


                        </TouchableOpacity>
                    </View>

                    <Text style={style.Texth}>Shipping</Text>
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
                        defaultButtonText="Country *"

                    />
                    <TextInput
                        placeholder='Street name *'
                        style={style.TextInput}
                        placeholderTextColor={Constant.primary_color}
                    />
                    <TextInput
                        placeholder='City *'
                        style={style.TextInput}
                        placeholderTextColor={Constant.primary_color}
                    />
                    <TextInput
                        placeholder='State / Province'
                        style={style.TextInput}
                        placeholderTextColor={Constant.primary_color}
                    />
                    <TextInput
                        placeholder='Zip-code *'
                        style={style.TextInput}
                        placeholderTextColor={Constant.primary_color}
                    />
                    <TextInput
                        placeholder='Phone number *'
                        style={style.TextInput}
                        placeholderTextColor={Constant.primary_color}
                    />
                    <Text style={style.Texth}>Coupon Code</Text>
                    <View style={style.rowCoupon}>
                        <TextInput
                            placeholder='Have a code? type it here...'
                            style={{ ...style.TextInput, borderBottomWidth: 0, width: width * .6 }}
                            placeholderTextColor={Constant.primary_color}
                        />
                        <Text style={style.textco} onPress={() => { alert("ok") }}>Validate</Text>
                    </View>

                    <Text style={style.Texth}>Billing Address</Text>
                    <View style={{ ...style.rowCoupon, justifyContent: "flex-start", backgroundColor: Constant.backgroundcolor, marginLeft: -width * .09 }}>
                        <CheckBox
                            onClick={() => {
                                setisChecked(!isChecked)
                            }}
                            isChecked={isChecked}
                            checkBoxColor="#BEBFC4"
                            checkedCheckBoxColor="#5ECE7B"

                        />
                        <Text style={{ ...style.textbi, marginLeft: 10 }}>Copy address data from shipping</Text>
                    </View>
                    <View style={{ ...style.rowCoupon, justifyContent: "flex-start", backgroundColor: Constant.backgroundcolor, marginLeft: -width * .09, marginTop: 20 }}>
                        <CheckBox
                            onClick={() => {
                                setisChecked(!isChecked)
                            }}
                            isChecked={isChecked}
                            checkBoxColor="#BEBFC4"
                            checkedCheckBoxColor="#5ECE7B"

                        />
                        <Text style={{ ...style.textbi, marginLeft: 10 }}>I agree to <Text style={style.term} onPress={() => { alert("ok") }}>Terms and conditions</Text></Text>
                    </View>
                    <TouchableOpacity style={{ ...Constant.style.button, backgroundColor: Constant.text_color, marginTop: height * .04, marginBottom: 10 }}
                        onPress={() => {
                            setvisible(true)


                        }}
                    >



                        <Text style={{ color: Constant.white, fontFamily: Constant.font_reqular }}>Continue to payment</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>


            <Modal isVisible={visible}>
                <View style={style.viewmodal}>
                    <Text style={style.textmodal}>Order Completed</Text>
                    <Image style={style.imagemodal} source={require("../../android/app/src/assets/images/bags.png")} resizeMode="contain"></Image>

                    <Text style={style.mtextmodal}>Thank you for your purchase.
                        You can view your order in ‘My Orders’ section.</Text>
                    <TouchableOpacity style={style.buttonmodal}
                        onPress={() => {
                            // setvisible(false)
                            navigation.navigate("HomeTab")
                        }}
                    >
                        <Text style={style.textbutton}>Continue shopping</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    )
}
const style = StyleSheet.create({
    contanier: {
        backgroundColor: Constant.backgroundcolor,
        flex: 1,
        alignItems: 'center',



    },
    heading: {
        width: width * .9,
        flexDirection: "row",
        height: height * .08,
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
    }, Texth: {
        color: Constant.black,
        fontSize: 18,
        fontFamily: Constant.font_reqular,
        width: width * .9,
        marginVertical: 20
    }
    ,
    TextInput: {
        width: width * .9,
        textAlign: "left",
        fontSize: 12,
        fontFamily: Constant.font_reqular,
        color: Constant.black,
        borderBottomWidth: .2,
        borderColor: Constant.primary_color,
        marginTop: 5
    }, viewmodal: {
        height: height * .45,
        width: width * .9,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Constant.backgroundcolor,
        borderRadius: 5,
    }, imagemodal: {
        height: 120,
        width: 120,
        marginVertical: 10
    }, textmodal: {
        fontSize: 20,
        fontFamily: Constant.font_reqular,
        color: Constant.text_color,
        marginVertical: 5
    }, mtextmodal: {
        fontSize: 12,
        fontFamily: Constant.font_reqular,
        color: "#aaa",
        width: "40%",
        textAlign: "center",
        marginTop: 10
    }, buttonmodal: {
        width: "70%",
        height: height * .05,
        backgroundColor: Constant.text_color,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        // marginTop: 20,
        borderRadius: 50
    }, textbutton: {
        fontSize: 16,
        color: Constant.white,
        fontFamily: Constant.font_reqular
    }, buttonTextStyle:
    {
        fontSize: 12,
        fontFamily: Constant.font_medium,
        color: Constant.text_color,
        textAlign: "left",
        marginLeft: 2
    }, dropdownStyle: {
        backgroundColor: Constant.box,
        fontSize: 5,
        borderRadius: 5,
    }, rowStyle: {
        backgroundColor: Constant.box,
        fontSize: 5,
        height: 30,
        borderWidth: 0,
        borderColor: Constant.box,
        width: width * .9,
        paddingLeft: 10
    }, rowTextStyle: {
        fontSize: 10,
        fontFamily: Constant.font_reqular,
        textAlign: "left"
    }, buttonStyle: {
        width: width * .92,
        backgroundColor: Constant.backgroundcolor,
        borderRadius: 5,
        height: height * .05,
        borderBottomWidth: .2,
        borderColor: Constant.primary_color,
        marginTop: 5,
        paddingBottom: 5
    }, searchInputStyle: {
        fontSize: 5,
        height: 25,
        marginTop: 10,
        backgroundColor: Constant.box,
    }, rowCoupon: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width * .9,
        backgroundColor: "#F7F7F8",
        borderRadius: 5,
        paddingHorizontal: 15
    }, textco: {
        color: "#508A7B",
        fontSize: 11,
        fontFamily: Constant.font_reqular
    }, textbi: {
        color: Constant.black,
        fontSize: 13,
        fontFamily: Constant.font_reqular
    }, term: {
        textDecorationLine: "underline",
        fontSize: 14
    }, checktouch: {
        height: height * .05,
        width: width * .42,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Constant.text_color,
        borderRadius: 5
    }, checktext: {
        color: Constant.white,
        fontSize: 12,
        fontFamily: Constant.font_reqular,
    }, textp: {
        color: "#474340",
        fontSize: 10,
        fontFamily: Constant.font_reqular,


    },




})

export default Check
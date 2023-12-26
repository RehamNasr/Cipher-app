import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StatusBar, StyleSheet, TouchableOpacity, View, TextInput, ScrollView, Image, ImageBackground, Modal } from 'react-native';
import {
    Text
} from 'react-native';
import * as Constant from "../android/app/src/consts/constant"
import { useDispatch, useSelector } from 'react-redux';
import AntDesign from "react-native-vector-icons/AntDesign"
import { ProgressBar } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import { setdata } from '../Redux/action/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { height, width } = Dimensions.get("screen")
const fontFamily = "Almarai-Regular"
const fontFamily_bold = "Almarai-Bold"
const fontcolor = "#25a86e"
function Home() {
    const [arr, setarr] = useState([
        {
            header: "Furnished",
            status: ["Yes", "No"],
            value: 0
        }, {
            header: "Kitchen",
            status: ["Closed", "Open"],
            value: 0
        }, {
            header: "Parking",
            status: ["Split", "Central"],
            value: 0
        }
    ])
    const [arrAC, setArrAc] = useState([
        {
            text: "Split"
        }, {
            text: "Central"
        }, {
            text: "Window"
        }, {
            text: "Not Installed"
        }
    ])
    const [currentindex, setcurrentindex] = useState(0)
    let sheet = useRef();
    const [images, setImages] = useState([]);
    const [path, setpath] = useState("")
    const [visible, setvisible] = useState("")
    const [UnitSize, setUnitSize] = useState(0)
    const [Bathrooms1, setBathrooms1] = useState(0)
    const [Bathrooms2, setBathrooms2] = useState(0)
    const [Guestrooms1, setGuestrooms1] = useState(0)
    const [Guestrooms2, setGuestrooms2] = useState(0)
    const [Electricity, setElectricity] = useState("")
    const [Water, setWater] = useState("")
    let objuse = useSelector(state => state.objuser)
    const [objuser, setobjuser] = useState(objuse)
    console.log("obj", objuse)
    const dispatch = useDispatch()

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
    const showmodal = (path) => {
        setpath(path)
        setvisible(true)
    }
    function save() {
        let objuser = {
            UnitSize: UnitSize,
            Bathrooms1: Bathrooms1,
            Bathrooms2: Bathrooms2,
            Guestrooms1: Guestrooms1,
            Guestrooms2: Guestrooms2,
            statefurnished: arr[0].value,
            statekitchen: arr[1].value,
            stateparkig: arr[2].value,
            Electricity: Electricity,
            Water: Water,
            actype: currentindex,
            images: images,
        }
        dispatch({
            type: "setvalues",
            value: objuser
        })
        console.log(objuser)
    }

    function setvalue() {
        setUnitSize(objuser.UnitSize)
        setBathrooms1(objuser.Bathrooms1)
        setBathrooms2(objuser.Bathrooms2)
        setGuestrooms1(objuser.Guestrooms1)
        setGuestrooms2(objuser.Guestrooms2)
        setElectricity(objuser.Electricity)
        setWater(objuser.Water)

        let copy = [...arr]
        copy[0].value = objuser.statefurnished
        copy[1].value = objuser.statekitchen
        copy[2].value = objuser.stateparkig
        setarr(copy)
        setImages(objuser.images)
        setcurrentindex(objuser.actype)



    }
    useEffect(() => {
        setvalue()
    }, [])

    return (
        <>

            <ScrollView contentContainerStyle={{ width: width, alignItems: "center" }}>
                <View style={styles.Container}>

                    <StatusBar barStyle="dark-content" backgroundColor={"#ffffff"} />

                    <View style={styles.header}>
                        <TouchableOpacity style={styles.buttonback}>
                            <AntDesign name="left" style={styles.icon} />
                        </TouchableOpacity>

                        <Text style={styles.titletext}>Property Details</Text>

                        <TouchableOpacity style={styles.buttonback} disabled={false}>
                            <AntDesign name="left" color="#fff" />
                        </TouchableOpacity>

                    </View>



                    <ProgressBar progress={0.35} color={fontcolor} style={{ height: 3, width: width * .9 }} />


                    <Text style={styles.textstep}>Step 1- Unit Details</Text>
                    <Text style={styles.text}>please enter the unit information below</Text>


                    <Text style={{ ...styles.HeaderInput, width: width * .9 }}>Unit Size</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Enter Size'
                        keyboardType="number-pad"
                        placeholderTextColor={"#000"}
                        value={UnitSize.toString()}
                        onChangeText={(value) => {
                            setUnitSize(value)
                        }}
                    />



                    <View style={styles.row}>
                        <View style={styles.part1}>
                            <Text style={styles.HeaderInput}>Bathrooms</Text>
                            <View style={styles.rowplus}>
                                <TouchableOpacity style={styles.buttonplus}
                                    onPress={() => {
                                        if (Bathrooms1 != 0) setBathrooms1(Bathrooms1 - 1)

                                    }}
                                >
                                    <AntDesign name="minus" style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.count}>{Bathrooms1}</Text>
                                <TouchableOpacity style={styles.buttonplus}
                                    onPress={() => {
                                        setBathrooms1(Bathrooms1 + 1)
                                    }}
                                >
                                    <AntDesign name="plus" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.part1}>
                            <Text style={styles.HeaderInput}>Bathrooms</Text>
                            <View style={styles.rowplus}>
                                <TouchableOpacity style={styles.buttonplus}
                                    onPress={() => {
                                        if (Bathrooms2 != 0) setBathrooms2(Bathrooms2 - 1)

                                    }}
                                >
                                    <AntDesign name="minus" style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.count}>{Bathrooms2.toString()}</Text>
                                <TouchableOpacity style={styles.buttonplus}
                                    onPress={() => {
                                        setBathrooms2(Bathrooms2 + 1)

                                    }}
                                >
                                    <AntDesign name="plus" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={styles.row}>
                        <View style={styles.part1}>
                            <Text style={styles.HeaderInput}>Guest Rooms</Text>
                            <View style={styles.rowplus}>
                                <TouchableOpacity style={styles.buttonplus}
                                    onPress={() => {
                                        if (Guestrooms1 != 0) setGuestrooms1(Guestrooms1 - 1)

                                    }}
                                >
                                    <AntDesign name="minus" style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.count}>{Guestrooms1}</Text>
                                <TouchableOpacity style={styles.buttonplus}
                                    onPress={() => {
                                        setGuestrooms1(Guestrooms1 + 1)

                                    }}
                                >
                                    <AntDesign name="plus" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.part1}>
                            <Text style={styles.HeaderInput}>Guest Rooms</Text>
                            <View style={styles.rowplus}>
                                <TouchableOpacity style={styles.buttonplus}
                                    onPress={() => {
                                        if (Guestrooms2 != 0) setGuestrooms2(Guestrooms2 - 1)

                                    }}
                                >
                                    <AntDesign name="minus" style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.count}>{Guestrooms2}</Text>
                                <TouchableOpacity style={styles.buttonplus}
                                    onPress={() => {
                                        setGuestrooms2(Guestrooms2 + 1)

                                    }}
                                >
                                    <AntDesign name="plus" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style={styles.rowoption}>
                        {
                            arr.map((item, index) => (
                                <View style={styles.box1} key={index}>
                                    <Text style={styles.HeaderInput}>{item.header}</Text>
                                    <View style={styles.rowplus}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                let copy_arr = [...arr];
                                                if (copy_arr[index].value == "1")
                                                    copy_arr[index].value = "0"
                                                else copy_arr[index].value = "1"

                                                setarr(copy_arr)
                                            }}
                                            style={{ ...styles.buttonradio, ...styles.radio1, backgroundColor: item.value == "1" ? "#fff" : fontcolor }}>
                                            <Text style={{ ...styles.textstate, color: item.value == "1" ? "#000" : "#fff" }}>{item.status[0]}</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => {
                                                let copy_arr = [...arr];
                                                if (copy_arr[index].value == "1")
                                                    copy_arr[index].value = "0"
                                                else copy_arr[index].value = "1"
                                                setarr(copy_arr)
                                            }}
                                            style={{ ...styles.buttonradio, ...styles.radio2, backgroundColor: item.value == "1" ? fontcolor : "#fff" }}>
                                            <Text style={{ ...styles.textstate, color: item.value == "1" ? "#fff" : "#000" }}>{item.status[1]}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))
                        }
                    </View>



                    <Text style={{ ...styles.HeaderInput, width: width * .9 }}>Electricity Meter No.</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Enter meter no'
                        keyboardType="number-pad"
                        placeholderTextColor={"#000"}
                        value={Electricity.toString()}
                        onChangeText={(value) => {
                            setElectricity(value)
                        }}
                    />


                    <Text style={{ ...styles.HeaderInput, width: width * .9 }}>Water Meter No.</Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Enter meter no'
                        keyboardType="number-pad"
                        placeholderTextColor={"#000"}
                        value={Water.toString()}
                        onChangeText={(value) => {
                            setWater(value)
                        }}
                    />



                    <Text style={{ ...styles.HeaderInput, width: width * .9 }}>Select Ac Type</Text>
                    <View style={styles.rowplus}>
                        {
                            arrAC.map((item, index) => (
                                <TouchableOpacity
                                key={index}
                                    onPress={() => {
                                        setcurrentindex(index)
                                    }}
                                    style={{ ...styles.buttonradio, ...(index == 0 ? styles.radio1 : index == 3 ? styles.radio2 : null), backgroundColor: currentindex == index ? fontcolor : "#fff" }}>
                                    <Text style={{ ...styles.textstate, color: index == currentindex ? "#fff" : "#000" }}>{item.text}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>


                    <Text style={{ ...styles.HeaderInput, width: width * .9 }}>Upload Photo</Text>
                    <ScrollView horizontal={true} >

                        <View style={styles.rowimages}>

                            {
                                images.map((item, index) => (
                                    <>
                                        <TouchableOpacity 
                                        key={index}
                                        onPress={
                                            () => {
                                                showmodal(item.path)
                                            }}>


                                            <ImageBackground
                                                source={{ uri: item.path }}
                                                style={styles.image3}
                                                imageStyle={{ borderRadius: 5 }}

                                            >
                                                <TouchableOpacity onPress={() => del(index)} style={styles.deletedouch}>
                                                    <AntDesign name="delete" style={styles.close}></AntDesign>
                                                </TouchableOpacity>
                                            </ImageBackground>

                                        </TouchableOpacity>

                                    </>

                                ))
                            }


                            <TouchableOpacity style={{ ...styles.boxadd, marginLeft: images.length ? 5 : 0 }} onPress={() => { sheet.current.open() }}>
                                <Image style={styles.imageupload} source={require("../images/upload.png")} resizeMode="contain"></Image>
                                <Text style={styles.textupload}>Select photo from your gallarey</Text>
                            </TouchableOpacity>


                        </View>

                    </ScrollView >


                    <View style={styles.lastrow}>

                        <TouchableOpacity
                            style={styles.buttonnext}>
                            <Text
                                style={{ ...styles.textnext, color: fontcolor }}>Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ ...styles.buttonnext, backgroundColor:fontcolor }}
                            onPress={() => {
                                save()
                            }}
                        >
                            <Text style={styles.textnext}>Next</Text>
                        </TouchableOpacity>


                    </View>


                    <Modal visible={visible}>
                        <TouchableOpacity onPress={() => { setvisible(false) }}>
                            <Image style={{ height: height, width: width }} source={{ uri: path }}>

                            </Image>
                        </TouchableOpacity>
                    </Modal>


                    <RBSheet
                        ref={sheet}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            container: styles.sheets, wrapper: {
                                // backgroundColor: "transparent"
                            }, draggableIcon: {
                                backgroundColor: "#f6f6f8",
                                width: width * .2
                            }
                        }}
                    >
                        <View style={{ ...styles.mainbox }}>
                            <TouchableOpacity style={styles.boxaction} onPress={() => { opengalery() }}>
                                <Image style={styles.image2} source={require("../images/camera.png")} resizeMode="contain"></Image>
                                <Text style={styles.Text3}>upload image</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.boxaction} onPress={() => { opencamera() }}>
                                <Image style={styles.image2} source={require("../images/gallery.png")} resizeMode="contain"></Image>
                                <Text style={styles.Text3}>open camera</Text>
                            </TouchableOpacity>
                        </View>
                    </RBSheet>
                </View>
            </ScrollView>

        </>
    )
}
// #25a86e
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        alignItems: "center"
    },
    header: {
        width: width * .95,
        height: height * .06,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    buttonback: {
        width: width * .1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
    icon: {
        fontSize: 14,
        color: "#000"
    },
    titletext: {
        fontSize: 15,
        color: "#000",
        fontFamily: fontFamily
    },
    textstep: {
        fontSize: 15,
        color: "#000",
        fontFamily: fontFamily_bold,
        width: width * .89,
        marginTop: 15
    },
    text: {
        fontSize: 11,
        color: fontcolor,
        fontFamily: "Almarai-Regular",
        marginVertical: 2,
        width: width * .89
    },
    HeaderInput: {
        fontSize: 13,
        color: "#aaa",
        fontFamily:fontFamily,
        marginVertical: 2,
        marginTop: 15,
        marginBottom: 10
    },
    textinput: {
        width: width * .9,
        height: 40,
        borderWidth: .2,
        borderRadius: 2,
        color: "#000",
        fontSize: 11,
        paddingLeft: 15
    },
    row: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    part1: {
        width: "48%",
    },
    rowplus: {
        width: "100%",
        height: 40,
        alignItems: "center",
        flexDirection: "row",
        borderWidth: .2,
        borderRadius: 2,
        backgroundColor: "#f5f5f5",
    },
    buttonplus: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    count: {
        fontSize: 12,
        color: "#000",
        flex: 2,
        textAlign: "center",
        backgroundColor: "#fff",
        height: "100%",
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    rowoption: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    box1: {
        width: "48%",
    },
    textstate: {
        fontSize: 11,
        color: "#000",
    },
    buttonradio: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: .2

    },
    radio1: {
        borderTopLeftRadius: 3,
        borderBottomStartRadius: 3,
    },
    radio2: {
        borderTopEndRadius: 3,
        borderBottomEndRadius: 3,
    },
    boxadd: {
        height: height * .18,
        width: width * .88,
        borderRadius: 5,
        marginVertical: 5,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: .2
    },
    rowimages: {
        // height: height * .12,
        flexDirection: "row",
    },
    sheets: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height * .2
    },
    Text3: {
        color: "#000",
        fontSize: 9,
        fontFamily: fontFamily
    },
    mainbox: {
        width: width * .9,
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "center", paddingTop: 20
    },
    boxaction: {
        height: height * .1,
        width: width * .4,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        borderRadius: 5
    },
    image2: {
        height: height * .05,
        width: width * .1,
        marginVertical: 5,
        marginBottom: 2
    },
    image3: {
        height: height * .18,
        width: width * .88,
        borderRadius: 2,
        marginVertical: 5,
        marginBottom: 10,
        marginLeft: 5,
        padding: 10
    },
    close: {
        fontSize: 11,
        color: "#f00",
        textAlign: "right",
    },
    deletedouch: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end"
    },
    imageupload: {
        height: height * .07,
        width: width * .2,
        marginBottom: 0
    },
    textupload: {
        fontSize: 10,
        color: "#aaa",
        fontFamily:fontFamily,
    },
    lastrow: {
        height: 60,
        width: width * .93,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        elevation: 2,
    },
    buttonnext: {
        width: "45%",
        height: "80%",
        borderWidth: .2,
        borderRadius: 5,
        borderColor: fontcolor,
        alignItems: "center",
        justifyContent: "center"
    },
    textnext: {
        fontSize: 12,
        color: "#fff",
        fontFamily: fontFamily,
    }

});

export default Home
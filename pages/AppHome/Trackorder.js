import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
// import ProgressBar from 'react-native-progress/Bar';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use the appropriate icon library
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
const Trackorder = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Set progress value (between 0 and 1)
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 1 ? prevProgress + 0.1 : 1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const [currentPage, setCurrentPage] = useState(0);

    const steps = [
        { label: 'Parcel is successfully delivered', content: <Text style={style.des}>15 May 10:20</Text> },
        { label: 'Parcel is out for delivery', content: <Text style={style.des}>14 May 08:00</Text> },
        { label: 'Sender has shipped your parcel', content: <Text style={style.des}>14 May 08:00</Text> },
        { label: 'Sender is preparing to ship your order', content: <Text style={style.des}>12 May 10:01</Text> },
    ];

    const steps2 = [
        { label: 'Parcel is successfully delivered', content: <Text style={style.des}>15 May 10:20</Text> },
        { label: 'Parcel is out for delivery', content: <Text style={style.des}>14 May 08:00</Text> },
        { label: 'Sender has shipped your parcel', content: <Text style={style.des}>14 May 08:00</Text> },
        { label: 'Sender is preparing to ship your order', content: <Text style={style.des}>12 May 10:01</Text> },
        { label: 'Sender is preparing to ship your order', content: <Text style={style.des}>12 May 10:01</Text> },
    ];
    const [status, setstatus] = useState(2)
    return (
        <>
         

            <View style={style.contanier}>



                <View style={style.heading}>
                    <TouchableOpacity style={style.touchicon} >
                        <AntDesign name="left" style={{ ...style.iconsize }}></AntDesign>

                    </TouchableOpacity>
                    <Text style={style.Text}>Track Order</Text>
                    <TouchableOpacity style={{ ...style.touchicon, }} disabled={true}>
                        <Ionicons name="notifications-outline" style={{ ...style.iconsize, color: Constant.backgroundcolor }}></Ionicons>

                    </TouchableOpacity>
                </View>
                <View style={{ ...style.row1, marginTop: "8%" }}>
                    <Text style={style.row1t}>Delivered on</Text>
                    <Text style={style.row1h}> 15.05.21</Text>
                </View>

                <View style={style.row1}>
                    <Text style={style.row1t}>Tracking Number :</Text>
                    <Text style={{...style.row1h,marginLeft:10}}> IK287368838</Text>

                </View>





                <View style={{ width: "95%", marginTop: "10%" }}>
                    {
                        steps.map((item, index) => (
                            <>
                                <View style={style.item}>
                                    <View style={style.circle}>
                                        <View style={style.circle2}>
                                            <AntDesign name="check" style={{ ...style.icon, color: index <= status ? "#fff" : "#474340" }} ></AntDesign>
                                        </View>
                                    </View>
                                    <Text style={style.head}>{item.label}</Text>
                                    {item.content}
                                </View>
                                {index == 3 ? null :
                                    <>
                                        <View style={style.dot}></View>
                                        <View style={style.dot}></View>
                                        <View style={style.dot}></View>
                                    </>
                                }
                            </>
                        ))
                    }
                </View>
                <TouchableOpacity style={{ ...style.box1 }}>
                    <Image source={require("../../android/app/src/assets/images/rate.png")}
                        style={style.image}
                        resizeMode="contain"
                    />
                    <View style={style.row}>
                        <Text style={style.boxh}>Don’t forget to rate</Text>
                        <Text style={style.boxt}>Rate pharmacy to get 5 points for collect.</Text>
                        <View style={{ flexDirection: "row" }}>
                            {
                                steps2.map((item, index) => (
                                    <AntDesign name="star" style={style.iconstar}></AntDesign>
                                ))
                            }
                        </View>
                    </View>







                </TouchableOpacity>
            </View>
        </>
    );
};
const style = StyleSheet.create({
    contanier: {
        backgroundColor: Constant.backgroundcolor,
        flex: 1,
        // alignItems: 'center',
        paddingHorizontal: 25

    },
    heading: {
        flexDirection: "row",
        width: "95%",
        height: height * .09,
        justifyContent: "space-between",
        backgroundColor: Constant.backgroundcolor,
        alignItems: "center",
    },
    touchicon: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }, iconsize: {
        fontSize: 14,
        color: Constant.black
    }, iconstar: {
        fontSize: 12,
        color: Constant.primary_color,
        marginHorizontal: 5
    },
    Text: {
        color: Constant.black,
        fontSize: 17,
        fontFamily: Constant.font_reqular
    }, row1: {
        width: "40%",
        height: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    row1h: {
        fontSize: 15,
        color: Constant.black,
        fontFamily: Constant.font_reqular
    }, row1t: {
        fontSize: 14,
        color: Constant.primary_color,
        fontFamily: Constant.font_reqular
    }, stepContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    stepLabel: {
        fontSize: 10,
        marginBottom: 10, // Adjust this to add space between the label and the step indicator
    }, circle: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: "#474340",
        borderRadius: 100,
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
    }, circle2: {
        width: 18,
        height: 18,
        backgroundColor: "#474340",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    }, icon: {
        fontSize: 8,
        color: Constant.white
    }, dot: {
        width: 4,
        height: 4,
        borderWidth: 2,
        borderColor: "#474340",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "3.2%",
        marginVertical: 7
    }, item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }, head: {
        color: Constant.black,
        fontSize: 13,
        fontFamily: Constant.font_reqular,
        width: "65%",
        marginLeft: "4%"

    }, des: {
        color: Constant.primary_color,
        fontSize: 11,
        fontFamily: Constant.font_reqular,
        width: "22%",
        textAlign: "right"
    }, row: {
        width: "80%",
        height: "90%",
        justifyContent: "space-between"

    }, box1: {
        backgroundColor: Constant.white,
        height: height * .12,
        width:"100%",
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 2,
        paddingVertical: 10,
        elevation: 5,
        shadowColor: Constant.primary_color,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: "35%"

    }, boxh: {
        fontSize: 15,
        fontFamily: Constant.font_reqular,
        color: Constant.black
    }, boxt: {
        fontSize: 10,
        fontFamily: Constant.font_reqular,
        color: Constant.primary_color,
    },
    image: {
        width:"20%",
        height:"100%",
        marginRight:20,
 
    },
})
export default Trackorder;

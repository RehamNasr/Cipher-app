

import * as React from 'react'
import { Alert, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import * as Constant from '../../android/app/src/consts/constant'
import AntDesign from 'react-native-vector-icons/AntDesign'
const { height, width } = Dimensions.get("screen")

function Barcode({navigation}) {
    const [qr, setqr] = React.useState("")
    const [message, setmesssage] = React.useState("")

    const check = (qr) => {
        let text = qr[0] + qr[1] + qr[2];
        if (text == "729" || text == "841" || text == "871") {
            setmesssage("مقاطعه")
        } else {
            setmesssage("امان معانا")
        }
    }

    return (
        <>
            <View style={style.contanier}>
                <QRCodeScanner
                    onRead={({ data }) => {
                        setqr(data)
                        navigation.goBack()

                    }

                    }
                    // flashMode={RNCamera.Constants.FlashMode.torch}
                    reactivate={true}
                    showMarker={true}
                    reactivateTimeout={500}
                    topContent={
                        <View style={style.heading}>
                            <TouchableOpacity style={style.touchicon} onPress={() => {
                                navigation.goBack()
                            }}>
                                <AntDesign name="left" style={style.iconsize}></AntDesign>
                            </TouchableOpacity>



                            <TouchableOpacity style={style.touchicon}>
                                <AntDesign name="shoppingcart" style={{ color: "#fff" }}></AntDesign>
                            </TouchableOpacity>

                        </View>
                    }
                    bottomContent={
                        <Text style={style.Text}>
                            place a barcode
                        </Text>

                    }
                />

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

    },
    Text: {
        color: "#29ABE2",
        fontSize: 12,
        fontFamily: Constant.font_reqular
    },
    heading: {
        width: width * .95,
        flexDirection: "row",
        height: height * .08,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: height * .15
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
})

export default Barcode
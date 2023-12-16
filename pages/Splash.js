

import * as React from 'react'
import { Text, View, StyleSheet, StatusBar, Image, Dimensions } from 'react-native'
import * as Constant from '../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")

function Splash() {

    return (
        <>
            <StatusBar backgroundColor={Constant.backgroundcolor}></StatusBar>
            <View style={style.contanier}>
                {/* <Text style={style.Text}>MediMatch</Text>
                 */}
                <Image
                    source={require("../android/app/src/assets/images/logo.png")}
                    style={style.image}
                    resizeMode="contain"
                >

                </Image>
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
        fontSize: Constant.font_size_heading,
        fontFamily: Constant.font_bold,
        fontSize: 30,
    }, image: {
        width: width * .7,
        height: height * .2,
        alignSelf: "center"
    }

})

export default Splash
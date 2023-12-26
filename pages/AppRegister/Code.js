

import * as React from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const { height, width } = Dimensions.get("screen")
import AntDesign from 'react-native-vector-icons/AntDesign'
import { logincontext } from '../../Navigation/AppNavigation'
function Code({ navigation }) {
    const { changelogin } = React.useContext(logincontext)

    return (
        <>
         
            <View style={style.contanier}>

                <View style={style.box}>
                    <Text style={style.headText}>Enter the code sent to your phone</Text>
                    <TextInput
                        style={{ ...Constant.style.Textinput, width: width * .4, backgroundColor: Constant.white, textAlign: "center", borderWidth: 0 }}
                        placeholder='Enter code'
                        placeholderTextColor={Constant.primary_color}
                        keyboardType="numeric"
                    />

                    <TouchableOpacity style={{ ...Constant.style.button, backgroundColor: Constant.text_color, width: width * .4, marginTop: height * .01 }}
                        onPress={() => {
                            // alert("go to home")
                            // navigation.navigate("MainNavigaton")
                            changelogin()
                        }}

                    >
                        <Text style={{ ...style.Text, color: Constant.white }}>Countinue</Text>
                    </TouchableOpacity>
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
    },
    box: {
        width: width * .9,
        height: height * .28,
        backgroundColor: Constant.box,
        paddingTop: height * .05,
        borderRadius: 5,
        elevation:2,
        shadowColor:Constant.primary_color
    },
    headText: {
        fontSize: Constant.font_size_heading,
        fontFamily: Constant.font_reqular,
        color: Constant.black,
        width: width * .8,
        textAlign: "center",
        alignSelf: "center",
        marginBottom: height * .02
    },
    buttontext: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"

    },
    Text: {
        fontSize: Constant.font_size_heading,
        fontFamily: Constant.font_reqular,
        color: Constant.black,
        alignSelf: "center"

    },



})

export default Code


import * as React from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native'
import * as Constant from '../../android/app/src/consts/constant'
const {height,width}=Dimensions.get("screen")

function Choice({navigation}) {

    return (
        <>
            <StatusBar backgroundColor={Constant.backgroundcolor}></StatusBar>
            <View style={style.contanier}>
                <Image
                    source={require("../../android/app/src/assets/images/choice.png")}
                    style={style.image}
                    resizeMode="contain"
                >
                    
                </Image>
                <TouchableOpacity style={{ ...Constant.style.button, backgroundColor: Constant.text_color,marginTop:height*.12}}
                onPress={()=>{
                    navigation.navigate("Login")
                }}
                
                >
                    <Text style={{ ...style.Text, color: Constant.white }}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...Constant.style.button,marginTop:15 }}
                    onPress={()=>{
                        navigation.navigate("SingUp")
                    }}
                
                >



                    <Text style={{ ...style.Text, color: Constant.text_color }}>SING UP</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
const style = StyleSheet.create({
    contanier: {
        backgroundColor: Constant.backgroundcolor,
        flex: 1,
        alignItems: 'center',
        paddingTop:80
        // justifyContent: 'center',
    },
    Text: {
        fontSize: Constant.font_size_heading,
        fontFamily: Constant.font_reqular,
    },
    image:{
        width:width*.75,
        height:height*.5

    }


})

export default Choice
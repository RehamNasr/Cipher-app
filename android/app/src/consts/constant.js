import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("screen")
export const backgroundcolor = "#fafafa"
export const box = "#f6f6f8"
export const white = "#fff"
export const black = "#000"
export const primary_color = "#cccccc"
export const text_color = "#29ABE2"
export const font_reqular = "Akshar-Regular"
export const font_bold = "Akshar-Bold"
export const font_sbold = "Akshar-SemiBold"
export const font_medium = "Akshar-Medium"
export const font_size_heading = 16
export const font_size_text = 14

export const style = StyleSheet.create({
    button: {
        width: width * .95,
        height: height * .06,
        backgroundColor: box,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginVertical: 4,
        alignSelf: "center"

    },
    Textinput: {
        width: width * .95,
        height: height * .056,
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 3,
        backgroundColor: "none",
        borderWidth: .5,
        borderColor: primary_color,
        padding: 10,
        color: "#000",
        alignSelf: "center",
        fontFamily: font_reqular

    }, errormessage: {
        color: "#f00",
        fontSize: 10,
        marginLeft: width * .06,
        marginVertical: height * .005
    },
    forget: {

        color: "#f00",
        fontSize: 10,
        marginRight: width * .06,
        marginVertical: height * .005,
        alignSelf: "flex-end",
        textDecorationLine:"underline"
    }
})



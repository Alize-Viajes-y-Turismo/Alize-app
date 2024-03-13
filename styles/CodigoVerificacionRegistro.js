import {verticalScale, horizontalScale} from "../styles/metrics"
import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    texto1: {
        backgroundColor: "red", 
        textAlign: "center", 
        padding: verticalScale(20), 
        color: "white", 
        fontSize: 20
    },
    texto2: {
        fontSize: 18,
        textAlign: "center",
        marginTop: verticalScale(100),
        marginBottom: verticalScale(50)
    },
    container2: {
        height: "100%", 
        backgroundColor: "lightgray",
    },
    input: {
        width: horizontalScale(200),
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "white",
        textAlign: "center",
        height: verticalScale(40),
        marginBottom: verticalScale(50)
    },
    inputContainer: {
        alignItems: "center"
    },

    btn1: {
        marginBottom: verticalScale(30)
    },

    btnContainer: {
        alignItems: "center"
    }
})
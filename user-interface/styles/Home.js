import { StyleSheet } from "react-native"
import {verticalScale, horizontalScale} from "./metrics"

const NotAuthHomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
    title: {
        color: '#1E1E1E',
        fontSize: 29,
        textAlign: 'center',
        marginTop: verticalScale(70)
    },
    subtitle: {
        color: '#1E1E1E',
        fontSize: 18,
        textAlign: 'center',
        marginTop: verticalScale(30)
    },
    link: {
        textAlign: 'center',
        fontSize: 18,
        color: 'gray'
    },
    image: {
        width: 200,
        height: 200,
        marginTop: verticalScale(40)
    },
    btn: {
        marginTop: verticalScale(30),
        marginBottom: verticalScale(30)
    }
})

export default NotAuthHomeScreenStyles
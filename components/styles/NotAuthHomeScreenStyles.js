import { StyleSheet } from "react-native"

const NotAuthHomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white"
    },
    title: {
        color: '#1E1E1E',
        fontSize: 29,
        textAlign: 'center',
    },
    subtitle: {
        color: '#1E1E1E',
        fontSize: 18,
        textAlign: 'center',
    },
    link: {
        textAlign: 'center',
        fontSize: 18,
        color: 'gray'
    },
    image: {
        width: 200,
        height: 200,
    },
})

export default NotAuthHomeScreenStyles
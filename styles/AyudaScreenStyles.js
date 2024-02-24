import { StyleSheet } from "react-native"

const AyudaScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'pink',
        padding: 20,
    },
    title: {
        color: '#F46262',
        fontSize: 24,
        fontWeight: '400',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 300,
        margin: 10,
    },
    text: {
        color: '#1E1E1E',
        fontSize: 36,

    },
    btn: {
        backgroundColor: 'gray',
    },
    boxTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
})

export default AyudaScreenStyles

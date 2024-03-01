import { StyleSheet } from "react-native"

const AyudaScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'pink',
    },
    title: {
        color: '#1E1E1E',
        fontSize: 36,
        fontWeight: '400',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 300,
        marginTop: 30,
    },
    subTitle: {
        fontSize: 24,
        marginTop: 30,

    },
    paragraph:{
        fontSize: 16,
    },
    imageContainer: {
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 30,

    },
    boxTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    containerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    collapseContainer:{
        marginBottom:20
    },
    boxCollapseContainer: {
        marginTop: 30,
    },
    textCollape:{
        marginTop:10
    }
})

export default AyudaScreenStyles

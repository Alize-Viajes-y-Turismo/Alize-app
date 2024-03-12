import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        textAlign: "center"
    },
    paragraph:{
        fontSize: 16,
        textAlign: "center"
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
        marginBottom:20,
        borderWidth: 1,
        width: "100%",
        borderRadius: 10,
        padding: 5,
        borderColor: "red"
    },
    boxCollapseContainer: {
        marginTop: 30,
        alignItems: "center"
    },
    textCollape:{
        marginTop:10
    }
})

export default styles

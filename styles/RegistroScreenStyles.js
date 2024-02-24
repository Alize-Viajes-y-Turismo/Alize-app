import { StyleSheet } from "react-native"

const RegistroScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'pink',
        padding: 20,
        backgroundColor: 'white'
    },
    title: {
        color: '#F46262',
        fontSize: 24,
        fontWeight: '400',
        textAlign: 'center',
        width: 300,
        margin: 10,
    },
    subtitle: {
        color: '#1E1E1E',
        fontSize: 24,
        fontWeight: '400',
        textAlign: 'center',
        margin: 10,
    },
    paragraph: {
        fontSize: 16,
        textAlign: 'center',
    },
    boxTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    containerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    containerCheck: {
        justifyContent: 'start',
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
    },
    checkBoxText: {
        marginLeft: 10,
    },
});

export default RegistroScreenStyles
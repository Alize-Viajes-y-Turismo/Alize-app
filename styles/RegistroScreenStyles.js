import { StyleSheet } from "react-native"

const RegistroScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    title: {
        color: '#1E1E1E',
        fontSize: 24,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 40
    },
    subtitle: {
        fontSize: 24,
        color: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 40
    },
    paragraph: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20
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
    errorMessage: {
        color: 'red',
        marginBottom: 5
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        paddingHorizontal: 10
      },
});

export default RegistroScreenStyles
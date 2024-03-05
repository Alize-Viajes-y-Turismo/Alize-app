import { StyleSheet } from "react-native"

const RegistroScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: "center",
        backgroundColor: 'white',
    },
    title: {
        color: '#1E1E1E',
        fontSize: 24,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 24,
        color: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        textAlign: 'center',
    },
    boxTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        width: "100%"
    },
    passwordInput: {
        alignItems: 'center',
        borderColor: 'gray',
        padding: 10,
        width: "100%",
    },
    containerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerCheck: {
        justifyContent: 'start',
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
    },
    checkBoxText: {
    },
    errorMessage: {
        color: 'red',
    },
    passwordInputContainer: {
        flexDirection: "row",
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        width: "100%"
      },
});

export default RegistroScreenStyles
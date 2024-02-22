import { StyleSheet } from "react-native"

const RecuperarContraseñaScreenStyles = StyleSheet.create({
    container: {
        borderWidth: 20,
        borderColor: 'red',
        flex: 1,
        position: 'relative',
        top: 50,
        justifyContent: 'center',
        padding: 20,
        marginTop: 40,
    },
    title: {
        color: '#1E1E1E',
        fontSize: 24,
        fontWeight: '400',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20
    },
    subtitle: {
        color: '#1E1E1E',
        fontSize: 24,
        fontWeight: '400',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20
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
})

export default RecuperarContraseñaScreenStyles
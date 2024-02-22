import { StyleSheet } from "react-native"

const NotAuthHomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        color: '#1E1E1E',
        fontSize: 36,
        padding: 40,
        textAlign: 'center',
    },
    subtitle: {
        color: '#1E1E1E',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40,
    },
    paragraph: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 40,
        marginBottom: 40,
        color: 'gray'
    },
    imageContainer: {
        alignItems: 'center', // Añade esta línea para centrar horizontalmente
        textAlign: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
})

export default NotAuthHomeScreenStyles
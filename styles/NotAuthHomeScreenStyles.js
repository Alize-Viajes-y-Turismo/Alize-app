import { StyleSheet } from "react-native"

const NotAuthHomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: 60,
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
        marginBottom: 40,
    },
    scrollView:{
        backgroundColor:'white',
        borderWidth: 2,
        borderColor: 'black'
    }
})

export default NotAuthHomeScreenStyles
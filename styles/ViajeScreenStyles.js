import { StyleSheet } from "react-native"

const ViajeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'pink',
        paddingHorizontal: 20
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.50)',
        fontWeight: '400',
        marginBottom: 15,
    },
    btn: {
        backgroundColor: 'gray',
    },
    input: {
        backgroundColor: 'white',
        marginBottom: 20,
        fontSize: 20,
        shadowColor: '#5B5662', // Cambia a color deseado
        elevation: 5, // Solo para Android
        borderRadius: 2,
    },
    calendarInput: {
        position: 'relative',
        height: 50,
        marginBottom: 20,
        fontSize: 20,
        shadowColor: '#5B5662', // Cambia a color deseado
        elevation: 5, // Solo para Android
        borderRadius: 2,
    },
    containerIdaVuelta: {
    },
    containerCalendar: {
        flexDirection: 'row'

    },
    calendarButton: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    calendarButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default ViajeScreenStyles
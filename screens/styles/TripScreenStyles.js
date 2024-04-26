import { StyleSheet } from "react-native"

const TripScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        borderWidth: 1
    },
    titulo: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 20,
        marginTop: "15%"
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
        borderRadius: 5,
        borderColor: "gray",
        borderWidth: 1
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

export default TripScreenStyles;
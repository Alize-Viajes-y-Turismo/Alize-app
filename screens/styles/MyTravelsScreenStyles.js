import { StyleSheet } from "react-native";


const MyTravelsScreenStyles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#333333',
      marginBottom: 20,
    },
    item: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
    },
    modalContainer: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
      paddingTop: 40,
      justifyContent: 'center',
    },
    modalTitle: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#333333',
      marginBottom: 20,
    },
    modalButton: {
      backgroundColor: '#FC3232',
      paddingVertical: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
    },
    modalButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
    },
    backButton: {
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 1,
    },
  });

export default MyTravelsScreenStyles;
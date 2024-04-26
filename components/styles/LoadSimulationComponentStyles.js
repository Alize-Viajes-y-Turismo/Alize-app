import { StyleSheet } from "react-native";

const LoadSimulationStyles = StyleSheet.create({
  title: {
    fontSize: 36,
    marginBottom: 40,
  },
  activityIndicator: {
    borderColor: 'red',
  },
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center', // Añadir textAlign: 'center' para centrar el texto horizontalmente
  },
  loadedText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image:{
    height:300,
    width:300,
    borderRadius:40,
    marginBottom:40
  }
});


export default LoadSimulationStyles;
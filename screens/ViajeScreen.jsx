import { Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import ViajeScreenStyles from '../styles/ViajeScreenStyles';

function ViajeScreen() {

  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  
  return (
    <View style={ViajeScreenStyles.container}>
    <View style={ViajeScreenStyles.titleContainer}>
      <Text style={ViajeScreenStyles.titulo}>Empeza tu viaje</Text>
    </View>
    <View style={ViajeScreenStyles.container}>
      <Text style={ViajeScreenStyles.text}>Origen</Text>
      <TextInput
        style={ViajeScreenStyles.input}
        placeholder='Corrientes Capital'
        value={origen}
        onChangeText={setOrigen}
      />
      <Text style={ViajeScreenStyles.text}>Destino</Text>
      <TextInput
        style={ViajeScreenStyles.input}
        placeholder='CABA - Buenos Aires'
        value={destino}
        onChangeText={setDestino}
      />
    </View>
  </View>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default PasajePantalla;
=======
export default ViajeScreen;
>>>>>>> 3292bd0 (debugging)

//OPCIONES --------------------------------------------------------------
const styles = StyleSheet.create({
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

=======
export default ViajeScreen;
>>>>>>> 5b6d825 (pasando los estilos de las screens a la carpeta styles)

import { Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const PasajePantalla = () => {

  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  
  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.titulo}>Empeza tu viaje</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.text}>Origen</Text>
      <TextInput
        style={styles.input}
        placeholder='Corrientes Capital'
        value={origen}
        onChangeText={setOrigen}
      />
      <Text style={styles.text}>Destino</Text>
      <TextInput
        style={styles.input}
        placeholder='CABA - Buenos Aires'
        value={destino}
        onChangeText={setDestino}
      />
    </View>
  </View>
  );
};

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

export default PasajePantalla;
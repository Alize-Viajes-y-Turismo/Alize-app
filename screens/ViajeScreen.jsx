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

export default ViajeScreen;
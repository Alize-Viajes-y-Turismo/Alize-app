import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import styles from '../styles/Journey';

function Journey() {

  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  
  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.titulo}>Empezá tu viaje</Text>
    </View>
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
  );
};

export default Journey;
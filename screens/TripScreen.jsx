import React from 'react';
import { Text, View } from 'react-native';

import TripDetailsScreen from './TripDetailsScreen';

function TripScreen() {

  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Elige tu viaje</Text>
    </View>
      <Text style={styles.text}>Viaje 1: Corrientes a Buenos Aires</Text>
      <Text style={styles.text}>Viaje 2: Buenos Aires a Corrientes</Text>
      <Text style={styles.text}>Viaje 3: Resistencia a Buenos Aires</Text>
      <Text style={styles.text}>Viaje 4: Buenos Aires a Resistencia</Text>
  </View>
  );
};

export default TripScreen;
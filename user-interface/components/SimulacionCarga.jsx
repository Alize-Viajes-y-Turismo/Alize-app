import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image, TouchableNativeFeedback, Alert, Button } from 'react-native';
import styles from '../styles/SimulacionCarga';


const SimulacionCarga = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View >
          <Text style={styles.title}>
            Tu viaje mas barato
          </Text>
        </View>
        <View>
          <Image
            source={require('../../assets/alize-mountain.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.loadingText}>Cargando...</Text>
        {
          isLoading &&
          <ActivityIndicator size={100} color="#FC3232" style={styles.activityIndicator} />
        }
      </View>
    </ScrollView>
  );
};



export default SimulacionCarga;
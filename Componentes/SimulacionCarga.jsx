import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image, TouchableNativeFeedback, Alert, Button } from 'react-native';


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
        <Text style={styles.loadingText}>Cargando...</Text>
        {
          isLoading &&
          <ActivityIndicator size={100} color="#FC3232" style={styles.activityIndicator} />
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    marginBottom: 100,
  },
  activityIndicator: {
    borderColor: 'red',
  },
  container: {
    marginTop: 500,
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
});

export default SimulacionCarga;
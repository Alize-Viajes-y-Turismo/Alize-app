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
        <View style={styles.loadingContainer}>
          <TouchableNativeFeedback
            onPress={() => Alert.alert('Hola')}>
            <Text style={styles.title}>
              Tu Viaje mas barato
            </Text>
          </TouchableNativeFeedback>
          <Image
            source={require('../assets/alize-mountain.jpg')}
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={styles.loadingText}>Cargando...</Text>
          {
            isLoading &&
            <ActivityIndicator size={100} color="#FC3232" style={styles.activityIndicator} />
          }
       
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    marginBottom: 100,

  },
  title: {
    fontSize: 48,
    marginBottom: 100,
  },
  activityIndicator: {
    borderColor: 'red',
  },
  container: {
    marginTop: 100,
    borderWidth: 2,
    borderColor: 'blue',
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
  },
  loadedText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SimulacionCarga;
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image } from 'react-native';

import LoadSimulationStyles from './styles/LoadSimulationComponentStyles';

const LoadSimulation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ScrollView>
      <View style={LoadSimulationStyles.container}>
        <View>
          <Text style={LoadSimulationStyles.title}>
            Tu viaje más barato
          </Text>
        </View>
        <View>
          <Image
            source={require('../assets/alize-mountain.jpg')}
            style={LoadSimulationStyles.image}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text style={LoadSimulationStyles.loadingText}>Cargando...</Text>
        </View>
        {isLoading && <ActivityIndicator size={100} color="#FC3232" style={LoadSimulationStyles.activityIndicator} />}
      </View>
    </ScrollView>
  );
};

export default LoadSimulation;
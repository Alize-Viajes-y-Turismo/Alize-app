import React from 'react';
import { View, Alert } from 'react-native';

import { useAuthContext } from '../contexts/AuthContext';
import { useUserContext } from '../contexts/UserContext';
import { usePassengerContext } from '../contexts/PassengerContext';

import PrimaryButton from '../components/PrimaryButton';

import HomeScreenStyles from './styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const { logout } = useAuthContext();
  const { getProfileData } = useUserContext();
  const { getUserPassengers } = usePassengerContext();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al cerrar sesión. Inténtalo de nuevo más tarde.');
    }
  };

  const handleNavigateToMyTravels = async () => {
    try {
      const success = await getUserPassengers();

      if (success) {
        navigation.navigate('MyTravelsScreen');
      } else {
        Alert.alert('Error', 'No se pudieron obtener los datos de los pasajeros. Inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al obtener los datos de los pasajeros. Inténtalo de nuevo más tarde.');
    }
  };

  const handleNavigateToProfile = async () => {
    try {
      await getProfileData();
      navigation.navigate('ProfileScreen');
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al obtener los datos del perfil. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <View style={HomeScreenStyles.container}>
      <PrimaryButton style={HomeScreenStyles.button} onPress={handleNavigateToMyTravels} text="Mis viajes" />
      <PrimaryButton style={HomeScreenStyles.button} onPress={handleNavigateToProfile} text="Mis datos" />
      <PrimaryButton style={HomeScreenStyles.button} onPress={handleLogout} text="Cerrar Sesión" />
    </View>
  );
};

export default HomeScreen;
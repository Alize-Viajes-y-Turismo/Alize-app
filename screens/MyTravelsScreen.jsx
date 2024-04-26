import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { usePassengerContext } from '../contexts/PassengerContext';

import MyTravelsScreenStyles from './styles/MyTravelsScreenStyles';

const MyTravelsScreen = ({ navigation }) => {
  const { userPassengers } = usePassengerContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPassenger, setSelectedPassenger] = useState(null);

  const handleViewPassengerDetails = (passenger) => {
    setSelectedPassenger(passenger);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPassenger(null);
  };

  return (
    <View style={MyTravelsScreenStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={MyTravelsScreenStyles.backButton}>
        <AntDesign name="arrowleft" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={MyTravelsScreenStyles.title}>Mis Viajes</Text>
      <FlatList
        data={userPassengers} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleViewPassengerDetails(item)} style={MyTravelsScreenStyles.item}>
            <Text>ID de Viaje: {item.travelId}</Text>
            <Text>Nombre: {item.name}</Text>
            <Text>Documento: {item.dni}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={MyTravelsScreenStyles.modalContainer}>
          <Text style={MyTravelsScreenStyles.modalTitle}>Detalles del Pasajero</Text>
          <Text>Nombre: {selectedPassenger?.name}</Text>
          <Text>ID: {selectedPassenger?.id}</Text>
          <Text>Documento: {selectedPassenger?.dni}</Text>
          <Text>ID de Viaje: {selectedPassenger?.travelId}</Text>
          <TouchableOpacity onPress={closeModal} style={MyTravelsScreenStyles.modalButton}>
            <Text style={MyTravelsScreenStyles.modalButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default MyTravelsScreen;
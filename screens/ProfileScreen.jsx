import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useUserContext } from '../contexts/UserContext';

const ProfileScreen = ({ navigation }) => {
  const { profileData } = useUserContext();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (profileData) {
      if (profileData.name) {
        setUserName(profileData.name);
      }
      if (profileData.email) {
        setUserEmail(profileData.email);
      }
    }
  }, [profileData]);

  const handleUpdateName = () => {
    navigation.navigate('UpdateNameScreen');
  };

  const handleUpdatePassword = () => {
    navigation.navigate('UpdatePasswordScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="#333" />
      </TouchableOpacity>
      <View style={styles.profileHeader}>
        <Text style={styles.title}>Mis datos</Text>
      </View>
      <View style={styles.userDataContainer}>
        <View style={styles.userData}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>{userName}</Text>
        </View>
        <View style={styles.userData}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{userEmail}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleUpdateName} style={styles.button}>
          <Text style={styles.buttonText}>Cambiar Nombre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUpdatePassword} style={styles.button}>
          <Text style={styles.buttonText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333333',
  },
  userDataContainer: {
    marginTop: 20,
  },
  userData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    color: '#666666',
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FC3232',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;

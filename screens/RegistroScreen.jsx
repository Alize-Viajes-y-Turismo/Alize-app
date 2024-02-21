import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import BotonAtras from '../Components/BotonSecundario';
import Boton from '../Components/BotonPrimario';
import Checkbox from 'expo-checkbox';
import axios from '../axiosConfig'


export default function RegistroPantalla({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.title}>¿Todavía no te registraste?</Text>
        </View>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.paragraph}>Para poder comprar tus pasajes debes tener una cuenta registrada.</Text>
        </View>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.subtitle}>Registrarme</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor={'gray'}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Confirmar Contraseña"
            placeholderTextColor={'gray'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <View style={styles.containerCheck}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#FC3232' : undefined}
          />
          <Text style={styles.checkBoxText}>
            He leído y acepto las condiciones
          </Text>
        </View>
        <View style={styles.containerBtn}>
          <Boton text='Registrarme' onPress={() => { alert('Esto tiene que llevar a una peticion hacia el back para validar informacion de si el usuario se registro correctamente') }} />
        </View>
        <View style={styles.containerBtn}>
          <BotonAtras text='Atras' onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'pink',
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    color: '#F46262',
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    width: 300,
    margin: 10,
  },
  subtitle: {
    color: '#1E1E1E',
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    margin: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
  },
  boxTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  containerBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  containerCheck: {
    justifyContent: 'start',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
  },
  checkBoxText: {
    marginLeft: 10,
  },
});
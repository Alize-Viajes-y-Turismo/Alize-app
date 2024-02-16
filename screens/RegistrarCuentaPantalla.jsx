import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import BotonAtras from '../Components/BotonSecundario';
import Boton from '../Components/BotonPrimario';
import { Checkbox } from 'react-native-paper';


export default function registrarCuentaPantalla() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.title}>¿Todavia no te registraste?</Text>
        </View>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.paragraph}>Para poder comprar tus pasajes debes tener una cuenta registrada.</Text>
        </View>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.subtitle}>Registrarme</Text>
        </View>
        <View >
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={setEmail} />
        </View>
        <View >
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor={'gray'}
            value={password}
            onChangeText={setPassword} />
        </View>
        <View >
          <TextInput
            style={styles.input}
            placeholder="Confirmar Contraseña"
            placeholderTextColor={'gray'}
            value={confirmPassword}
            onChangeText={setConfirmPassword} />
        </View>
        <View style={styles.containerCheck}>
          <Checkbox color="#F46262" status={isChecked ? 'checked' : 'unchecked'} onPress={() => setChecked(!isChecked)} label="He leído y acepto las condiciones" />
          <Text>
            He leido y acepto las condiciones
          </Text>
        </View>
        <View style={styles.containerBtn}>
          <Boton text='Registrarme'></Boton>
        </View>
        <View style={styles.containerBtn}>
          <BotonAtras text='Atras'></BotonAtras>
        </View>
      </View>
    </ScrollView>
  )
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
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 300,
    margin: 10,
  },
  subtitle: {
    color: '#1E1E1E',
    fontSize: 24,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 20,
    fontSize: 20,
    padding: 15,
    shadowColor: '#5B5662', // Cambia a color deseado
    elevation: 5, // Solo para Android
    borderRadius: 2,
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
})
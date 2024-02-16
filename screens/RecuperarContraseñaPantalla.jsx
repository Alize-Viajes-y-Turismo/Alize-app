import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Boton from '../Components/BotonPrimario';
import BotonAtras from '../Components/BotonSecundario';

export default function recuperarContraseñaPantalla() {

  const sendEmail = () => {
    alert("Se envio el mensaje")
  }

  const [email, setEmail] = useState('');


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.title}>¿Olvidaste la contraseña?</Text>
        </View>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.paragraph}>Las instrucciones necesarias a llevar a cabo para recuperar tu constraseña se enviaran al correo electronico ingresado</Text>
        </View>
        <View style={styles.boxTitleContainer}>
          <Text style={styles.subtitle}>Recuperar Contraseña</Text>
        </View>
        <View >
          <TextInput
            style={styles.input}
            placeholder="Correo Electronico"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={setEmail} />
        </View>
        <View style={styles.containerBtn}>
          <Boton text='Enviar' onPress={sendEmail}></Boton>
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
})
import { View, Text, ScrollView, StyleSheet, TextInput, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Boton from '../Components/BotonPrimario';
import BotonAtras from '../Components/BotonSecundario';

function RecuperarContraseñaPantalla({ navigation }) {

  const sendEmail = () => {
    alert("Se envio el mensaje")
  }

  const [email, setEmail] = useState('');


  return (
    <ScrollView>
      <SafeAreaView>
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
            <Boton text='Enviar' onPress={() => alert('Mostrar algun modal que informe al usuario que su email se envio correctamente')}></Boton>
          </View>
          <View style={styles.containerBtn}>
            <BotonAtras
              onPress={() => { navigation.goBack() }}
              text='Atras'></BotonAtras>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default RecuperarContraseñaPantalla;

//OPCIONES ---------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    borderWidth:20,
    borderColor:'red',
    flex: 1,
    position:'relative',
    top:50,
    justifyContent: 'center',
    padding: 20,
    marginTop: 40,
  },
  title: {
    color: '#1E1E1E',
    fontSize: 24,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20
  },
  subtitle: {
    color: '#1E1E1E',
    fontSize: 24,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
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
})
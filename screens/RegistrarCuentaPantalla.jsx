//componentes
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import BotonAtras from '../Components/BotonSecundario';
import Boton from '../Components/BotonPrimario';
import Checkbox from 'expo-checkbox';

//hooks
import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext.js';



export default function RegistrarCuentaPantalla({ navigation }) {
  const {login} = useAuth()



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const [emailWarning, setEmailWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [termsWarning, setTermsWarning] = useState(false);




  //FUNCION PARA ENVIRA FORMULARIO
  const enviarFormulario = async () => {
    setEmailWarning(false)
    setPasswordWarning(false)
    setTermsWarning(false)

    if (password !== confirmPassword) {
      setPasswordWarning(true)
    } else if (!isChecked) {
      setTermsWarning(true)
    } else {
      const res = await fetch('http://backend/api/users/register', {
        method: 'POST',
        headers: {
          'content-type': 'json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      res.json()
      if (res.ok) {
        login(res.body.token)
      } else {
        setEmailWarning(true)
      }
    }
  }




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
          {emailWarning && <Text style={{ color: 'red' }}>El correo que ingresaste pertenece a otra cuenta</Text>} 
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'gray'}T
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor={'gray'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View >
          {passwordWarning && <Text style={{ color: 'red' }}>Las contrasenas no coinciden</Text>} 
          <TextInput
            style={styles.input}
            placeholder="Confirmar Contraseña"
            placeholderTextColor={'gray'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
            />
        </View>
        <View style={styles.containerCheck}>
          {termsWarning && <Text style={{ color: 'red' }}>Debe aceptar las condiciones</Text>} 
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
          <Boton text='Registrarme' onPress={enviarFormulario}></Boton>
        </View>
        <View style={styles.containerBtn}>
          <BotonAtras text='Atras' onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}

//estilos

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
  checkBoxText: {
    marginLeft: 10,
  },
});
import { View, Text, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import BotonSecundario from '../Componentes/BotonSecundario';
import BotonPrimario from '../Componentes/BotonPrimario';
import Checkbox from 'expo-checkbox';
import { useAuthContext } from '../contexts/AuthContext';
import RegistroScreenStyles from '../styles/RegistroScreenStyles';
import { registerRequest } from '../api/authRequests'

export default function RegistroPantalla({ navigation }) {
  //funcion para autenticar al usuario (se usa adentro del handleRegister)
  const {login} = useAuthContext()

  //estados para capturar los datos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  //esta funcion registra al usuario y luego ejecuta el login si el email ingresado no pertenece a una cuenta existente
  //en caso contrario, se notifica al usuario que el email ingresado ya pertenece a una cuenta
  async function handleRegister() {
      try {
        const res = registerRequest(email, password)
        switch (res.status) {
          case 200:
            login();
            break;
          case 409: 
            alert("El email que ingresaste ya pertenece a una cuenta")
            break;
          default: 
            alert("Error interno del servidor")
        }
      } catch(err) {
        alert(err.message)
      }
    }

  return (
    <ScrollView>
      <View style={RegistroScreenStyles.container}>
        <View style={RegistroScreenStyles.boxTitleContainer}>
          <Text style={RegistroScreenStyles.title}>¿Todavía no te registraste?</Text>
        </View>
        <View style={RegistroScreenStyles.boxTitleContainer}>
          <Text style={RegistroScreenStyles.paragraph}>Para poder comprar tus pasajes debes tener una cuenta registrada.</Text>
        </View>
        <View style={RegistroScreenStyles.boxTitleContainer}>
          <Text style={RegistroScreenStyles.subtitle}>Registrarme</Text>
        </View>
        <View>
          <TextInput
            style={RegistroScreenStyles.input}
            placeholder="Email"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <TextInput
            style={RegistroScreenStyles.input}
            placeholder="Contraseña"
            placeholderTextColor={'gray'}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View>
          <TextInput
            style={RegistroScreenStyles.input}
            placeholder="Confirmar Contraseña"
            placeholderTextColor={'gray'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <View style={RegistroScreenStyles.containerCheck}>
          <Checkbox
            style={RegistroScreenStyles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#FC3232' : undefined}
          />
          <Text style={RegistroScreenStyles.checkBoxText}>
            He leído y acepto las condiciones
          </Text>
        </View>
        <View style={RegistroScreenStyles.containerBtn}>
          <BotonPrimario text='Registrarme' onPress={handleRegister} />
        </View>
        <View style={RegistroScreenStyles.containerBtn}>
          <BotonSecundario text='Atras' onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
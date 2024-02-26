import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import BotonSecundario from '../Componentes/BotonSecundario';
import BotonPrimario from '../Componentes/BotonPrimario';
import Checkbox from 'expo-checkbox';
import RegistroScreenStyles from '../styles/RegistroScreenStyles';
import { useAuthContext } from '../contexts/AuthContext';

export default function RegistroPantalla({ navigation }) {

  //CONSTANTES

  //funcion para autenticar al usuario (se usa adentro del handleRegister).
  const { register } = useAuthContext();



  //Para confirmar la contraseña y el comprobar.
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);



  //Estados para capturar los datos del formulario.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = {email: email, password: password};


    //funcion que devuelve true si los datos son validos
  //en caso contrario alerta al usuario y devuelve false
  const isDataValidated = () => {

    if (password != confirmPassword) {

      alert("Las contraseñas no coinciden");
      return false;

    } else if (!isChecked) {

      alert("Debes aceptar las condiciones");
      return false;

    } else {

      return true;

    }

  }

  //esta funcion registra al usuario y luego ejecuta el login si el email ingresado no pertenece a una cuenta existente
  //en caso contrario, se notifica al usuario que el email ingresado ya pertenece a una cuenta
  const handlerRegister = async () => {

    if (isDataValidated()) {

      try {
        
        await register(user);
        
      } catch(error) {

        alert(error.message)
        
      }
    }

  };
      


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
          <BotonPrimario text='Registrarme' onPress={handlerRegister} />
        </View>
        <View style={RegistroScreenStyles.containerBtn}>
          <BotonSecundario text='Atras' onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
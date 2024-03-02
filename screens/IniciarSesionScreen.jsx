import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import BotonPrimario from '../components/BotonPrimario';
import BotonSecundario from '../components/BotonSecundario';
import { Entypo } from '@expo/vector-icons';
import IniciarSesionScreenStyles from '../styles/IniciarSesionScreenStyles';
import { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';

function IniciarSesionScreen({ navigation }) {



  //CONSTANTES

  //funcion para autenticar al usuario (se usa adentro del handleRegister).
  const { login } = useAuthContext();



  //Estados para capturar los datos del formulario.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = {email, password};



  //esta funcion registra al usuario y luego ejecuta el login si el email ingresado no pertenece a una cuenta existente
  //en caso contrario, se notifica al usuario que el email ingresado ya pertenece a una cuenta
  const handlerLogin = async () => {

      try {

        await login(user);
        
      } catch(error) {

        alert(error.message);
      }

  };

  const [showPassword, setShowPassword] = useState(false); 

  //funcion para cambiar visibilidad de la contraseña
  function switchPasswordVisibility() {
    setShowPassword(!showPassword);
  };


//-----------------------------------------------



  return (
    <SafeAreaView>
      <ScrollView >
        <View style={IniciarSesionScreenStyles.container}>
          <View >
            <Text style={IniciarSesionScreenStyles.title}>
              Sumate a la familia de alize, inicia sesion si ya tenes una cuenta registrada con nosotros
            </Text>
          </View>
          <View >
            <Text style={IniciarSesionScreenStyles.subtitle}>
              Ingresar
            </Text>
          </View>
          <View style={IniciarSesionScreenStyles.inputContainer}>
            <TextInput
              style={IniciarSesionScreenStyles.input}
              placeholder="Correo Electronico"
              placeholderTextColor={'gray'}
              onChangeText={setEmail}
            />
            <View style={IniciarSesionScreenStyles.inputContainer}>
              <View style={IniciarSesionScreenStyles.passwordInputContainer}>
                <TextInput
                  style={IniciarSesionScreenStyles.passwordInput}
                  placeholder="Contraseña"
                  placeholderTextColor="gray"
                  secureTextEntry={!showPassword} // Mostrar u ocultar la contraseña según el estado
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={switchPasswordVisibility}>
                  <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={IniciarSesionScreenStyles.boxTitleContainer}>
            <Text
              onPress={() => { navigation.navigate('RecuperarContraseñaScreen') }}
              style={IniciarSesionScreenStyles.paragraph}>
                ¿Olvidaste tu Contraseña?
            </Text>
          </View>
          <View style={IniciarSesionScreenStyles.btnContainer}>
            <BotonPrimario onPress={handlerLogin} text='Iniciar Sesion'></BotonPrimario>
          </View>
          <View style={IniciarSesionScreenStyles.btnContainer}>
            <BotonSecundario
              onPress={() => { navigation.goBack() }}
              text='Atras'></BotonSecundario>
          </View>
          <View >
            <Text
              onPress={() => { navigation.navigate('RegistroScreen') }}
              style={IniciarSesionScreenStyles.paragraph}>
                ¿No tenes un usuario? Create una cuenta
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

};

export default IniciarSesionScreen;



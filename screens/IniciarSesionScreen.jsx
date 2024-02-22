import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import Boton from '../Components/BotonPrimario';
import BotonAtras from '../Components/BotonSecundario';
import { Entypo } from '@expo/vector-icons';
import IniciarSesionScreenStyles from '../styles/IniciarSesionScreenStyles';
import { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import {loginRequest} from "../api/authRequests"


function IniciarSesionScreen({ navigation }) {

  const {login} = useAuthContext()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar si la contraseña se muestra o no

  // Función para alternar entre mostrar y ocultar la contraseña
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  async function loginHandler() {
    try {
      const prueba = 409;
      const res = loginRequest(email, password)
      switch (prueba) {
        case 200:
          login();
          break;
        case 409: 
          alert("Contrasena o email incorrectos")
          break;
        case 500: 
          alert("Error interno del servidor")
        default: 
          alert("No hemos podido logearte")
      }
    } catch(err) {
      alert(err.message)
    }
  }


  return (
    <SafeAreaView>
      <ScrollView >
        <View style={IniciarSesionScreenStyles.container}>
          <View >
            <Text style={IniciarSesionScreenStyles.title}>Sumate a la familia de alize, inicia sesion si ya tenes una cuenta registrada con nosotros</Text>
          </View>
          <View >
            <Text style={IniciarSesionScreenStyles.subtitle}>Ingresar</Text>
          </View>
          <View style={IniciarSesionScreenStyles.inputContainer}>
            <TextInput
              style={IniciarSesionScreenStyles.input}
              placeholder="Correo Electronico"
              placeholderTextColor={'gray'}
              onChange={setEmail}
            />
            <View style={IniciarSesionScreenStyles.inputContainer}>
              <View style={IniciarSesionScreenStyles.passwordInputContainer}>
                <TextInput
                  style={IniciarSesionScreenStyles.passwordInput}
                  placeholder="Contraseña"
                  placeholderTextColor="gray"
                  secureTextEntry={!showPassword} // Mostrar u ocultar la contraseña según el estado
                  onChange={setPassword}
                />
                <TouchableOpacity onPress={toggleShowPassword}>
                  <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={IniciarSesionScreenStyles.boxTitleContainer}>
            <Text
              onPress={() => { navigation.navigate('RecuperarContraseñaPantalla') }}
              style={IniciarSesionScreenStyles.paragraph}>¿Olvidaste tu Contraseña?</Text>
          </View>
          <View style={IniciarSesionScreenStyles.btnContainer}>
            <Boton onPress={loginHandler} text='Iniciar Sesion'></Boton>
          </View>
          <View style={IniciarSesionScreenStyles.btnContainer}>
            <BotonAtras
              onPress={() => { navigation.goBack() }}
              text='Atras'></BotonAtras>
          </View>
          <View >
            <Text
              onPress={() => { navigation.navigate('RegistroScreen') }}
              style={IniciarSesionScreenStyles.paragraph}>¿No tenes un usuario? Create una cuenta</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

};

export default IniciarSesionScreen;



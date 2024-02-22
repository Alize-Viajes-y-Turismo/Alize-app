import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import Boton from '../Components/BotonPrimario';
import BotonAtras from '../Components/BotonSecundario';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import IniciarSesionScreenStyles from '../styles/IniciarSesionScreenStyles';

function IniciarSesionScreen({ navigation }) {

  navigation.setOptions({ tabBarVisible: false });

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar si la contraseña se muestra o no

  // Función para alternar entre mostrar y ocultar la contraseña
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


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
                <TouchableOpacity onPress={toggleShowPassword} style={styles.passwordVisibilityButton}>
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
            <Boton onPress={() => alert('Este boton debe dejarme navegar como usuario dentro de la app')} text='Iniciar Sesion'></Boton>
          </View>
          <View style={IniciarSesionScreenStyles.btnContainer}>
            <BotonAtras
              onPress={() => { navigation.goBack() }}
              text='Atras'></BotonAtras>
          </View>
          <View >
            <Text
              onPress={() => { navigation.navigate('RegistroPantalla') }}
              style={IniciarSesionScreenStyles.paragraph}>¿No tenes un usuario? Create una cuenta</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

};

export default IniciarSesionScreen;

import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import BotonPrimario from '../Componentes/BotonPrimario';
import BotonSecundario from '../Componentes/BotonSecundario';
import { Entypo } from '@expo/vector-icons';
import IniciarSesionScreenStyles from '../styles/IniciarSesionScreenStyles';
import { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';


function IniciarSesionScreen({ navigation }) {
  //funcion para autenticar al usuario (se usa adentro del loginHandler)
  const {login} = useAuthContext();

  //estados para capturar los datos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //estado para mostrar/ocultar contraseña
  const [showPassword, setShowPassword] = useState(false); 

  //funcion para cambiar visibilidad de la contraseña
  function switchPasswordVisibility() {
    setShowPassword(!showPassword);
  };

  //esta funcion ejecuta el login solamente si los datos ingresados son correctos
  //en caso contrario, se le notifica al usuario que los datos que ingresó son incorrectos
  async function loginHandler() {
    try {
      const res = await loginRequest(email, password)
      switch (res.status) {
        case 200:
          login();
          break;
        case 409: 
          alert("Los datos ingresados son incorrectos")
          break;
        default: 
          alert("Error interno del servidor")
      }
    } catch(err) {
      alert("Ha ocurrido un error")
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
              onPress={() => { navigation.navigate('RecuperarContraseñaPantalla') }}
              style={IniciarSesionScreenStyles.paragraph}>¿Olvidaste tu Contraseña?</Text>
          </View>
          <View style={IniciarSesionScreenStyles.btnContainer}>
            <BotonPrimario onPress={loginHandler} text='Iniciar Sesion'></BotonPrimario>
          </View>
          <View style={IniciarSesionScreenStyles.btnContainer}>
            <BotonSecundario
              onPress={() => { navigation.goBack() }}
              text='Atras'></BotonSecundario>
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



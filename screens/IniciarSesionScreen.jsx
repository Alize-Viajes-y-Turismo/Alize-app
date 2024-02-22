<<<<<<< HEAD
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
=======
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
>>>>>>> 5b6d825 (pasando los estilos de las screens a la carpeta styles)
import Boton from '../Components/BotonPrimario';
import BotonAtras from '../Components/BotonSecundario';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
<<<<<<< HEAD
import { useAuth } from '../auth/authentication';
=======
import IniciarSesionScreenStyles from '../styles/IniciarSesionScreenStyles';
>>>>>>> 5b6d825 (pasando los estilos de las screens a la carpeta styles)

<<<<<<< HEAD
<<<<<<< HEAD
=======
function IniciarSesion({ navigation }) {
=======
function IniciarSesionScreen({ navigation }) {
>>>>>>> 3292bd0 (debugging)

  navigation.setOptions({ tabBarVisible: false });
>>>>>>> 037f718 (agregando navigation.setOptions({ tabBarVisible: false }) en pantallas: CodigoVerificacion, IniciarSesion, Loading, Registro)



function InicioSesionPantalla({ navigation }) {

  const {login} = useAuth()

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
<<<<<<< HEAD
              style={styles.paragraph}
            >
              ¿Olvidaste tu Contraseña?
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <Boton onPress={()=> {login(email,password)}} text='Iniciar Sesion'></Boton>
=======
              style={IniciarSesionScreenStyles.paragraph}>¿Olvidaste tu Contraseña?</Text>
          </View>
          <View style={IniciarSesionScreenStyles.btnContainer}>
            <Boton onPress={() => alert('Este boton debe dejarme navegar como usuario dentro de la app')} text='Iniciar Sesion'></Boton>
>>>>>>> 5b6d825 (pasando los estilos de las screens a la carpeta styles)
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

<<<<<<< HEAD
export default InicioSesionPantalla;


//OPCIONES ----------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    marginTop: 20
  },
  title: {
    color: '#1E1E1E',
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 40
  },
  boxTitleContainer: {
    marginBottom: 20
  },
  subtitle: {
    fontSize: 24,
    color: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 40
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    paddingHorizontal: 10

  },
  inputContainer: {
    marginBottom: 20,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10
  },
  passwordInput: {
    flex: 1,
  },
  passwordVisibilityButton: {
    padding: 10,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20
  }
})

<<<<<<< HEAD
=======
=======
>>>>>>> 5b6d825 (pasando los estilos de las screens a la carpeta styles)
export default IniciarSesionScreen;
>>>>>>> 3292bd0 (debugging)

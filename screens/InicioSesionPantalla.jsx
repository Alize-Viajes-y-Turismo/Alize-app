import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import Boton from '../Components/BotonPrimario';
import BotonAtras from '../Components/BotonSecundario';
import { useState } from 'react';
import { Entypo } from '@expo/vector-icons';

const InicioSesionPantalla = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(false); // Estado para controlar si la contraseña se muestra o no

  // Función para alternar entre mostrar y ocultar la contraseña
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  return (
    <ScrollView>
      <View style={styles.container}>
        <View >
          <Text style={styles.title}>Sumate a la familia de alize, inicia sesion si ya tenes una cuenta registrada con nosotros</Text>
        </View>
        <View >
          <Text style={styles.subtitle}>Ingresar</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo Electronico"
            placeholderTextColor={'gray'}
          />
          <View style={styles.inputContainer}>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Contraseña"
                placeholderTextColor="gray"
                secureTextEntry={!showPassword} // Mostrar u ocultar la contraseña según el estado
              />
              <TouchableOpacity onPress={toggleShowPassword} style={styles.passwordVisibilityButton}>
                <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.boxTitleContainer}>
          <Text
            onPress={() => { navigation.navigate('RecuperarContraseñaPantalla') }}
            style={styles.paragraph}>¿Olvidaste tu Contraseña?</Text>
        </View>
        <View >
          <Boton onPress={() => alert('Este boton debe dejarme navegar como usuario dentro de la app')} text='Iniciar Sesion'></Boton>
        </View>
        <View style={styles.paragraph}>
          <BotonAtras
            onPress={() => { navigation.goBack() }}
            text='Atras'></BotonAtras>
        </View>
        <View >
          <Text
            onPress={() => { navigation.navigate('RegistrarCuentaPantalla') }}
            style={styles.paragraph}>¿No tenes un usuario? Create una cuenta</Text>
        </View>
      </View>
    </ScrollView>
  );

};

export default InicioSesionPantalla;

//OPCIONES --------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'pink',
    padding: 20,
    backgroundColor: 'white',
    marginTop: 20
  },
  title: {
    color: '#FC3232',
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 40
  },
  subtitle: {
    fontSize: 36,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 40
  },
  input: {
    marginBottom: 20,
    fontSize: 20,
    padding: 20,
    shadowColor: '#5B5662', // Cambia a color deseado
    elevation: 5, // Solo para Android
    borderRadius: 2,
  },
  inputContainer: {
    marginBottom: 40,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: 20,
    padding: 20,
    shadowColor: '#5B5662', // Cambia a color deseado
    elevation: 5, // Solo para Android
    borderRadius: 2,
  },
  passwordVisibilityButton: {
    padding: 10,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginBottom: 40,
  },
  btnAtras: {
    marginBottom: 40,

  }
})


import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Boton from '../Components/BotonPrimario'


const BienvenidaPantalla = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Bienvenido/a</Text>
      <Text style={style.subtitle}>Gracias por elegir alize</Text>
      <View style={style.imageContainer}>
        <Image
          source={require('../assets/bienvenido.png')}
          style={style.image}
          resizeMode="cover"
        />
        <Text style={style.subtitle}>Inicia sesion si ya tenes una cuenta para poder viajar con nosotros, caso contrario create una cuenta</Text>
        <Boton
          text='Iniciar Sesion'
          onPress={() => navigation.navigate('IniciarSesion')} />
        <Text onPress={() => navigation.navigate('RegistrarCuentaPantalla')} style={style.paragraph}>¿No tenes un usuario? Create una cuenta</Text>
      </View>
    </View>
  )
}

export default BienvenidaPantalla

//OPCIONES ---------------------------------------

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 36,
    padding: 40,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 40,
    marginBottom: 40,
    color: 'gray'
  },
  imageContainer: {
    alignItems: 'center', // Añade esta línea para centrar horizontalmente
    textAlign: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },

})



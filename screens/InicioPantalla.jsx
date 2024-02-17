import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Boton from '../Components/BotonPrimario'

const InicioPantalla = () => {
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
        <Boton />
        <Text style={style.paragraph}>¿No tenes un usuario? Create una cuenta</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'pink',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 36,
    borderWidth: 2,
    borderColor: 'pink',
    padding: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'pink',
    marginBottom:20,

  },
  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    borderWidth: 2,
    borderColor: 'pink',
    marginBottom:20,
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
  }
})


export default InicioPantalla
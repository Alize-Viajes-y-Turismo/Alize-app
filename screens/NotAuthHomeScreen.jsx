import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Boton from '../Components/BotonPrimario'


const BienvenidaPantalla = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView >
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
            <Text onPress={() => navigation.navigate('RegistroPantalla')} style={style.paragraph}>¿No tenes un usuario? Create una cuenta</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
  title: {
    color: '#1E1E1E',
    fontSize: 36,
    padding: 40,
    textAlign: 'center',
  },
  subtitle: {
    color: '#1E1E1E',
    fontSize: 20,
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


export default BienvenidaPantalla

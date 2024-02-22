import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Boton from '../Components/BotonPrimario'
import NotAuthHomeScreenStyles from '../styles/NotAuthHomeScreenStyles'


function NotAuthHomeScreen({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView >
        <View style={NotAuthHomeScreenStyles.container}>
          <Text style={NotAuthHomeScreenStyles.title}>Bienvenido/a</Text>
          <Text style={NotAuthHomeScreenStyles.subtitle}>Gracias por elegir alize</Text>
          <View style={NotAuthHomeScreenStyles.imageContainer}>
            <Image
              source={require('../assets/bienvenido.png')}
              style={NotAuthHomeScreenStyles.image}
              resizeMode="cover"
            />
            <Text style={NotAuthHomeScreenStyles.subtitle}>Inicia sesion si ya tenes una cuenta para poder viajar con nosotros, caso contrario create una cuenta</Text>
            <Boton
              text='Iniciar Sesion'
<<<<<<< HEAD
              onPress={() => navigation.navigate('InicioSesion')} />
            <Text onPress={() => navigation.navigate('RegistroPantalla')} style={style.paragraph}>¿No tenes un usuario? Create una cuenta</Text>
=======
              onPress={() => navigation.navigate('IniciarSesion')} />
            <Text onPress={() => navigation.navigate('RegistroPantalla')} style={NotAuthHomeScreenStyles.paragraph}>¿No tenes un usuario? Create una cuenta</Text>
>>>>>>> 5b6d825 (pasando los estilos de las screens a la carpeta styles)
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default NotAuthHomeScreen;
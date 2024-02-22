import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import BotonPrimario from '../Componentes/BotonPrimario'
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
            <BotonPrimario
              text='Iniciar Sesion'
              onPress={() => navigation.navigate('IniciarSesionScreen')} 
            />
            <Text onPress={() => navigation.navigate('RegistroPantalla')} style={NotAuthHomeScreenStyles.paragraph}>¿No tenes un usuario? Create una cuenta</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default NotAuthHomeScreen;
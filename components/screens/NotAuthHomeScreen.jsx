import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import BotonPrimario from '../components/BotonPrimario';
import styles from '../styles/NotAuthHomeScreenStyles';


function NotAuthHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenido/a</Text>
        <Text style={styles.subtitle}>Gracias por elegir alize</Text>
        <Image
          source={require('../assets/bienvenido.png')}
          style={styles.image}
          resizeMode="cover"/>
        <Text style={styles.subtitle}>Inicia sesion si ya tenes una cuenta para poder viajar con nosotros, caso contrario create una cuenta</Text>
        <BotonPrimario
          text='Iniciar Sesion'
          onPress={() => navigation.navigate('IniciarSesionScreen')} 
        />
            <Text 
              onPress={() => navigation.navigate('RegistroScreen')} 
              style={styles.link}>
                ¿No tenes un usuario? Create una cuenta
            </Text>
            
    </View>
  )
}

export default NotAuthHomeScreen;
import React from 'react';
import { Image, Text, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

import NotAuthHomeScreenStyles from './styles/NotAuthHomeScreenStyles';

function NotAuthHomeScreen({ navigation }) {
  return (
    <View style={NotAuthHomeScreenStyles.container}>
      <Text style={NotAuthHomeScreenStyles.title}>Bienvenido/a</Text>
      <Text style={NotAuthHomeScreenStyles.subtitle}>Gracias por elegir alize</Text>
      <Image
        source={require('../assets/bienvenido.png')}
        style={NotAuthHomeScreenStyles.image}
        resizeMode="cover"
      />
      <Text style={NotAuthHomeScreenStyles.subtitle}>
        Inicia sesión si ya tienes una cuenta para poder viajar con nosotros, de lo contrario, crea una cuenta
      </Text>
      <PrimaryButton onPress={() => navigation.navigate('LoginScreen')} text="Iniciar Sesión" />
      <Text
        onPress={() => navigation.navigate('RegisterScreen')}
        style={NotAuthHomeScreenStyles.link}
      >
        ¿No tienes un usuario? Crea una cuenta
      </Text>
    </View>
  );
}

export default NotAuthHomeScreen;
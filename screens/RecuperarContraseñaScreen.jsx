import { View, Text, ScrollView, StyleSheet, TextInput, Button, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import BotonPrimario from '../Componentes/BotonPrimario';
import BotonSecundario from '../Componentes/BotonSecundario';
import RecuperarContraseñaScreenStyles from '../styles/RecuperarContraseñaScreenStyles';

function RecuperarContraseñaScreen({ navigation }) {

  navigation.setOptions({ tabBarVisible: false });

  const [email, setEmail] = useState('');


  return (
    <ScrollView>
      <SafeAreaView>
        <View style={RecuperarContraseñaScreenStyles.container}>
          <View style={RecuperarContraseñaScreenStyles.boxTitleContainer}>
            <Text style={RecuperarContraseñaScreenStyles.title}>¿Olvidaste la contraseña?</Text>
          </View>
          <View style={RecuperarContraseñaScreenStyles.boxTitleContainer}>
            <Text style={RecuperarContraseñaScreenStyles.paragraph}>Las instrucciones necesarias a llevar a cabo para recuperar tu constraseña se enviaran al correo electronico ingresado</Text>
          </View>
          <View style={RecuperarContraseñaScreenStyles.boxTitleContainer}>
            <Text style={RecuperarContraseñaScreenStyles.subtitle}>Recuperar Contraseña</Text>
          </View>
          <View >
            <TextInput
              style={RecuperarContraseñaScreenStyles.input}
              placeholder="Correo Electronico"
              placeholderTextColor={'gray'}
              value={email}
              onChangeText={setEmail} />
          </View>
          <View style={RecuperarContraseñaScreenStyles.containerBtn}>
            <BotonPrimario text='Enviar' onPress={() => alert('Mostrar algun modal que informe al usuario que su email se envio correctamente')}></BotonPrimario>
          </View>
          <View style={RecuperarContraseñaScreenStyles.containerBtn}>
            <BotonSecundario
              onPress={() => { navigation.goBack() }}
              text='Atras'></BotonSecundario>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default RecuperarContraseñaScreen;
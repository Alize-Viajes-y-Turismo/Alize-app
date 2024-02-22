import { View, Text, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import BotonAtras from '../Components/BotonSecundario';
import Boton from '../Components/BotonPrimario';
import Checkbox from 'expo-checkbox';
<<<<<<< HEAD
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> 3292bd0 (debugging)
=======
import RegistroScreenStyles from '../styles/RegistroScreenStyles';
>>>>>>> 5b6d825 (pasando los estilos de las screens a la carpeta styles)


export default function RegistroScreen({ navigation }) {

  navigation.setOptions({ tabBarVisible: false });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  return (
    <ScrollView>
      <View style={RegistroScreenStyles.container}>
        <View style={RegistroScreenStyles.boxTitleContainer}>
          <Text style={RegistroScreenStyles.title}>¿Todavía no te registraste?</Text>
        </View>
        <View style={RegistroScreenStyles.boxTitleContainer}>
          <Text style={RegistroScreenStyles.paragraph}>Para poder comprar tus pasajes debes tener una cuenta registrada.</Text>
        </View>
        <View style={RegistroScreenStyles.boxTitleContainer}>
          <Text style={RegistroScreenStyles.subtitle}>Registrarme</Text>
        </View>
        <View>
          <TextInput
            style={RegistroScreenStyles.input}
            placeholder="Email"
            placeholderTextColor={'gray'}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <TextInput
            style={RegistroScreenStyles.input}
            placeholder="Contraseña"
            placeholderTextColor={'gray'}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View>
          <TextInput
            style={RegistroScreenStyles.input}
            placeholder="Confirmar Contraseña"
            placeholderTextColor={'gray'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <View style={RegistroScreenStyles.containerCheck}>
          <Checkbox
            style={RegistroScreenStyles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#FC3232' : undefined}
          />
          <Text style={RegistroScreenStyles.checkBoxText}>
            He leído y acepto las condiciones
          </Text>
        </View>
        <View style={RegistroScreenStyles.containerBtn}>
          <Boton text='Registrarme' onPress={() => { alert('Esto tiene que llevar a una peticion hacia el back para validar informacion de si el usuario se registro correctamente') }} />
        </View>
        <View style={RegistroScreenStyles.containerBtn}>
          <BotonAtras text='Atras' onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
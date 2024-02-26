import { View, Text, ScrollView, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import BotonPrimario from '../Componentes/BotonPrimario';
import BotonSecundario from '../Componentes/BotonSecundario';
import RecuperarContraseñaScreenStyles from '../styles/RecuperarContraseñaScreenStyles';
import { sentRecoveryMail } from '../api/recoveryPasswordRequests';
import { useForm, Controller } from 'react-hook-form';

function RecuperarContraseñaScreen({ navigation }) {

  //funcion para enviar un correo de recuperacion al usuario
  function onPressHandler() {
    const res = sentRecoveryMail(email);
    switch (res.status) {
      case 200:
        navigation.navigate("");
        break;
      default:
        alert("Ha ocurrido un error")
    }
  }

  function fakeOnPressHandler() {
    navigation.navigate("CodigoVerificacionScreen");
  }

  const [email, setEmail] = useState('');

  // Estado para manejar los formularios y sus validaciones
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Lógica para enviar el formulario
    console.log(data);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={RecuperarContraseñaScreenStyles.container}>
          <View style={RecuperarContraseñaScreenStyles.boxTitleContainer}>
            <Text style={RecuperarContraseñaScreenStyles.title}>
              ¿Olvidaste la contraseña?
            </Text>
          </View>
          <View style={RecuperarContraseñaScreenStyles.boxTitleContainer}>
            <Text style={RecuperarContraseñaScreenStyles.paragraph}>
              Las instrucciones necesarias a llevar a cabo para recuperar tu constraseña se enviaran al correo electronico ingresado
            </Text>
          </View>
          <View style={RecuperarContraseñaScreenStyles.boxTitleContainer}>
            <Text style={RecuperarContraseñaScreenStyles.subtitle}>
              Recuperar Contraseña
            </Text>
          </View>
          {errors.email && <Text style={RecuperarContraseñaScreenStyles.errorMessage}>{errors.email.message}</Text>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={RecuperarContraseñaScreenStyles.input}
                placeholder="Correo Electronico"
                placeholderTextColor={'gray'}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="email"
            rules={{
              required: 'Correo electrónico requerido',
              pattern: {
                value: /^\S+@\S+\.com$/i,
                message: 'El correo debe contener un dominio correcto'
              }
            }}
          />
          <View style={RecuperarContraseñaScreenStyles.containerBtn}>
            <BotonPrimario
              text='Enviar'
              onPress={handleSubmit(onSubmit)}>
            </BotonPrimario>
          </View>
          <View style={RecuperarContraseñaScreenStyles.containerBtn}>
            <BotonSecundario
              onPress={() => { navigation.goBack() }}
              text='Atras'>
            </BotonSecundario>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default RecuperarContraseñaScreen;
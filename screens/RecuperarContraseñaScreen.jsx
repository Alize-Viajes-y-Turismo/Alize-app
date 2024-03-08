import React from 'react';
import { View, Text, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';
import BotonPrimario from '../componentes/BotonPrimario';
import BotonSecundario from '../componentes/BotonSecundario';
import styles from '../styles/RecuperarContraseñaScreenStyles';
import { sentRecoveryMail } from '../api/requests';
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
    <View style={styles.container}>
      <Text style={[styles.title, {marginTop: "30%", marginBottom: "10%"}]}>
        ¿Olvidaste la contraseña?
      </Text>
      <View style={styles.boxTitleContainer}>
        <Text style={[styles.paragraph, {marginBottom: "10%"}]}>
          Las instrucciones necesarias a llevar a cabo para recuperar tu constraseña se enviaran al correo electronico ingresado
        </Text>
      </View>
      <View style={styles.boxTitleContainer}>
        <Text style={styles.subtitle}>
          Recuperar Contraseña
        </Text>
      </View>
      {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
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
            value: "/^\S+@\S+\.com$/i",
            message: 'El correo debe contener un dominio correcto'
          }
        }}
      />
      <View style={{marginTop: "15%", alignItems: "center"}}>
        <BotonPrimario
          text='Enviar'
          onPress={handleSubmit(onSubmit)}
          style={{marginBottom: "5%"}}>
        </BotonPrimario>
        <BotonSecundario
          onPress={() => { navigation.goBack() }}
          text='Atras'>
        </BotonSecundario>
      </View>
      
    </View>
  )
}

export default RecuperarContraseñaScreen;
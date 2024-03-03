import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import BotonPrimario from '../componentes/BotonPrimario';
import BotonSecundario from '../componentes/BotonSecundario';
import { Entypo } from '@expo/vector-icons';
import styles from '../styles/IniciarSesionScreenStyles';
import { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useForm, Controller } from 'react-hook-form';


function IniciarSesionScreen({ navigation }) {

  const { login } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm();


  const handleLogin = async (user) => {

      try {

        await login(user);
        
      } catch(error) {

        alert(error.message);
      }

  };

  function switchPasswordVisibility() {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sumate a la familia de alize, inicia sesion si ya tenes una cuenta registrada con nosotros</Text>
      <Text style={styles.title}>Ingresar</Text>
      <View style={styles.inputContainer}>
      {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Correo Electrónico"/>
          )}
          name="email"
          rules={{
            required: 'Correo electrónico requerido',
            pattern: {
              value: /^\S+@\S+\.com$/i,
              message: 'El correo debe contener un dominio correcto'
            }
          }}/>
          {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}
          <View style={styles.passwordInputContainer}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.passwordInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Contraseña"
                  secureTextEntry={!showPassword}/>
              )}
              name="password"
              rules={{
                required: 'Contraseña requerida',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                  message: 'La contraseña debe tener al menos 6 caracteres y contener letras y números'
                }
            }}/>
            <TouchableOpacity onPress={switchPasswordVisibility}>
              <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
            </TouchableOpacity>
          </View>
      </View>
      <Text
        onPress={() => { navigation.navigate('RecuperarContraseñaScreen') }}
        style={styles.paragraph}>
        ¿Olvidaste tu Contraseña?
      </Text>
      <BotonPrimario onPress={handleSubmit(handleLogin)} text='Iniciar Sesion'></BotonPrimario>
      <BotonSecundario
        onPress={() => { navigation.goBack() }}
        text='Atras'></BotonSecundario>
      <Text
        onPress={() => { navigation.navigate('RegistroScreen') }}
        style={styles.paragraph}>
        ¿No tenes un usuario? Create una cuenta
      </Text>
    </View>
  );

};

export default IniciarSesionScreen;



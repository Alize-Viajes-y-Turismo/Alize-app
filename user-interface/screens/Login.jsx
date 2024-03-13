import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import BotonPrimario from '../components/BotonPrimario';
import BotonSecundario from '../components/BotonSecundario';
import { Entypo } from '@expo/vector-icons';
import styles from '../styles/login';
import { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { useForm, Controller } from 'react-hook-form';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { ActivityIndicator } from 'react-native';

function Login({ navigation }) {

  const {loginLoading, startLoginLoading, endLoginLoading} = useLoadingContext()

  const { login } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm();


  const handleLogin = async (user) => {

      try {

        startLoginLoading()
        await login(user);
        endLoginLoading()
        
      } catch(error) {

        alert(error.message);
        endLoginLoading()
      }

  };

  function switchPasswordVisibility() {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>

    <Text style={styles.texto1}>Sumate a la familia de Alize. Iniciá sesión si ya tenés una cuenta registrada con nosotros</Text>
    <Text style={styles.texto2}>Ingresar</Text>
    
    {/*email input*/}
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
        }}
    />

    {/*password input*/}
    <View style={styles.container2}>
    {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}
    <View style={styles.passwordInputContainer}>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.passwordInput, {padding: 10}]}
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
        }}
      />
      <TouchableOpacity onPress={switchPasswordVisibility} style={styles.passwordVisibilityButton}>
        <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
      </TouchableOpacity>

    </View>
    </View>
    
        
      <Text
        onPress={() => { navigation.navigate('Recovery') }}
        style={styles.paragraph}>
        ¿Olvidaste tu Contraseña?
      </Text>
      <View style={{alignItems: "center"}}>

      {
        loginLoading ?

        <ActivityIndicator size={100} color="#FC3232" style={styles.activityIndicator} />

        :

        <BotonPrimario 
        onPress={handleSubmit(handleLogin)} 
        text='Iniciar Sesion'
        style={{marginBottom: "5%"}}
        />

      }
      
      <BotonSecundario
        onPress={() => { navigation.goBack() }}
        text='Atras'
        style={{marginBottom: "5%"}}
      />

      </View>
      
      <Text
        onPress={() => { navigation.navigate('RegistroScreen') }}
        style={styles.paragraph2}>
        ¿No tenes un usuario? Create una cuenta
      </Text>
    </View>
  );

};

export default Login;



import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BotonSecundario from '../components/BotonSecundario';
import BotonPrimario from '../components/BotonPrimario';
import Checkbox from 'expo-checkbox';
import styles from '../styles/RegistroScreenStyles';
import { Controller, useForm } from 'react-hook-form';
import { Entypo } from '@expo/vector-icons';
import { useAuthContext } from '../contexts/AuthContext';
import { useLoadingContext } from '../contexts/LoadingContext';
import { ActivityIndicator } from 'react-native';



export default function RegistroPantalla({ navigation }) {

  const {loginLoading, startLoginLoading, endLoginLoading} = useLoadingContext()


  const [isChecked, setChecked] = useState(false);

  const { control, watch, handleSubmit, formState: { errors } } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  function switchPasswordVisibility() {
    setShowPassword(!showPassword);
  };

  function switchConfirmPasswordVisibility() {
    setShowConfirmPassword(!showConfirmPassword);
  };

  
  const { register } = useAuthContext();

  const handleRegister = async (data) => {

    user = {

      email: data.email,
      password: data.password

    }

    try {
      
      startLoginLoading()
      await register(user);
      endLoginLoading()
        
    } catch(error) {

      alert(error.message)
      endLoginLoading()
        
    }
    
  };

      
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "white"}}>
    <View style={styles.container}>

      <Text style={[styles.title, {marginTop: "12%", marginBottom: "7%"}]}>¿Todavía no te registraste?</Text>
      <Text style={[styles.paragraph, {marginBottom: "7%"}]}>Para poder comprar tus pasajes debes tener una cuenta registrada.</Text>
      <Text style={[styles.subtitle, {marginBottom: "7%"}]}>Registrarme</Text>

      {/*Email Input*/}
      {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, {marginBottom: "7%"}]}
              onblur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
            />
        )}
        name='email'
        rules={{
          required: "Este campo es obligatorio",
          pattern: {
            value: /^\S+@\S+\.com$/i,
            message: 'El correo debe contener un dominio correcto'
          }
        }}
      />

        {/* input contrasena */}
        {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={[styles.password.container, {marginBottom: "7%"}]}>
            <TextInput
              placeholder="Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.password.input}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity 
              onPress={switchPasswordVisibility}
              style={styles.password.icon}
            >
              <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
            </TouchableOpacity>
          </View>
          )}
          name="password"
          rules={{
            required: 'Este campo es obligatorio',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: 'La contraseña debe tener al menos 6 caracteres y contener letras y números'
            }
          }}
        />

      {/*Input Confirmar Contrasena*/}
      {errors.confirm && <Text style={styles.errorMessage}>{errors.confirm.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={[styles.password.container, {marginBottom: "7%"}]}>
            <TextInput
              placeholder="Confirmar Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.password.input}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity 
              onPress={switchConfirmPasswordVisibility}
              style={styles.password.icon}
            >
              <Entypo name={showConfirmPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
            </TouchableOpacity>
          </View>
        )}
        name='confirm'
        rules={{
          required: "Este campo es obligatorio",
          validate: (value) => value === watch('password') || 'Las contraseñas no coinciden'
        }}
      />


      {/*Condiciones*/}
      {errors.checkbox && <Text style={styles.errorMessage}>{errors.checkbox.message}</Text>}
      <View style={styles.containerCheck}>
        <Controller 
          control={control}
          render={({field}) => (
            <Checkbox
              style={styles.checkbox}
              value={field.value}
              onValueChange={(value) => field.onChange(value)}
              color='#FC3232'
            />
          )}
          name="checkbox"
          rules={{ required: 'Debes aceptar las condiciones' }}
        />
        <Text style={styles.checkBoxText}>
          He leído y acepto las condiciones
        </Text>
      </View>

     

      <View style={{alignItems: "center", marginTop: "5%"}}>
        {

          loginLoading ?

          <ActivityIndicator size={100} color="#FC3232" style={styles.activityIndicator} />
          
          :

          <BotonPrimario text='Registrarme' onPress={handleSubmit(handleRegister)} style={{marginBottom: 20}} />
          
        }
        
        <BotonSecundario text='Atras' onPress={() => navigation.goBack()} />
      </View>
        
    </View>
    </ScrollView>
  );
}
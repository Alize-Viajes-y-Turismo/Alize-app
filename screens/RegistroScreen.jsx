import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BotonSecundario from '../componentes/BotonSecundario';
import BotonPrimario from '../componentes/BotonPrimario';
import Checkbox from 'expo-checkbox';
import styles from '../styles/RegistroScreenStyles';
import { Controller, useForm } from 'react-hook-form';
import { Entypo } from '@expo/vector-icons';
import { useAuthContext } from '../contexts/AuthContext';



export default function RegistroPantalla({ navigation }) {

  const { register } = useAuthContext();
  
  const [isChecked, setChecked] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  function switchPasswordVisibility() {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (data) => {

    user = {

      email: data.email,
      password: data.password

    }

    try {
        
      await register(user);
        
    } catch(error) {

      alert(error.message)
        
    }
    
  };
      
  return (
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
          required: "Correo electrónico requerido",
          pattern: {
            value: "/^\S+@\S+\.com$/i",
            message: 'El correo debe contener un dominio correcto'
          }
        }}
      />

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
            required: 'Contraseña es requerida',
            pattern: {
              value: "/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/",
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
            />
            <TouchableOpacity 
              onPress={switchPasswordVisibility}
              style={styles.password.icon}
            >
              <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
            </TouchableOpacity>
          </View>
        )}
        name='confirm'
        rules={{
          required: "Confirmar contraseña es requerida",
          pattern: {
            value: "/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/",
            validate: value => value === control.fieldsRef.current.password.value || "Las contraseñas no coinciden"
          }
        }}
      />

      {/*Condiciones*/}
      <View style={styles.containerCheck}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#FC3232' : undefined}
        />
        <Text style={styles.checkBoxText}>
          He leído y acepto las condiciones
        </Text>
      </View>
      <View style={{alignItems: "center", marginTop: "5%"}}>
        <BotonPrimario text='Registrarme' onPress={handleSubmit(handleRegister)} style={{marginBottom: 20}} />
        <BotonSecundario text='Atras' onPress={() => navigation.goBack()} />
      </View>
        
    </View>
  );
}
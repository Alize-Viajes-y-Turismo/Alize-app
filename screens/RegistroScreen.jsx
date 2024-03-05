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
      <Text style={styles.title}>¿Todavía no te registraste?</Text>
      <Text style={styles.paragraph}>Para poder comprar tus pasajes debes tener una cuenta registrada.</Text>
      <Text style={styles.subtitle}>Registrarme</Text>
      {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
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
              secureTextEntry={!showPassword}
            />
          )}
          name="password"
          rules={{
            required: 'Contraseña es requerida',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: 'La contraseña debe tener al menos 6 caracteres y contener letras y números'
            }
          }}/>
        <TouchableOpacity onPress={switchPasswordVisibility}>
          <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      {errors.confirm && <Text style={styles.errorMessage}>{errors.confirm.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder="Confirmar Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            <TouchableOpacity onPress={switchPasswordVisibility}>
              <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
            </TouchableOpacity>
          </View>
        )}
        name='confirm'
        rules={{
          required: "Confirmar contraseña es requerida",
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
            validate: value => value === control.fieldsRef.current.password.value || "Las contraseñas no coinciden"
          }
        }}/>
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
      <View style={styles.containerBtn}>
        <BotonPrimario text='Registrarme' onPress={handleSubmit(handleRegister)} />
      </View>
      <View style={styles.containerBtn}>
        <BotonSecundario text='Atras' onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
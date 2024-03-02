import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BotonSecundario from '../Componentes/BotonSecundario';
import BotonPrimario from '../Componentes/BotonPrimario';
import Checkbox from 'expo-checkbox';
import RegistroScreenStyles from '../styles/RegistroScreenStyles';
import { registerRequest } from '../api/authRequests'
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
        {errors.email && <Text style={RegistroScreenStyles.errorMessage}>{errors.email.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={RegistroScreenStyles.input}
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
          }}
        />
        {errors.password && <Text style={RegistroScreenStyles.errorMessage}>{errors.password.message}</Text>}
        <View style={RegistroScreenStyles.passwordInputContainer}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={RegistroScreenStyles.passwordInput}
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
            }}
          />

          <TouchableOpacity onPress={switchPasswordVisibility}>
            <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
          </TouchableOpacity>
        </View>
        {errors.confirm && <Text style={RegistroScreenStyles.errorMessage}>{errors.confirm.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={RegistroScreenStyles.passwordInputContainer}>
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
          }}>
        </Controller>
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
          <BotonPrimario text='Registrarme' onPress={handleSubmit(handleRegister)} />
        </View>
        <View style={RegistroScreenStyles.containerBtn}>
          <BotonSecundario text='Atras' onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
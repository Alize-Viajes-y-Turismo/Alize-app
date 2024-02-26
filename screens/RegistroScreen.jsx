import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BotonSecundario from '../Componentes/BotonSecundario';
import BotonPrimario from '../Componentes/BotonPrimario';
import Checkbox from 'expo-checkbox';
import { useAuthContext } from '../contexts/AuthContext';
import RegistroScreenStyles from '../styles/RegistroScreenStyles';
import { registerRequest } from '../api/authRequests'
import { Controller, useForm } from 'react-hook-form';
import { Entypo } from '@expo/vector-icons';


export default function RegistroPantalla({ navigation }) {
  //funcion para autenticar al usuario (se usa adentro del handleRegister)
  const { login, fakeLogin } = useAuthContext()

  //estados para capturar los datos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  //esta funcion registra al usuario y luego ejecuta el login si el email ingresado no pertenece a una cuenta existente
  //en caso contrario, se notifica al usuario que el email ingresado ya pertenece a una cuenta
  async function handleRegister() {
    if (isDataValidated()) {
      try {
        const res = await registerRequest(email, password)
        switch (res.status) {
          case 200:
            login();
            break;
          case 409:
            alert("El email que ingresaste ya pertenece a una cuenta")
            break;
          default:
            alert("Error interno del servidor")
        }
      } catch (err) {
        alert(err.message)
      }
    }
  }

  function fakeHandleRegister() {
    fakeLogin()
  }

  //funcion que devuelve true si los datos son validos
  //en caso contrario alerta al usuario y devuelve false
  function isDataValidated() {
    if (password != confirmPassword) {
      alert("Las contraseñas no coinciden");
      return false;
    } else if (!isChecked) {
      alert("Debes aceptar las condiciones");
      return false;
    } else {
      return true;
    }
  }

  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  const [showPassword, setShowPassword] = useState(false);

  function switchPasswordVisibility() {
    setShowPassword(!showPassword);
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
          render={({ field: { onChangeText, onblur, value } }) => (
            <View>
              <TextInput
                style={RegistroScreenStyles.input}
                onblur={onblur}
                onChangeText={onChangeText}
                value={value}
                placeholder="Email"
              />
            </View>
          )}
          name='email'
          rules={{
            required: "Correo electrónico requerido",
            pattern: {
              value: /^\S+@\S+\.com$/i,
              message: 'El correo debe contener un dominio correcto'
            }
          }}
        >
        </Controller>
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
          <BotonPrimario text='Registrarme' onPress={handleSubmit(onSubmit)} />
        </View>
        <View style={RegistroScreenStyles.containerBtn}>
          <BotonSecundario text='Atras' onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
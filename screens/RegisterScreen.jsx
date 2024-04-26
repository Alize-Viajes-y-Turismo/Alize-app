import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Entypo } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import RegisterScreenStyles from './styles/RegisterScreenStyles';

import { useRegisterContext } from '../contexts/RegisterContext';
import { useUserContext } from '../contexts/UserContext';
import { useLoadingContext } from '../contexts/LoadingContext';

export default function RegisterScreen({ navigation }) {

  const { loginLoading, startLoginLoading, endLoginLoading } = useLoadingContext();
  const { registerUser } = useRegisterContext();
  const { sendEmailVerificationCode } = useUserContext();

  const { control, watch, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function switchPasswordVisibility() {
    setShowPassword(!showPassword);
  };

  function switchConfirmPasswordVisibility() {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegisterUser = async (data) => {

    try {

      startLoginLoading();
      const success = await registerUser(data);

      if (success) {

        await sendEmailVerificationCode(data);
        navigation.navigate("VerificationCodeScreen", { navigate: "fromRegister" });

      };
      endLoginLoading();

    } catch(error) {

      console.log(error.message)
      endLoginLoading()

    }  
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "white"}}>
      <View style={RegisterScreenStyles.container}>
        <Text style={[RegisterScreenStyles.title, {marginTop: "12%", marginBottom: "7%"}]}>¿Todavía no te registraste?</Text>
        <Text style={[RegisterScreenStyles.paragraph, {marginBottom: "7%"}]}>Para poder comprar tus pasajes debes tener una cuenta registrada.</Text>
        <Text style={[RegisterScreenStyles.subtitle, {marginBottom: "7%"}]}>Registrarme</Text>

        {errors.name && <Text style={RegisterScreenStyles.errorMessage}>{errors.name.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[RegisterScreenStyles.input, {marginBottom: "7%"}]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nombre de usuario"
            />
          )}
          name='name'
          rules={{
            required: "Este campo es obligatorio",
          }}
        />

        {errors.email && <Text style={RegisterScreenStyles.errorMessage}>{errors.email.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[RegisterScreenStyles.input, {marginBottom: "7%"}]}
              onBlur={onBlur}
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

        {errors.password && <Text style={RegisterScreenStyles.errorMessage}>{errors.password.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={[RegisterScreenStyles.password.container, {marginBottom: "7%"}]}>
              <TextInput
                placeholder="Contraseña"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={RegisterScreenStyles.password.input}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity 
                onPress={switchPasswordVisibility}
                style={RegisterScreenStyles.password.icon}
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

        {errors.confirm && <Text style={RegisterScreenStyles.errorMessage}>{errors.confirm.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={[RegisterScreenStyles.password.container, {marginBottom: "7%"}]}>
              <TextInput
                placeholder="Confirmar Contraseña"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={RegisterScreenStyles.password.input}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity 
                onPress={switchConfirmPasswordVisibility}
                style={RegisterScreenStyles.password.icon}
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

        {errors.checkbox && <Text style={RegisterScreenStyles.errorMessage}>{errors.checkbox.message}</Text>}
        <View style={RegisterScreenStyles.containerCheck}>
          <Controller 
            control={control}
            render={({field}) => (
              <Checkbox
                style={RegisterScreenStyles.checkbox}
                value={field.value}
                onValueChange={(value) => field.onChange(value)}
                color='#FC3232'
              />
            )}
            name="checkbox"
            rules={{ required: 'Debes aceptar las condiciones' }}
          />
          <Text style={RegisterScreenStyles.checkBoxText}>
            He leído y acepto las condiciones
          </Text>
        </View>

        <View style={{alignItems: "center", marginTop: "5%"}}>
          {loginLoading ? (
            <ActivityIndicator size={100} color="#FC3232" />
          ) : (
            <TouchableOpacity onPress={handleSubmit(handleRegisterUser)} style={[RegisterScreenStyles.button, {marginBottom: 20}]}>
              <Text style={RegisterScreenStyles.buttonText}>Registrarme</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => navigation.goBack()} style={RegisterScreenStyles.secondaryButton}>
            <Text style={RegisterScreenStyles.buttonText}>Atras</Text>
          </TouchableOpacity>
        </View>
          
      </View>
    </ScrollView>
  )
};
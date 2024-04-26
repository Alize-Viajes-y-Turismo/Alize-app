import React from 'react';
import { View, Text, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import RecoveryPasswordScreenStyles from './styles/RecoveryPasswordScreenStyles';

import { useLoadingContext } from '../contexts/LoadingContext';
import { useRecoveryPasswordContext } from '../contexts/RecoveryPasswordContext';

const RecoveryPasswordScreen = ({ navigation }) => {
  const { recoveryPassword, emailRecoveryPassword } = useRecoveryPasswordContext();
  const { loginLoading, startLoginLoading, endLoginLoading } = useLoadingContext();

  const { control, handleSubmit, formState: { errors } } = useForm();

  const handleRecoveryPassword = async (data) => {
    data = {
      email: emailRecoveryPassword.email,
      newPassword: data.newPassword
    }

    try {
      startLoginLoading();
      await recoveryPassword(data);
      endLoginLoading();
      navigation.navigate("LoginScreen");
    } catch(error) {
      console.log(error.message)
      endLoginLoading()
    }  
  };

  return (
    <View style={RecoveryPasswordScreenStyles.container}>
      <Text style={RecoveryPasswordScreenStyles.title}>Recuperar Contraseña</Text> {/* Cambié el título */}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={RecoveryPasswordScreenStyles.input}
            placeholder="Contraseña nueva"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="newPassword"
        rules={{ required: 'Contraseña nueva requerida' }}
        defaultValue=""
      />
      {errors.newPassword && <Text style={RecoveryPasswordScreenStyles.errorMessage}>{errors.newPassword.message}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={RecoveryPasswordScreenStyles.input}
            placeholder="Confirmar Contraseña nueva"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="confirmNewPassword"
        rules={{ required: 'Confirmar contraseña nueva requerida' }}
        defaultValue=""
      />
      {errors.confirmNewPassword && <Text style={RecoveryPasswordScreenStyles.errorMessage}>{errors.confirmNewPassword.message}</Text>}

      <View style={RecoveryPasswordScreenStyles.buttonContainer}>
        {loginLoading ? (
          <ActivityIndicator size={100} color="#FC3232"/>
        ) : (
          <TouchableOpacity onPress={handleSubmit(handleRecoveryPassword)} style={RecoveryPasswordScreenStyles.primaryButton}>
            <Text style={RecoveryPasswordScreenStyles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => navigation.goBack()} style={RecoveryPasswordScreenStyles.secondaryButton}>
          <Text style={RecoveryPasswordScreenStyles.buttonText}>Atrás</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecoveryPasswordScreen;
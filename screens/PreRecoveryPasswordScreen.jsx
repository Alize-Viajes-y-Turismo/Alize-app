import React from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { useRecoveryPasswordContext } from '../contexts/RecoveryPasswordContext';
import { useLoadingContext } from '../contexts/LoadingContext';

import PreRecoveryPasswordScreenStyles from './styles/PreRecoveryPasswordScreenStyles';

function PreRecoveryPasswordScreen({ navigation }) {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const { preRecoveryPassword } = useRecoveryPasswordContext();
  const { loginLoading, startLoginLoading, endLoginLoading } = useLoadingContext();

  const handlePreRecoveryPassword = async (data) => {

    try {

      startLoginLoading();
      await preRecoveryPassword(data);
      navigation.navigate("VerificationCodeScreen");
      endLoginLoading();

    } catch(error) {
      console.log(error.message)
      endLoginLoading();
    }  
  };

  return (
    <View style={PreRecoveryPasswordScreenStyles.container}>
      <Text style={[PreRecoveryPasswordScreenStyles.title, {marginTop: "30%", marginBottom: "10%"}]}>
        ¿Olvidaste la contraseña?
      </Text>
      <View style={PreRecoveryPasswordScreenStyles.boxTitleContainer}>
        <Text style={[PreRecoveryPasswordScreenStyles.paragraph, {marginBottom: "10%"}]}>
          Las instrucciones necesarias a llevar a cabo para recuperar tu constraseña se enviaran al correo electronico ingresado
        </Text>
      </View>
      <View style={PreRecoveryPasswordScreenStyles.boxTitleContainer}>
        <Text style={PreRecoveryPasswordScreenStyles.subtitle}>
          Recuperar Contraseña
        </Text>
      </View>
      {errors.email && <Text style={PreRecoveryPasswordScreenStyles.errorMessage}>{errors.email.message}</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={PreRecoveryPasswordScreenStyles.input}
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
            value: /^\S+@\S+\.com$/i,
            message: 'El correo debe contener un dominio correcto'
          }
        }}
      />
      <View style={{marginTop: "15%", alignItems: "center"}}>
      
        {loginLoading ? (
          <ActivityIndicator size={100} color="#FC3232"/>
        ) : (
          <TouchableOpacity // Cambié a TouchableOpacity
            onPress={handleSubmit(handlePreRecoveryPassword)}
            style={[PreRecoveryPasswordScreenStyles.button, {marginBottom: "5%"}]}>
            <Text style={PreRecoveryPasswordScreenStyles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity // Cambié a TouchableOpacity
          onPress={() => { navigation.goBack() }}
          style={PreRecoveryPasswordScreenStyles.secondaryButton}>
          <Text style={PreRecoveryPasswordScreenStyles.secondaryButtonText}>Atrás</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default PreRecoveryPasswordScreen;

import React from 'react';
import { Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';

import { useAuthContext } from '../contexts/AuthContext';
import { useUserContext } from '../contexts/UserContext';
import { useLoadingContext } from '../contexts/LoadingContext';

import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

import LoginScreenStyles from './styles/LoginScreenStyles';

function LoginScreen({ navigation }) {
  const { login } = useAuthContext();
  const { sendEmailVerificationCode } = useUserContext();
  const { loginLoading, startLoginLoading, endLoginLoading } = useLoadingContext();
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (user) => {
    try {
      startLoginLoading();

      const { success, verified } = await login(user);

      if (success && !verified) {
        await sendEmailVerificationCode(user);
        navigation.navigate("VerificationCodeScreen", { navigate: "fromLogin" });
      }

      endLoginLoading();
    } catch (error) {
      console.log(error.message);
      endLoginLoading();
    }
  };

  const switchPasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={LoginScreenStyles.container}>
      <Text style={[LoginScreenStyles.h1, { marginBottom: 15, marginTop: 15 }]}>
        Sumate a la familia de alize, iniciá sesión si ya tenés una cuenta registrada con nosotros
      </Text>
      <Text style={[LoginScreenStyles.h2, { marginBottom: '10%' }]}>Ingresar</Text>

      <View>
        {errors.email && <Text style={[LoginScreenStyles.errorMessage, { marginTop: '10%' }]}>{errors.email.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[LoginScreenStyles.input, { marginBottom: '15%', padding: 10 }]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Correo Electrónico"
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
      </View>

      <View style={[LoginScreenStyles.passwordInputContainer, { marginBottom: '10%' }]}>
        {errors.password && <Text style={LoginScreenStyles.errorMessage}>{errors.password.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[LoginScreenStyles.passwordInput, { padding: 10 }]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Contraseña"
              secureTextEntry={!showPassword}
            />
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
        <TouchableOpacity onPress={switchPasswordVisibility} style={LoginScreenStyles.passwordVisibilityButton}>
          <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <Text onPress={() => { navigation.navigate('PreRecoveryPasswordScreen') }} style={[LoginScreenStyles.paragraph, { marginBottom: '10%' }]}>
        ¿Olvidaste tu Contraseña?
      </Text>

      <View style={{ alignItems: 'center' }}>
        {loginLoading ? (
          <ActivityIndicator size={100} color="#FC3232"/>
        ) : (
          <PrimaryButton onPress={handleSubmit(handleLogin)} text="Iniciar Sesión" />
        )}
        <SecondaryButton onPress={() => navigation.goBack()} text="Atrás" />
      </View>

      <Text onPress={() => { navigation.navigate('RegisterScreen') }} style={LoginScreenStyles.paragraph}>
        ¿No tienes un usuario? Crea una cuenta
      </Text>
    </View>
  );
}

export default LoginScreen;
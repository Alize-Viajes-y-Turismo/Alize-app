import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import BotonPrimario from '../Componentes/BotonPrimario';
import BotonSecundario from '../Componentes/BotonSecundario';
import { Entypo } from '@expo/vector-icons';
import IniciarSesionScreenStyles from '../styles/IniciarSesionScreenStyles';
import { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { loginRequest } from '../api/authRequests';
import { useForm, Controller } from 'react-hook-form';


function IniciarSesionScreen({ navigation }) {
  //funcion para autenticar al usuario (se usa adentro del loginHandler)
  const { login, fakeLogin, fakeLogout } = useAuthContext();

  //estados para capturar los datos del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //estado para mostrar/ocultar contraseña
  const [showPassword, setShowPassword] = useState(false);

  //funcion para cambiar visibilidad de la contraseña
  function switchPasswordVisibility() {
    setShowPassword(!showPassword);
  };

  //esta funcion ejecuta el login solamente si los datos ingresados son correctos
  //en caso contrario, se le notifica al usuario que los datos que ingresó son incorrectos
  async function loginHandler() {
    try {
      const res = await loginRequest(email, password)
      switch (res.status) {
        case 200:
          login(res.data);
          setEmail("");
          setPassword("");
          break;
        case 409:
          alert("Los datos ingresados son incorrectos")
          break;
        default:
          alert("Error interno del servidor")
      }
    } catch (err) {
      alert(err.message)
    }
  }

  //funcion para autenticar directamente sin enviar datos al backend
  function fakeLoginHandler() {
    fakeLogin()
  }

  // Estado para manejar los formularios y sus validaciones
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Lógica para enviar el formulario
    console.log(data);
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={IniciarSesionScreenStyles.container}>
          <View >
            <Text style={IniciarSesionScreenStyles.title}>
              Sumate a la familia de alize, inicia sesion si ya tenes una cuenta registrada con nosotros
            </Text>
          </View>
          <View >
            <Text style={IniciarSesionScreenStyles.subtitle}>
              Ingresar
            </Text>
          </View>
          <View style={IniciarSesionScreenStyles.inputContainer}>
            {errors.email && <Text style={IniciarSesionScreenStyles.errorMessage}>{errors.email.message}</Text>}
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={IniciarSesionScreenStyles.input}
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
            <View style={IniciarSesionScreenStyles.inputContainer}>
              {errors.password && <Text style={IniciarSesionScreenStyles.errorMessage}>{errors.password.message}</Text>}
              <View style={IniciarSesionScreenStyles.passwordInputContainer}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={IniciarSesionScreenStyles.passwordInput}
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

                <TouchableOpacity onPress={switchPasswordVisibility}>
                  <Entypo name={showPassword ? 'eye' : 'eye-with-line'} size={24} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={IniciarSesionScreenStyles.boxTitleContainer}>
            <Text
              onPress={() => { navigation.navigate('RecuperarContraseñaScreen') }}
              style={IniciarSesionScreenStyles.paragraph}>
              ¿Olvidaste tu Contraseña?
            </Text>
          </View>
          <View style={IniciarSesionScreenStyles.btnContainer}>
            <BotonPrimario onPress={handleSubmit(onSubmit)} text='Iniciar Sesion'></BotonPrimario>
          </View>
          <View style={IniciarSesionScreenStyles.btnContainer}>
            <BotonSecundario
              onPress={() => { navigation.goBack() }}
              text='Atras'></BotonSecundario>
          </View>
          <View >
            <Text
              onPress={() => { navigation.navigate('RegistroScreen') }}
              style={IniciarSesionScreenStyles.paragraph}>
              ¿No tenes un usuario? Create una cuenta
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

};

export default IniciarSesionScreen;



import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useUpdateContext } from '../contexts/UpdateContext';

const UpdatePasswordScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors }, reset, getValues } = useForm();
  const { updatePassword } = useUpdateContext();
  const [loading, setLoading] = useState(false);

  const handleUpdatePassword = async (data) => {
    setLoading(true);
    try {
      const success = await updatePassword(data);
      if (success) {
        resetForm();
        navigation.navigate("ProfileScreen");
      } else {
        Alert.alert("Error", "La actualización de la contraseña falló. Por favor, inténtalo de nuevo.");
      }
    } catch(error) {
      console.log(error.message);
      Alert.alert("Error", "Hubo un problema al intentar actualizar la contraseña. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    reset({ password: "", newPassword: "", confirmNewPassword: "" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambiar Contraseña</Text>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Contraseña actual"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: 'Contraseña requerida' }}
        defaultValue=""
      />
      {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nueva contraseña"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="newPassword"
        rules={{ required: 'Contraseña nueva requerida', minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' } }}
        defaultValue=""
      />
      {errors.newPassword && <Text style={styles.errorMessage}>{errors.newPassword.message}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Confirmar nueva contraseña"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="confirmNewPassword"
        rules={{ required: 'Confirmar contraseña nueva requerida', validate: value => value === getValues("newPassword") || "Las contraseñas no coinciden" }}
        defaultValue=""
      />
      {errors.confirmNewPassword && <Text style={styles.errorMessage}>{errors.confirmNewPassword.message}</Text>}

      <View style={styles.buttonContainer}>
        {loading ? (
          <ActivityIndicator size={100} color="#FC3232"/>
        ) : (
          <>
            <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={handleSubmit(handleUpdatePassword)}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => {
              resetForm();
              navigation.navigate("ProfileScreen");
            }}>
              <Text style={styles.buttonText}>Atrás</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#FC3232',
    marginRight: 10,
  },
  secondaryButton: {
    backgroundColor: '#DDDDDD',
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UpdatePasswordScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useUpdateContext } from '../contexts/UpdateContext';
import { useUserContext } from '../contexts/UserContext';

const UpdateNameScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm();
  const { updateName } = useUpdateContext();
  const { getProfileData } = useUserContext();
  const [loading, setLoading] = useState(false);

  const handleUpdateName = async (data) => {
    setLoading(true);
    try {
      const success = await updateName(data);
      if (success) {
        await getProfileData();
        resetForm();
        navigation.navigate("ProfileScreen");
      } else {
        console.log("La actualización del nombre falló");
      }
    } catch(error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    reset({ newName: "", password: "" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambiar Nombre</Text>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nuevo nombre"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="newName"
        rules={{ required: 'Nombre nuevo requerido' }}
        defaultValue=""
      />
      {errors.newName && <Text style={styles.errorMessage}>{errors.newName.message}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
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

      <View style={styles.buttonContainer}>
        {loading ? (
          <ActivityIndicator size={100} color="#FC3232"/>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleSubmit(handleUpdateName)}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.secondaryButton} onPress={() => {
          resetForm();
          navigation.navigate("ProfileScreen");
        }}>
          <Text style={styles.buttonText}>Atrás</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FC3232',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UpdateNameScreen;
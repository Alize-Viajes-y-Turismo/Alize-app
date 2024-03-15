import React, { useState, useRef, useContext } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { useAuthContext } from '../contexts/AuthContext';
import { useLoadingContext } from '../contexts/LoadingContext';
import { TouchableOpacity } from 'react-native';

const VerificationCodeScreen = () => {
  
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const { authData, verifyCode, registerUser } = useAuthContext();
  const { startLoading, endLoading } = useLoadingContext();
  const emailCode = code.join('');

  const handleTextChange = (text, index) => {

    // Si el texto es un número y hay un siguiente cuadro de texto, mover el foco
    if (!isNaN(text) && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Actualizar el estado con el nuevo código
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  const handleRegisterUser = async () => {

    try {

        startLoading();
        registerUser(authData, emailCode, verifyCode );
        endLoading();

    }catch (error){

      console.log(error.message)
      endLoading();

    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Código de Verificación</Text>
      <Text style={styles.subtitle}>Por favor, ingresa los 6 dígitos del código:</Text>
      <View style={styles.codeContainer}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => handleTextChange(text, index)}
          />
        ))}
      </View>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity onPress={ handleRegisterUser }>
        <Text>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.goBack() }>
        <Text>Cerrar</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default VerificationCodeScreen;
